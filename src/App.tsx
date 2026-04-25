import { useState, useMemo, useEffect, useRef } from 'react';
import { aliens, Alien } from './data/aliens';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
  prompt(): Promise<void>;
}

const THREAT_META: Record<string, { label: string; color: string; bg: string; border: string; glow: string; icon: string; hex: string }> = {
  'pacífico':               { label: 'PACÍFICO',              color: 'text-emerald-400', bg: 'bg-emerald-950/60',   border: 'border-emerald-500/50', glow: 'shadow-emerald-500/20', icon: '◈', hex: '#10b981' },
  'neutro':                 { label: 'NEUTRO',                color: 'text-cyan-400',    bg: 'bg-cyan-950/60',      border: 'border-cyan-500/50',    glow: 'shadow-cyan-500/20',    icon: '◉', hex: '#06b6d4' },
  'perigoso':               { label: 'PERIGO',                color: 'text-amber-400',   bg: 'bg-amber-950/60',     border: 'border-amber-500/50',   glow: 'shadow-amber-500/20',   icon: '▲', hex: '#f59e0b' },
  'extremamente perigoso':  { label: 'AMEAÇA EXTREMA',       color: 'text-red-400',     bg: 'bg-red-950/60',       border: 'border-red-600/50',     glow: 'shadow-red-600/30',     icon: '☢', hex: '#ef4444' },
};

function Scanline() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.03]">
      <div className="absolute inset-0"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,80,0.4) 2px, rgba(0,255,80,0.4) 4px)' }} />
    </div>
  );
}

function TypewriterText({ text, speed = 18 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(iv); setDone(true); }
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed]);
  return <span>{displayed}{!done && <span className="animate-pulse text-green-400">█</span>}</span>;
}

function HexPattern({ seed }: { seed: string }) {
  const chars = '0123456789ABCDEF';
  const hash = seed.split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 0);
  const rows = Array.from({ length: 4 }, (_, r) =>
    Array.from({ length: 20 }, (_, c) => chars[(Math.abs(hash * (r + 1) * (c + 7)) % 16)])
  );
  return (
    <div className="font-mono text-[9px] text-green-900/70 leading-3 select-none overflow-hidden">
      {rows.map((row, r) => (
        <div key={r}>{row.join(' ')}</div>
      ))}
    </div>
  );
}

function isAppInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true;
}

