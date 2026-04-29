import { useState, useMemo, useEffect, useCallback } from 'react';
import { aliens, Alien } from './data/aliens';
import { cropEntries, cropYears, CropEntry } from './data/cropData';
import { articles, Article, ArticleSection } from './data/articlesData';

/* ── threat config ── */
const TH = {
  'pacífico':              { l:'Pacífico',      bg:'bg-emerald-50', tx:'text-emerald-700', br:'border-emerald-200', dot:'bg-emerald-500' },
  'neutro':                { l:'Neutro',         bg:'bg-sky-50',     tx:'text-sky-700',     br:'border-sky-200',     dot:'bg-sky-500' },
  'perigoso':              { l:'Perigo',         bg:'bg-orange-50',  tx:'text-orange-700',  br:'border-orange-200',  dot:'bg-orange-500' },
  'extremamente perigoso': { l:'Ameaça Extrema', bg:'bg-red-50',     tx:'text-red-700',     br:'border-red-200',     dot:'bg-red-500' },
} as const;

type Tab = 'aliens' | 'crop' | 'articles';
type Filter = 'todos' | Alien['ameaca'];

/* ── PWA ── */
interface BIPEvent extends Event { prompt(): Promise<void>; readonly userChoice: Promise<{outcome:string}>; }
function usePWA() {
  const [prompt, setPrompt] = useState<BIPEvent|null>(null);
  const [installed, setInstalled] = useState(false);
  const [show, setShow] = useState(false);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  useEffect(() => {
    const sa = window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone === true;
    setInstalled(sa);
    if (sa) return;
    const h = (e: Event) => { e.preventDefault(); setPrompt(e as BIPEvent); };
    window.addEventListener('beforeinstallprompt', h);
    const t = setTimeout(() => { if (!sa && !sessionStorage.getItem('pwa-x')) setShow(true); }, 5000);
    return () => { window.removeEventListener('beforeinstallprompt', h); clearTimeout(t); };
  }, []);
  const doInstall = useCallback(async () => { if (prompt) await prompt.prompt(); setShow(false); sessionStorage.setItem('pwa-x','1'); }, [prompt]);
  const dismiss = useCallback(() => { setShow(false); sessionStorage.setItem('pwa-x','1'); }, []);
  return { installed, show, canPrompt: !!prompt, isIOS, doInstall, dismiss };
}

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
  </svg>
);