function InstallPrompt({
  canInstall,
  manualInstall,
  onInstall,
  onClose,
}: {
  canInstall: boolean;
  manualInstall: boolean;
  onInstall: () => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      style={{ fontFamily: '"Share Tech Mono", "Courier New", monospace' }}>
      <div className="relative w-full max-w-lg border-2 border-red-600 bg-zinc-950 shadow-2xl shadow-red-950/60">
        <div className="pointer-events-none absolute -right-5 top-5 rotate-[12deg] border-[3px] border-red-500/50 px-4 py-1 text-xl font-black tracking-[0.18em] text-red-500/40">
          NÃO INSTALADO
        </div>

        <div className="border-b border-red-900 bg-red-950/50 px-5 py-3">
          <div className="text-[9px] uppercase tracking-[0.35em] text-red-500">Sistema Galileu · Download do App</div>
          <h2 className="mt-1 text-lg font-bold uppercase tracking-[0.18em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,1)]">
            Instalar arquivo no dispositivo?
          </h2>
        </div>

        <div className="space-y-4 px-5 py-5 text-sm leading-relaxed text-zinc-300">
          <div className="border border-red-900/70 bg-black/50 px-3 py-2 text-xs uppercase tracking-[0.16em] text-red-400">
            Status detectado: este navegador ainda não fez o download/instalação do app.
          </div>

          <p>
            Toda vez que esta página for aberta e o app não estiver instalado, o sistema perguntará se deseja instalar o aplicativo.
          </p>

          {manualInstall && (
            <div className="border border-amber-700/70 bg-amber-950/30 p-3 text-xs text-amber-300">
              Instalação automática não disponível neste navegador agora. Use o menu do navegador e escolha "Adicionar à tela inicial" ou "Instalar app".
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 border-t border-zinc-800 px-5 py-4 sm:flex-row sm:justify-end">
          <button
            onClick={onClose}
            className="border border-zinc-700 px-4 py-2 text-xs uppercase tracking-[0.18em] text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-200"
          >
            Agora não
          </button>
          <button
            onClick={onInstall}
            className="border border-red-500 bg-red-950 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-red-300 shadow-lg shadow-red-950/50 transition-colors hover:bg-red-900 hover:text-white"
          >
            {canInstall ? 'Baixar / Instalar App' : 'Ver instruções de instalação'}
          </button>
        </div>
      </div>
    </div>
  );
}

function AlienCard({ alien, onClick }: { alien: Alien; onClick: () => void }) {
  const tm = THREAT_META[alien.ameaca];
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`cursor-pointer relative group border ${tm.border} bg-black/80 transition-all duration-300 overflow-hidden ${hover ? `shadow-lg ${tm.glow}` : ''}`}
      style={{ fontFamily: '"Share Tech Mono", "Courier New", monospace' }}
    >
      {/* Corner brackets */}
      <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${tm.border} z-10`} />
      <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${tm.border} z-10`} />
      <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${tm.border} z-10`} />
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${tm.border} z-10`} />

      {/* Classification stamp */}
      <div className={`absolute top-2 right-6 z-10 text-[8px] font-bold ${tm.color} opacity-70 tracking-widest rotate-3`}>
        {tm.icon} {tm.label}
      </div>

      {/* Image */}
      <div className="relative bg-black flex items-center justify-center min-h-[220px] overflow-hidden">
        {/* Hex background noise */}
        <div className="absolute inset-0 p-2 overflow-hidden opacity-20">
          <HexPattern seed={alien.id} />
        </div>
        {/* Scan line on hover */}
        {hover && (
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            <div className="absolute w-full h-[2px] bg-green-400/30"
              style={{ animation: 'scandown 1.2s linear infinite', top: 0 }} />
          </div>
        )}
        <img
          src={`https://galactic-server.com/WhoVisitEarth2/${alien.imageFile}`}
          alt={alien.nome}
          className="relative z-[2] object-contain max-h-[260px] w-auto mx-auto transition-all duration-500"
          style={{ imageRendering: 'auto', filter: hover ? `drop-shadow(0 0 12px ${tm.hex})` : 'none' }}
          loading="lazy"
          onError={(e) => {
            const el = e.target as HTMLImageElement;
            el.src = `https://galactic-server.com/WhoVisitEarth2/${alien.imageFile.replace('.png', '.gif')}`;
          }}
        />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent z-[3]" />
      </div>

      {/* Info */}
      <div className="px-4 pt-2 pb-4 relative z-[4]">
        <div className={`text-[9px] tracking-[0.25em] ${tm.color} mb-0.5 uppercase`}>ID-{alien.id.toUpperCase()}</div>
        <h3 className="text-white text-base font-bold tracking-widest uppercase leading-tight">{alien.nome}</h3>
        {alien.outrosNomes && (
          <div className="text-zinc-500 text-[10px] mt-0.5 truncate">AKA: {alien.outrosNomes}</div>
        )}
        <div className="mt-2 text-zinc-400 text-[10px] leading-4 line-clamp-2">{alien.origem}</div>
        <div className="mt-2 flex gap-1.5 flex-wrap">
          <span className={`text-[9px] px-1.5 py-0.5 border ${tm.border} ${tm.color} ${tm.bg} tracking-wider uppercase`}>{alien.tipo}</span>
        </div>
      </div>
    </div>
  );
}