/* ── Alien Modal ── */
function AlienModal({ alien, onClose }: { alien: Alien; onClose: () => void }) {
  const t = TH[alien.ameaca];
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const h = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', h); };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div className="absolute inset-0 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-xl sm:max-h-[90vh] sm:rounded-2xl bg-white overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 flex items-center justify-center" style={{minHeight:220,maxHeight:300}}>
          <img src={`https://galactic-server.com/WhoVisitEarth2/${alien.imageFile}`} alt={alien.nome} className="max-h-[260px] w-auto object-contain p-4" onError={e => { (e.target as HTMLImageElement).src = `https://galactic-server.com/WhoVisitEarth2/${alien.imageFile.replace('.png','.gif')}`; }}/>
          <button onClick={onClose} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center"><CloseIcon/></button>
        </div>
        <div className="p-4 sm:p-5 space-y-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{alien.nome}</h2>
            {alien.outrosNomes && <p className="text-sm text-gray-400 mt-0.5">{alien.outrosNomes}</p>}
            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${t.bg} ${t.tx} ${t.br}`}><span className={`w-1.5 h-1.5 rounded-full ${t.dot}`}/>{t.l}</span>
              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">{alien.tipo}</span>
            </div>
          </div>
          <div className="rounded-xl bg-gray-50 divide-y divide-gray-100 text-sm">
            <div className="px-3 py-2 flex gap-3"><span className="text-gray-400 w-14 flex-shrink-0">Origem</span><span className="text-gray-800">{alien.origem}</span></div>
            <div className="px-3 py-2 flex gap-3"><span className="text-gray-400 w-14 flex-shrink-0">Aliança</span><span className="text-gray-800">{alien.alianca}</span></div>
          </div>
          <p className="text-[15px] text-gray-700 leading-relaxed text-justify">{alien.descricao}</p>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Características</p>
            <div className="flex flex-wrap gap-1.5">{alien.caracteristicas.map((c,i) => <span key={i} className="px-2.5 py-1 bg-gray-100 rounded-lg text-xs text-gray-700">{c}</span>)}</div>
          </div>
        </div>
        <div className="h-8 sm:h-0"/>
      </div>
    </div>
  );
}

/* ── Crop Modal ── */
function CropModal({ entry, onClose }: { entry: CropEntry; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const h = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', h); };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center" onClick={onClose}>
      <div className="bg-white w-full sm:max-w-lg sm:rounded-2xl overflow-hidden rounded-t-2xl" onClick={e => e.stopPropagation()}>
        <div className="relative bg-black">
          <img src={entry.src} alt={entry.location} className="w-full max-h-[50vh] object-contain"/>
          <button onClick={onClose} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/30 text-white flex items-center justify-center"><CloseIcon/></button>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-bold text-gray-900">{entry.location}</h3>
          <div className="flex gap-2 flex-wrap"><span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-medium">{entry.country}</span><span className="text-xs px-2 py-0.5 rounded-full bg-gray-50 text-gray-600 border border-gray-200">{entry.date}</span></div>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">{entry.note}</p>
        </div>
        <div className="h-6 sm:h-0"/>
      </div>
    </div>
  );
}

/* ════════════════ APP ════════════════ */
export default function App() {
  const [tab, setTab] = useState<Tab>('aliens');
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState<Filter>('todos');
  const [cropYear, setCropYear] = useState<number|null>(null);
  const [selAlien, setSelAlien] = useState<Alien|null>(null);
  const [selCrop, setSelCrop] = useState<CropEntry|null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article>(articles[0]);
  const [articleDropdownOpen, setArticleDropdownOpen] = useState(false);
  const pwa = usePWA();

  const list = useMemo(() => aliens.filter(a => {
    const s = q.toLowerCase();
    if (s && ![a.nome, a.outrosNomes, a.origem, a.tipo].some(f => f.toLowerCase().includes(s))) return false;
    if (filter !== 'todos' && a.ameaca !== filter) return false;
    return true;
  }), [q, filter]);

  const cnt = useMemo(() => ({
    all: aliens.length,
    p: aliens.filter(a => a.ameaca==='pacífico').length,
    n: aliens.filter(a => a.ameaca==='neutro').length,
    d: aliens.filter(a => a.ameaca==='perigoso').length,
    x: aliens.filter(a => a.ameaca==='extremamente perigoso').length,
  }), []);

  const crops = useMemo(() => cropYear ? cropEntries.filter(e => e.year === cropYear) : cropEntries, [cropYear]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center h-12 gap-3">
            <span className="text-xl">🛸</span>
            <h1 className="text-sm font-bold text-gray-900 flex-1 truncate">Quem Visita a Terra</h1>
          </div>

          {/* tabs row */}
          <div className="flex border-t border-gray-100">
            <button onClick={() => { setTab('aliens'); setArticleDropdownOpen(false); }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs sm:text-sm font-medium border-b-2 transition-colors ${tab === 'aliens' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>
              👽 <span>Aliens</span>
            </button>
            <button onClick={() => { setTab('crop'); setArticleDropdownOpen(false); }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs sm:text-sm font-medium border-b-2 transition-colors ${tab === 'crop' ? 'border-amber-600 text-amber-700' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>
              🌾 <span>Crop Circles</span>
            </button>

            {/* Articles dropdown */}
            <div className="flex-1 relative">
              <button onClick={() => { setTab('articles'); setArticleDropdownOpen(!articleDropdownOpen); }}
                className={`w-full flex items-center justify-center gap-1.5 py-2 text-xs sm:text-sm font-medium border-b-2 transition-colors ${tab === 'articles' ? 'border-purple-600 text-purple-700' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>
                📖 <span>Artigos</span>
                <svg className={`w-3 h-3 ml-0.5 transition-transform ${articleDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              {articleDropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-xl shadow-lg z-50 overflow-hidden">
                  {articles.map(a => (
                    <button key={a.id} onClick={() => { setSelectedArticle(a); setArticleDropdownOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm flex items-center gap-2 transition-colors ${selectedArticle.id === a.id ? 'bg-purple-50 text-purple-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>
                      <span>{a.emoji}</span>
                      <span>{a.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ────────── ALIENS ────────── */}
      {tab === 'aliens' && (
        <div className="flex-1 flex flex-col">
          <div className="bg-white border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-4 py-2 flex gap-2 overflow-x-auto">
              {[
                { k:'todos' as Filter, l:'Todos', v:cnt.all, cl:'bg-gray-100 text-gray-900 border-gray-200' },
                { k:'pacífico' as Filter, l:'Pacífico', v:cnt.p, cl:'bg-emerald-50 text-emerald-700 border-emerald-200' },
                { k:'neutro' as Filter, l:'Neutro', v:cnt.n, cl:'bg-sky-50 text-sky-700 border-sky-200' },
                { k:'perigoso' as Filter, l:'Perigo', v:cnt.d, cl:'bg-orange-50 text-orange-700 border-orange-200' },
                { k:'extremamente perigoso' as Filter, l:'Extremo', v:cnt.x, cl:'bg-red-50 text-red-700 border-red-200' },
              ].map(s => (
                <button key={s.k} onClick={() => setFilter(s.k)}
                  className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold border transition-all ${filter===s.k ? s.cl+' shadow-sm ring-1 ring-inset ring-black/5' : 'bg-white text-gray-400 border-gray-200'}`}>
                  {s.v} {s.l}
                </button>
              ))}
            </div>
          </div>
          <div className="max-w-5xl mx-auto w-full px-4 pt-3 pb-2">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar espécie, origem, tipo…"
                className="w-full pl-9 pr-8 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-300 transition"/>
              {q && <button onClick={() => setQ('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"><CloseIcon/></button>}
            </div>
            <p className="text-[11px] text-gray-400 mt-1 px-1">{list.length} de {aliens.length} espécies</p>
          </div>
          <div className="flex-1 max-w-5xl mx-auto w-full px-4 pb-8">
            {list.length === 0 ? (
              <div className="text-center py-16 text-gray-400"><span className="text-3xl block mb-2">🔭</span>Nenhuma espécie encontrada</div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3">
                {list.map(a => {
                  const t = TH[a.ameaca];
                  return (
                    <button key={a.id} onClick={() => setSelAlien(a)}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden text-left active:scale-[0.97] hover:shadow-md hover:-translate-y-0.5 transition-all">
                      <div className="relative bg-gradient-to-b from-gray-100 to-gray-50 flex items-center justify-center aspect-square p-2">
                        <img src={`https://galactic-server.com/WhoVisitEarth2/${a.imageFile}`} alt={a.nome} className="max-h-full max-w-full object-contain" loading="lazy" onError={e => { (e.target as HTMLImageElement).src = `https://galactic-server.com/WhoVisitEarth2/${a.imageFile.replace('.png','.gif')}`; }}/>
                        <span className={`absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full ${t.dot} ring-2 ring-white`}/>
                      </div>
                      <div className="px-2.5 py-2">
                        <p className="text-[13px] font-semibold text-gray-900 leading-tight truncate">{a.nome}</p>
                        <p className="text-[10px] text-gray-400 truncate mt-0.5">{a.tipo}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ────────── CROP CIRCLES ────────── */}
      {tab === 'crop' && (
        <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-4 space-y-4 pb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h2 className="text-base font-bold text-gray-900">🌾 Crop Circles Verificados</h2>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed text-justify">Formações geométricas documentadas em campos de cultivo. Apenas registros com fotografias autênticas e localizações confirmadas.</p>
            <p className="text-xs text-gray-400 mt-1">{cropEntries.length} formações · {cropYears[0]}–{cropYears[cropYears.length-1]}</p>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-0.5">
            <button onClick={() => setCropYear(null)} className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${!cropYear ? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-gray-500 border-gray-200'}`}>Todos</button>
            {cropYears.map(y => {
              const c = cropEntries.filter(e => e.year === y).length;
              return (<button key={y} onClick={() => setCropYear(y)} className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${cropYear===y ? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-gray-500 border-gray-200'}`}>{y} <span className="opacity-60">({c})</span></button>);
            })}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3">
            {crops.map(e => (
              <button key={e.id} onClick={() => setSelCrop(e)} className="bg-white rounded-xl border border-gray-200 overflow-hidden text-left active:scale-[0.97] hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden">
                  <img src={e.src} alt={e.location} className="w-full h-full object-cover" loading="lazy"/>
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-black/50 backdrop-blur text-white text-[10px] font-semibold rounded">{e.year}</span>
                </div>
                <div className="p-2.5">
                  <p className="text-xs font-semibold text-gray-900 leading-tight truncate">{e.location}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{e.country} · {e.date}</p>
                  <p className="text-[10px] text-amber-600 mt-1 leading-tight line-clamp-2">{e.note}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ────────── ARTICLES ────────── */}
      {tab === 'articles' && (
        <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-4 pb-10 space-y-5">

          {/* hero */}
          <div className={`bg-gradient-to-br ${selectedArticle.color} rounded-2xl p-5 text-white overflow-hidden relative`}>
            <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 70% 50%, white 1px, transparent 1px)', backgroundSize:'24px 24px'}}/>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">Artigo</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{selectedArticle.emoji} {selectedArticle.title}</h2>
            <p className="text-sm text-white/90 leading-relaxed text-justify">{selectedArticle.intro}</p>
          </div>

          {/* fact chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {selectedArticle.facts.map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-3 text-center">
                <span className="text-xl block mb-1">{f.icon}</span>
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">{f.label}</p>
                <p className="text-xs text-gray-800 font-semibold mt-0.5 leading-tight">{f.value}</p>
              </div>
            ))}
          </div>

          {/* sections */}
          {selectedArticle.sections.map((s: ArticleSection) => (
            <div key={s.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100">
                <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
              </div>
              {(s.images || s.image) && (
                <div className={`bg-gray-900 ${s.images && s.images.length > 1 ? 'grid grid-cols-2 gap-px' : ''}`}>
                  {(s.images ?? [s.image as string]).map((img, index) => (
                    <img
                      key={`${s.id}-${index}`}
                      src={img}
                      alt={`${s.title} ${index + 1}`}
                      className="w-full object-contain max-h-64 bg-gray-900"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
              <div className="px-4 py-3">
                <p className="text-sm text-gray-700 leading-relaxed text-justify">{s.content}</p>
              </div>
            </div>
          ))}

          {/* source */}
          <div className="bg-purple-50 border border-purple-100 rounded-xl p-3 flex gap-3 items-start">
            <span className="text-lg mt-0.5">📚</span>
            <div>
              <p className="text-xs font-semibold text-purple-900">{selectedArticle.source.name}</p>
              <p className="text-xs text-purple-700 mt-0.5 text-justify">{selectedArticle.source.pt}</p>
              <p className="text-[10px] text-purple-500 mt-1">{selectedArticle.refs}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200 bg-white py-3 mt-auto">
        <p className="text-center text-[11px] text-gray-400">Fonte: Márcio Rocha · Tradução e análise em Português Brasileiro</p>
      </footer>

      {/* ── Modals ── */}
      {selAlien && <AlienModal alien={selAlien} onClose={() => setSelAlien(null)}/>}
      {selCrop && <CropModal entry={selCrop} onClose={() => setSelCrop(null)}/>}

      {/* ── PWA Banner ── */}
      {pwa.show && !pwa.installed && (
        <div className="fixed bottom-0 inset-x-0 z-40 p-3">
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-3.5 flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">📲</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900">Adicionar à tela inicial</p>
              <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{pwa.isIOS ? 'Toque em ⬆ Compartilhar → "Adicionar à Tela de Início"' : 'Acesse rápido direto do celular'}</p>
            </div>
            {pwa.canPrompt && <button onClick={pwa.doInstall} className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-semibold rounded-lg active:bg-indigo-700 flex-shrink-0">Instalar</button>}
            <button onClick={pwa.dismiss} className="text-gray-300 flex-shrink-0"><CloseIcon/></button>
          </div>
        </div>
      )}
    </div>
  );
}