function Modal({ alien, onClose }: { alien: Alien; onClose: () => void }) {
  const tm = THREAT_META[alien.ameaca];
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 300);
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => { clearTimeout(t); document.removeEventListener('keydown', handler); };
  }, [onClose]);

  const dossierCode = `${alien.id.toUpperCase().slice(0, 3)}-${Math.abs(alien.id.split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 0)) % 9999}-${alien.tipo.length * 37}`;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/90 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}>
      <div ref={ref}
        className={`relative w-full max-w-4xl border-2 ${tm.border} bg-zinc-950 my-4`}
        style={{ fontFamily: '"Share Tech Mono", "Courier New", monospace', boxShadow: `0 0 60px ${tm.hex}22` }}
        onClick={e => e.stopPropagation()}>

        {/* Corner brackets */}
        <div className={`absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 ${tm.border}`} />
        <div className={`absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 ${tm.border}`} />
        <div className={`absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 ${tm.border}`} />
        <div className={`absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 ${tm.border}`} />

        {/* Header bar */}
        <div className={`flex items-center justify-between px-5 py-3 border-b ${tm.border} ${tm.bg}`}>
          <div className="flex items-center gap-3">
            <span className={`text-xl ${tm.color}`}>{tm.icon}</span>
            <div>
              <div className={`text-[9px] tracking-[0.3em] ${tm.color} uppercase`}>DOSSIER CLASSIFICADO · ACESSO RESTRITO</div>
              <div className="text-white text-xs tracking-widest uppercase">{dossierCode}</div>
            </div>
          </div>
          <button onClick={onClose}
            className={`border ${tm.border} ${tm.color} text-xs px-3 py-1 hover:${tm.bg} transition-colors tracking-widest`}>
            [ESC] FECHAR
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left: Image */}
          <div className="lg:w-80 xl:w-96 flex-shrink-0 flex flex-col">
            <div className="relative bg-black flex items-center justify-center min-h-[320px] border-b lg:border-b-0 lg:border-r border-zinc-800 overflow-hidden">
              <div className="absolute inset-0 p-3 opacity-10">
                <HexPattern seed={alien.id + 'modal'} />
              </div>
              <img
                src={`https://galactic-server.com/WhoVisitEarth2/${alien.imageFile}`}
                alt={alien.nome}
                className="relative z-10 object-contain max-h-[380px] w-auto"
                style={{ imageRendering: 'auto', filter: `drop-shadow(0 0 20px ${tm.hex}88)` }}
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.src = `https://galactic-server.com/WhoVisitEarth2/${alien.imageFile.replace('.png', '.gif')}`;
                }}
              />
            </div>

            {/* Encrypted block */}
            <div className={`border-t ${tm.border} p-3 bg-black/40`}>
              <div className={`text-[8px] ${tm.color} tracking-widest mb-1`}>▸ ASSINATURA CRIPTOGRÁFICA</div>
              <HexPattern seed={alien.id + alien.tipo} />
            </div>

            {/* Threat meter */}
            <div className="p-3 border-t border-zinc-800">
              <div className="text-[9px] text-zinc-500 tracking-widest mb-2">ÍNDICE DE AMEAÇA</div>
              <div className="flex gap-1">
                {['pacífico','neutro','perigoso','extremamente perigoso'].map((lvl, i) => {
                  const lvlIdx = ['pacífico','neutro','perigoso','extremamente perigoso'].indexOf(alien.ameaca);
                  const active = i <= lvlIdx;
                  const m = THREAT_META[lvl];
                  return <div key={lvl} className={`h-2 flex-1 transition-all ${active ? m.bg : 'bg-zinc-800'} border ${active ? m.border : 'border-zinc-700'}`} />;
                })}
              </div>
              <div className={`mt-1.5 text-[9px] font-bold tracking-widest ${tm.color} uppercase`}>{tm.label}</div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex-1 overflow-hidden">
            {/* Title */}
            <div className="px-6 py-5 border-b border-zinc-800">
              <div className={`text-[9px] tracking-[0.4em] ${tm.color} mb-1`}>ESPÉCIE ALIENÍGENA · ARQUIVO Nº {dossierCode}</div>
              <h2 className="text-white text-3xl font-bold tracking-[0.15em] uppercase">{alien.nome}</h2>
              {alien.outrosNomes && (
                <div className="text-zinc-400 text-xs mt-1 tracking-wider">Designações alternativas: {alien.outrosNomes}</div>
              )}
            </div>

            {/* Fields */}
            <div className="divide-y divide-zinc-800/60">
              <div className="px-6 py-3 grid grid-cols-2 gap-x-6 gap-y-1">
                <div>
                  <div className="text-[9px] text-zinc-600 tracking-widest uppercase mb-0.5">Classificação</div>
                  <div className={`text-xs ${tm.color} tracking-wider uppercase`}>{alien.tipo}</div>
                </div>
                <div>
                  <div className="text-[9px] text-zinc-600 tracking-widest uppercase mb-0.5">Aliança / Facção</div>
                  <div className="text-xs text-zinc-300 tracking-wider">{alien.alianca}</div>
                </div>
              </div>

              <div className="px-6 py-3">
                <div className="text-[9px] text-zinc-600 tracking-widest uppercase mb-1">Origem / Localização</div>
                <div className="text-xs text-zinc-300 leading-relaxed">{alien.origem}</div>
              </div>

              <div className="px-6 py-4">
                <div className="text-[9px] text-zinc-600 tracking-widest uppercase mb-2">Relatório de Inteligência</div>
                {revealed ? (
                  <p className="text-sm text-zinc-300 leading-relaxed tracking-wide">{alien.descricao}</p>
                ) : (
                  <div className="text-sm text-zinc-300 leading-relaxed tracking-wide">
                    <TypewriterText text={alien.descricao} speed={4} />
                  </div>
                )}
              </div>

              <div className="px-6 py-4">
                <div className="text-[9px] text-zinc-600 tracking-widest uppercase mb-2">Características Físicas & Comportamentais</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {alien.caracteristicas.map((c, i) => (
                    <div key={i} className={`flex items-start gap-2 text-[11px] text-zinc-300`}>
                      <span className={`${tm.color} mt-0.5 flex-shrink-0`}>›</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className={`mx-6 mb-4 border ${tm.border} ${tm.bg} px-4 py-2.5 flex items-center gap-3`}>
              <span className={`text-lg ${tm.color}`}>{tm.icon}</span>
              <div>
                <div className={`text-[8px] tracking-widest ${tm.color} uppercase`}>Nível de Ameaça para a Terra</div>
                <div className={`text-xs font-bold tracking-widest ${tm.color} uppercase`}>{tm.label}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [search, setSearch] = useState('');
  const [filterAmeaca, setFilterAmeaca] = useState('todos');
  const [selected, setSelected] = useState<Alien | null>(null);
  const [booting, setBooting] = useState(true);
  const [bootLine, setBootLine] = useState(0);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [manualInstall, setManualInstall] = useState(false);

  const bootLines = [
    '> INICIALIZANDO SISTEMA GALILEU v7.4.1...',
    '> CARREGANDO BASE DE DADOS GALÁCTICA...',
    '> DESCRIPTOGRAFANDO ARQUIVOS [████████████] 100%',
    '> VERIFICANDO ASSINATURAS BIOMÉTRICAS...',
    '> ACESSO AUTORIZADO · NÍVEL ULTRA-SECRETO',
    '> CARREGANDO 50 DOSSIÊS ALIENÍGENAS...',
    '',
  ];

  useEffect(() => {
    if (bootLine < bootLines.length) {
      const t = setTimeout(() => setBootLine(b => b + 1), bootLine === bootLines.length - 1 ? 600 : 280);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setBooting(false), 300);
      return () => clearTimeout(t);
    }
  }, [bootLine]);

  useEffect(() => {
    const installed = isAppInstalled();
    setIsInstalled(installed);
    localStorage.setItem('galileu-install-status', installed ? 'installed' : 'not-installed');

    if (!installed) {
      setShowInstallPrompt(true);
    }

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
      if (!isAppInstalled()) {
        setShowInstallPrompt(true);
      }
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
      localStorage.setItem('galileu-install-status', 'installed');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallApp = async () => {
    if (!deferredPrompt) {
      setManualInstall(true);
      return;
    }

    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    setDeferredPrompt(null);

    if (choice.outcome === 'accepted') {
      setShowInstallPrompt(false);
      localStorage.setItem('galileu-install-status', 'install-accepted');
    } else {
      setShowInstallPrompt(false);
      localStorage.setItem('galileu-install-status', 'not-installed');
    }
  };

  const filtered = useMemo(() => {
    return aliens.filter(a => {
      const q = search.toLowerCase();
      const matchSearch = !q || a.nome.toLowerCase().includes(q) || a.outrosNomes.toLowerCase().includes(q) || a.origem.toLowerCase().includes(q) || a.tipo.toLowerCase().includes(q);
      const matchThreat = filterAmeaca === 'todos' || a.ameaca === filterAmeaca;
      return matchSearch && matchThreat;
    });
  }, [search, filterAmeaca]);

  const counts = useMemo(() => ({
    pacifico: aliens.filter(a => a.ameaca === 'pacífico').length,
    neutro: aliens.filter(a => a.ameaca === 'neutro').length,
    perigoso: aliens.filter(a => a.ameaca === 'perigoso').length,
    extremo: aliens.filter(a => a.ameaca === 'extremamente perigoso').length,
  }), []);

  if (booting) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-8"
        style={{ fontFamily: '"Share Tech Mono", "Courier New", monospace' }}>
        <div className="max-w-xl w-full">
          <div className="text-green-500 text-xs mb-6 tracking-widest opacity-60">
            ████ SISTEMA GALILEU · ACESSO RESTRITO ████
          </div>
          {bootLines.slice(0, bootLine).map((line, i) => (
            <div key={i} className={`text-sm mb-1 ${line === '' ? 'mt-2' : ''} ${i === bootLine - 1 ? 'text-green-300' : 'text-green-600'}`}>
              {line}
            </div>
          ))}
          {bootLine < bootLines.length && (
            <span className="text-green-400 animate-pulse text-sm">█</span>
          )}
        </div>
        <Scanline />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white"
      style={{ fontFamily: '"Share Tech Mono", "Courier New", monospace' }}>
      <Scanline />

      <style>{`
        @keyframes scandown {
          0% { top: -2px; }
          100% { top: 100%; }
        }
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
      `}</style>

      {/* Header */}
      <header className="border-b border-green-900/50 bg-black/90 sticky top-0 z-40">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between py-3 gap-2 overflow-hidden">
            <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-[-9deg] select-none border-[3px] border-red-500/45 px-5 py-1 text-2xl font-black tracking-[0.18em] text-red-500/40 sm:block">
              TOP SECRET · AMEAÇA EXTREMA
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 border-2 border-green-500/60 flex items-center justify-center">
                <span className="text-green-400 text-xs">◈</span>
              </div>
              <div className="relative z-10">
                <div className="text-[8px] text-green-600 tracking-[0.4em] uppercase [text-shadow:0_0_10px_rgba(0,0,0,1)]">PROJETO GALILEU · ULTRA SECRETO</div>
                <h1 className="text-white text-sm sm:text-base tracking-[0.2em] uppercase font-bold [text-shadow:0_2px_8px_rgba(0,0,0,1),0_0_18px_rgba(16,185,129,0.35)]">
                  Quem Visita a Terra — Arquivo de Inteligência Galáctica
                </h1>
              </div>
            </div>
            <div className="relative z-10 hidden text-right text-[9px] tracking-widest text-green-800 md:block">
              <div>SYS:GALILEU-7.4.1</div>
              <div className="text-green-600">REGISTROS: {aliens.length} · ATIVOS</div>
              <button
                onClick={() => setShowInstallPrompt(true)}
                className={`mt-1 border px-2 py-0.5 text-[8px] uppercase tracking-[0.18em] transition-colors ${
                  isInstalled
                    ? 'border-emerald-700 text-emerald-500'
                    : 'border-red-700 text-red-400 hover:bg-red-950/60'
                }`}
              >
                {isInstalled ? 'APP INSTALADO' : 'APP NÃO INSTALADO'}
              </button>
            </div>
          </div>
          {/* Stats bar — sempre todas visíveis */}
          <div className="grid grid-cols-5 border-t border-green-900/30">
            {[
              { label: 'RAÇAS',          val: aliens.length,    key: 'todos',                  color: 'text-white' },
              { label: 'PACÍFICOS',      val: counts.pacifico,  key: 'pacífico',               color: 'text-emerald-400' },
              { label: 'NEUTROS',        val: counts.neutro,    key: 'neutro',                 color: 'text-cyan-400' },
              { label: 'PERIGOSOS',      val: counts.perigoso,  key: 'perigoso',               color: 'text-amber-400' },
              { label: 'AMEAÇA EXTREMA', val: counts.extremo,   key: 'extremamente perigoso',  color: 'text-red-400' },
            ].map(item => (
              <button
                key={item.key}
                onClick={() => setFilterAmeaca(item.key)}
                className={`px-2 py-2 text-[8px] sm:text-[10px] tracking-widest border-r border-green-900/30 transition-all text-center
                  ${filterAmeaca === item.key ? `bg-zinc-900 ${item.color}` : 'text-zinc-600 hover:text-zinc-400 hover:bg-zinc-900/50'}`}
              >
                <span className={`text-sm sm:text-base font-bold ${item.color} block leading-none mb-0.5`}>{item.val}</span>
                <span className="block leading-tight">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Search bar — linha separada */}
          <div className="flex items-center gap-2 border-t border-green-900/30 px-3 py-1.5">
            <span className="text-green-700 text-xs">›</span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="BUSCAR ESPÉCIE, ORIGEM, TIPO..."
              className="flex-1 bg-transparent text-[11px] text-green-300 placeholder-green-900 tracking-wider outline-none border-none"
            />
            {search && (
              <button onClick={() => setSearch('')} className="text-zinc-600 hover:text-zinc-400 text-xs">✕</button>
            )}
            <span className="text-[10px] text-zinc-700 tracking-widest whitespace-nowrap">
              {filtered.length}/{aliens.length}
            </span>
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-32 text-zinc-700 tracking-widest">
            <div className="text-4xl mb-4">◉</div>
            <div>NENHUM REGISTRO ENCONTRADO</div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {filtered.map(alien => (
              <AlienCard key={alien.id} alien={alien} onClick={() => setSelected(alien)} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-green-900/30 bg-black/50 py-4 mt-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="text-[9px] text-zinc-700 tracking-widest">
            FONTE: <span className="text-green-800">Márcio Rocha</span> · TRADUÇÃO & ANÁLISE: PORTUGUÊS BRASILEIRO
          </div>
          <div className="text-[9px] text-zinc-800 tracking-widest">
            ████ DOCUMENTO CLASSIFICADO · USO INTERNO ████
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showInstallPrompt && !isInstalled && (
        <InstallPrompt
          canInstall={Boolean(deferredPrompt)}
          manualInstall={manualInstall}
          onInstall={handleInstallApp}
          onClose={() => setShowInstallPrompt(false)}
        />
      )}
      {selected && <Modal alien={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
