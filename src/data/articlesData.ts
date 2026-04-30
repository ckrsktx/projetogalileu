export interface ArticleSection {
  id: string;
  title: string;
  content: string;
  image?: string;
  images?: string[];
}

export interface Article {
  id: string;
  title: string;
  emoji: string;
  color: string;
  intro: string;
  sections: ArticleSection[];
  facts: { icon: string; label: string; value: string }[];
  refs: string;
  source: { name: string; pt: string };
}

export const articles: Article[] = [
  {
    id: 'ovnis-1909',
    title: 'OVNIs em 1909 — O Mistério dos Dirigíveis',
    emoji: '🛩️',
    color: 'from-amber-900 to-yellow-950',
    intro: 'Relatos de jornais de 1909 documentam luzes misteriosas e dirigíveis fantasmas sobre a Nova Inglaterra nos EUA, muito antes da era da aviação convencional.',
    facts: [
      { icon: '📰', label: 'Fontes', value: 'Jornais da época (1909)' },
      { icon: '📍', label: 'Local', value: 'Nova Inglaterra, EUA' },
      { icon: '💡', label: 'Fenômeno', value: 'Luzes e dirigíveis misteriosos' },
      { icon: '⏱️', label: 'Período', value: 'Julho a Dezembro de 1909' },
      { icon: '👥', label: 'Testemunhas', value: 'Milhares de pessoas' },
      { icon: '🏠', label: 'Cidades', value: 'Worcester, Willimantic, Norwich' },
      { icon: '🔦', label: 'Luzes', value: 'Refletores potentes e controlados' },
      { icon: '🚀', label: 'Velocidade', value: 'Até 80 mph, pairando estático' },
    ],
    sections: [
      {
        id: 'sandusky',
        title: 'Luz nos Céus — Sandusky, Ohio (Julho 1909)',
        content: 'Uma luz, acreditada por muitos estar afixada a um dirigível, atraiu grande atenção nos céus do nordeste por volta das 11h da noite de quinta-feira. A luz variava de tamanho — num minuto grande e brilhante, no seguinte pequena e fraca. Permanecia aparentemente estacionária por momentos e então disparava para leste a uma velocidade impressionante.',
        image: '/images/airship_1909_town.jpg',
      },
      {
        id: 'mystic-wilmington',
        title: 'O Dirigível Fantasma — Wilmington, Delaware (Agosto 1909)',
        content: 'Um dirigível misterioso que só voa à noite estava causando considerável agitação. Durante um mês ou mais, pessoas relataram ver a máquina voadora, mas poucos acreditavam nas histórias. A aeronave tinha formato de balão com asas em cada lado e uma carena em forma de charuto por baixo. O som de um motor era distintamente ouvido por aqueles que viam a máquina. Voava muito alto e muito rápido, movendo-se contra o vento de forma controlada.',
        image: '/images/dirigible_1909.jpg',
      },
      {
        id: 'explosao-winsted',
        title: 'Bola de Fogo e Explosões — Winsted, Connecticut (Agosto 1909)',
        content: 'Centenas de cidadãos foram acordados por uma terrível explosão nas primeiras horas da manhã. O policial noturno Lyman R. Woodworth relatou que os céus foram iluminados por uma bola de fogo vinda do noroeste, desaparecendo sobre a torre da Igreja Metodista. Segundos depois, ouviu-se a explosão. O evento foi corroborado por J. L. Dewey, indicando um fenômeno de grande intensidade.',
        image: '/images/fireball_1909.jpg',
      },
      {
        id: 'storrs',
        title: 'Impacto em Storrs — Outubro 1909',
        content: 'Uma explosão terrível ocorreu em Storrs, Connecticut. Uma bola de fogo gigante descendia em linha reta, sem zig-zag, deixando um rastro de luz de trinta a quarenta pés. O impacto atingiu um poste de telégrafo, estilhaçando-o, e depois penetrou na casa de F. M. Chadwick, arrancando rodapés, quebrando vidros, fazendo buracos nos tetos, sem no entanto causar incêndio. O treinador de futebol Frank McLean declarou: "Palavras não podem descrever a visão nem a natureza daquela explosão."',
      },
      {
        id: 'aeronave-misteriosa',
        title: 'A Aeronave Misteriosa de Worcester — Dezembro 1909',
        content: 'A casa do misterioso dirigível que cruzava Massachusetts a altitudes inauditas foi supostamente descoberta em West Boylston, numa propriedade densamente arborizada. Um galpão com mais de 100 pés de comprimento abrigava a aeronave. A máquina, associada a Wallace E. Tillinghast, voava sobre a Nova Inglaterra, cruzando cidades de Marlboro a Boston, atingindo velocidades de 80 mph e pairando estaticamente por 15 minutos. Testemunhas afirmam ter visto dois homens na aeronave — um na proa, perto do farol, e outro na popa, onde uma luz mais fraca queimava.',
      },
      {
        id: 'come-ride',
        title: '"Venha, Monte no Meu Dirigível!" — Dezembro 1909',
        content: 'Centenas de pessoas em Willimantic viram uma luz brilhante no leste que acreditavam ser o misterioso dirigível de Tillinghast. A luz parecia um poderoso refletor, permaneceu estacionária por minutos e então subiu, circulando como se o operador estivesse ajustando suas coordenadas. Os céticos não conseguiam explicar a luz estranha e suas peculiaridades. As pessoas que haviam saído para as compras de Natal esqueceram o que tinham vindo fazer e pararam na calçada e no meio da rua olhando para o leste, esperando o retorno do dirigível.',
        image: '/images/crowd_1909.jpg',
      },
      {
        id: 'norwich',
        title: 'O Dirigível sobre Norwich — Dezembro 1909',
        content: 'Entre 19:30 e 20:00, muitos no centro de Norwich observaram um dirigível passando sobre a cidade, indo em direção sul. Não havia ruído audível. As luzes se moviam e eram observadas até desaparecerem. Não era um voo nivelado e estável como o de um pássaro — ocasionalmente o dirigível fazia uma curva e uma segunda luz aparecia de vez em quando. Não era uma estrela, afirmaram positivamente os que o viram.',
      },
    ],
    refs: 'Referências: Project 1947 — 1909 UFO Reports; Sandusky Daily Register; Wilmington Morning News; Willimantic Chronicle; Norwich Bulletin.',
    source: { name: 'Project 1947', pt: 'Tradução e adaptação para Português Brasileiro por Márcio Rocha.' },
  },
  {
    id: 'reptilianos',
    title: 'O que são Reptilianos?',
    emoji: '🦎',
    color: 'from-green-900 to-emerald-950',
    intro: 'Uma análise profunda sobre a natureza, características e os padrões de contato com seres extraterrestres de aparência reptiliana, baseada nas pesquisas de David W. Chace.',
    facts: [
      { icon: '🦎', label: 'Nomenclatura', value: 'Reptiliano ou Reptoid' },
      { icon: '👁️', label: 'Olhos', value: 'Pupilas verticais, íris amarela' },
      { icon: '📏', label: 'Estatura', value: 'Próximo a 2 metros (7 pés)' },
      { icon: '🤚', label: 'Membros', value: 'Garras, mãos às vezes palmadas' },
      { icon: '💭', label: 'Contato', value: 'Físico, telepático ou astral' },
      { icon: '🛸', label: 'Categoria', value: 'Alien ou Criptídeo humanóide' },
      { icon: '🧬', label: 'Diversidade', value: 'Múltiplas espécies sugeridas' },
      { icon: '📝', label: 'Marcas', value: 'Arranhões, hematomas, símbolos' },
    ],
    sections: [
      {
        id: 'definicao',
        title: 'O que é um Reptiliano?',
        content: 'Para fins de pesquisa, um reptiliano é um alienígena (extraterrestre, ocupante de OVNI, etc.) ou um criptídeo (criatura não reconhecida cientificamente) com um plano corporal mais ou menos humanoide e uma aparência reptiliana. O termo "reptiliano" é frequentemente usado de forma intercambiável com o termo preferido do pesquisador John Rhodes, "reptoid", que é uma contração de humanoide reptiliano. Em geral, um reptiliano é definido em termos de suas características físicas e/ou semelhanças com outros relatos de reptilianos.',
        image: '/images/reptilian.jpg',
      },
      {
        id: 'aparencia',
        title: 'Aparência Física',
        content: 'O que constitui uma "aparência reptiliana"? Pele coberta por escamas (descritas de várias maneiras), características faciais que lembram um lagarto ou uma cobra, e dedos terminando em garras semelhantes às de lagartos são algumas das características de identificação mais comuns. Outras características, como mãos palmadas, olhos com pupilas em fenda vertical e uma íris amarela brilhante, ou uma constituição muscular e uma altura total próxima a sete pés (aprox. 2,13 metros), ocorrem em muitos casos, sendo também características definidoras.',
      },
      {
        id: 'experiencia',
        title: 'O que é uma Experiência Reptiliana "Típica"?',
        content: 'Existem muitos tipos de experiências que as pessoas têm com reptilianos. Como se distingue uma experiência reptiliana de outros tipos de encontros ufológicos ou paranormais? A resposta curta é: se um ou mais reptilianos estão envolvidos, então é uma experiência reptiliana. Os detalhes dessas experiências, incluindo o contexto relevante (quando, onde, circunstâncias, eventos de vida relacionados), são de extrema importância para a pesquisa. Ao estudar reptilianos, estamos essencialmente estudando padrões na experiência humana.',
      },
      {
        id: 'contato-fisico',
        title: 'Encontros Físicos vs. O Reino Invisível',
        content: 'Encontros físicos com reptilianos são o mistério central. Como eles se parecem? Qual a altura? De onde vêm? Como entram no nosso mundo? Qual o motivo de interagirem com humanos? Embora um encontro físico seja o mais compreensível, não é necessariamente o mais comum. O contato reptiliano às vezes ocorre durante a meditação — por exemplo, através de uma conversa telepática ou uma visão. Experiências no estado astral (fora do corpo) ou em sonhos também são cruciais. Como disse o Dr. John Mack, é importante começarmos a valorizar nossas experiências com o "reino invisível".',
      },
      {
        id: 'marcas',
        title: 'Marcas e Lembranças Ocultas',
        content: 'É importante perceber que um encontro físico pode, em alguns casos, ser lembrado como um sonho. Portanto, esses "sonhos" reptilianos podem se revelar ainda mais relevantes para a questão do contato físico do que poderíamos supor. É vital que os experienciadores desses fenômenos estejam cientes de seus corpos. Marcas no corpo, incluindo hematomas, arranhões, marcas de escavação (scoop marks) e triângulos ou outros símbolos, às vezes podem apontar para uma interação física que foi oculta da memória consciente.',
      },
      {
        id: 'diversidade',
        title: 'Quantos Tipos Diferentes Existem?',
        content: 'Como sequer começamos a responder a essa pergunta? Inicialmente, pode-se supor que uma única civilização alienígena estivesse envolvida com a Terra, contendo talvez apenas um punhado de espécies diferentes. No entanto, à medida que os relatos de testemunhas sobre seres reptilianos se acumulam, torna-se evidente que há uma diversidade surpreendente. A pesquisa contínua e a coleta de descrições detalhadas e desenhos feitos pelas testemunhas são essenciais para tentar categorizar e compreender as diferentes espécies ou variações genéticas dentro do fenômeno reptiliano.',
      },
    ],
    refs: 'Referências: David W. Chace — "What is a Reptilian?"; The Alien Jigsaw; John Rhodes.',
    source: { name: 'Alien Jigsaw', pt: 'Tradução e adaptação para Português Brasileiro por Márcio Rocha.' },
  },
  {
    id: 'vril',
    title: 'Vril',
    emoji: '⚡',
    color: 'from-violet-900 to-indigo-900',
    intro: 'A energia mítica que inspirou sociedades secretas, discos voadores nazistas e teorias de contato alienígena. Da ficção científica ao Terceiro Reich.',
    facts: [
      { icon: '📖', label: 'Origem', value: 'Romance de Bulwer-Lytton, 1870' },
      { icon: '🔬', label: 'Fundação', value: 'Sociedade Vril, Berlim 1921' },
      { icon: '👁️', label: 'Líder Espiritual', value: 'Maria Orsic (Zagreb)' },
      { icon: '🪐', label: 'Aliens Contactados', value: 'Sistema de Aldebarã (Alpha Tauri)' },
      { icon: '✈️', label: '1ª Máquina', value: 'JFM — Munique, 1922' },
      { icon: '🌍', label: 'Língua Original', value: 'Suméria: "Vri-Il" (como deus)' },
      { icon: '🧲', label: 'Tecnologia', value: 'Motor Eletro-Magnético-Gravitacional' },
      { icon: '🇩🇪', label: 'Conexão Nazista', value: 'Apoio estatal a partir de 1933' },
    ],
    sections: [
      {
        id: 'intro',
        title: 'O que é Vril?',
        content: 'Vril é uma palavra retirada de um romance de ficção científica de Edward Bulwer-Lytton intitulado "Vril: O Poder da Raça Futura", publicado em 1870. No livro, Vril é uma forma de energia possuída por uma raça subterrânea extremamente poderosa. O livro foi bastante popular no final do século XIX e, por um tempo, a palavra "Vril" ficou associada a elixires que dão vida. Alguns leitores acreditam que o livro é não-ficção, e "Vril" passou a ser associado a teorias sobre discos voadores pilotados por nazistas (Flugscheiben), canhões de raios de força movidos a Vril (KSK — Kraftstrahlkanone), misteriosos "exercícios espirituais" jesuítas e tecnologia secreta atlante.',
        image: 'https://i0.wp.com/obscurantist.com/wp-content/uploads/vril-1.jpg?w=860&ssl=1',
      },
      {
        id: 'sociedade',
        title: 'A Sociedade Vril',
        content: 'Vários autores afirmaram que uma Vril Gesellschaft (Sociedade), ou Loja Luminosa, era uma comunidade secreta de ocultistas na Berlim pré-nazista. A Sociedade Vril de Berlim era uma espécie de círculo interno da Sociedade Thule, e acreditava-se que estava em estreito contato com o grupo inglês conhecido como Ordem Hermética da Aurora Dourada. Nenhuma evidência verificável da existência da Sociedade Vril foi jamais publicada. A única fonte primária de informação é Willy Ley, um engenheiro de foguetes alemão que fugiu para os Estados Unidos em 1933. Em 1947, Ley publicou um artigo intitulado "Pseudociência na Terra dos Nazistas".',
        image: 'https://i0.wp.com/obscurantist.com/wp-content/uploads/nazi_saucer.jpg?resize=860%2C573&ssl=1',
      },
      {
        id: 'orsic',
        title: 'Maria Orsic e os Aliens de Aldebarã',
        content: 'Segundo esses autores, a Sociedade Vril foi fundada como "A Sociedade Pan-Germânica para a Metafísica" em 1921, para explorar as origens da raça ariana. Foi formada por um grupo de médiuns psíquicas lideradas pela médium da Thule Gesellschaft, Maria Orsitsch (Orsic) de Zagreb, que afirmava ter recebido comunicação de aliens arianos que viviam em Alpha Tauri, no sistema de Aldebarã. Supostamente, esses aliens haviam visitado a Terra e se estabelecido na Suméria. A palavra Vril teria sido formada a partir da antiga palavra suméria "Vri-Il" (como deus). A Sociedade ensinava exercícios de concentração para despertar as forças do Vril, e seu principal objetivo era alcançar o voo espacial para chegar a Aldebarã.',
      },
      {
        id: 'maquinas',
        title: 'A Máquina de Voo e os Discos Voadores',
        content: 'Em 1922, Thule e Vril construíram o primeiro disco voador da Alemanha, o JFM (Jenseitsflugmaschine — Máquina de Voo para o Além), em Munique, para testes de voo canalizados que duraram dois anos. O professor Schumann, da Universidade Técnica de Munique, desenvolveu a partir disso uma unidade de levitação chamada SM-Levitador. A nova série RFZ (Rundflugzeug — Aeronave Redonda) começou em 1937. Os discos RFZ 1 a 6 foram testados sob supervisão Vril. O motor Thule Triebwerk era um revolucionário motor eletro-magnético-gravitacional (EMG), também conhecido como Tachyonator 7, que produzia fortes campos rotativos afetando a gravidade.',
      },
      {
        id: 'guerra',
        title: 'Vril na Segunda Guerra Mundial',
        content: 'Com Hitler no poder em 1933, ambas as Gesellschafts Thule e Vril supostamente receberam apoio estatal oficial para programas contínuos de desenvolvimento de discos. Após 1941, Hitler proibiu as sociedades secretas, então ambas foram documentadas sob a unidade SS E-IV. Tanto os discos Thule quanto os Vril foram construídos entre 1939 e 1945. Thule produziu a série Haunebu I-III de grandes discos. Em setembro de 1944, um piloto de ME-262 avistou uma das naves Andrômeda e reportou o ocorrido.',
      },
      {
        id: 'olho-magico',
        title: 'O Olho Mágico de Vril',
        content: 'O "Olho Mágico" Vril é um mítico dispositivo nazista de espionagem e reconhecimento que supostamente foi desenvolvido em 1945. Rolf Engel da Vril Gesellschaft supostamente desenvolveu um miniature motor Eletro-Magnético-Gravitacional em um corpo em forma de melão com cerca de 30 cm de diâmetro, com antena receptora, câmera de televisão, arma e braço telescópico. Por sua conexão com o Vril, o dispositivo supostamente teria a habilidade de aparecer e desaparecer à vontade. Não há evidências de que um protótipo funcional foi jamais criado.',
      },
      {
        id: 'antartida',
        title: 'A Fuga para a Antártida',
        content: 'À medida que os Aliados avançavam pelo Reich, o Vril planejou evacuar sua tecnologia para bases fora da Europa, especialmente para uma base secreta na Antártida — a Base 211. O plano pessoal dos membros era evacuar suas médiuns para as estrelas através do voo canalizado da nave Andrômeda. Partiram em março de 1945 e nunca foram encontrados novamente. A Sociedade Vril inclui muitos elementos comuns às teorias da conspiração: mestres ocultos, fuga de Hitler para o Polo Sul, discos voadores, invenções nazistas secretas e aliens de Aldebarã.',
      },
      {
        id: 'hoje',
        title: 'Vril Hoje',
        content: 'Hoje, o autodenominado governo no exílio de Sealand sob Johannes W.F. Seiger promove a energia livre Vril e também começou a conectar-se com os discos de aeronaves Vril e sua história. A palavra Vril continua sendo usada em círculos esotéricos modernos para descrever uma energia vital universal, semelhante ao conceito chinês de Qi ou ao prana hindu. Nenhuma evidência histórica concreta confirma a existência real da Sociedade Vril ou de suas supostas tecnologias.',
      },
    ],
    refs: 'Referências: Wikipedia; Willy Ley — «Pseudoscience in Naziland», 1947; Pauwels & Bergier, 1967.',
    source: { name: 'Artigo sobre Vril', pt: 'Tradução e adaptação para Português Brasileiro por Márcio Rocha.' },
  },
  {
    id: 'vida-extraterrestre',
    title: 'Vida Extraterrestre',
    emoji: '👽',
    color: 'from-emerald-900 to-teal-900',
    intro: 'O universo está repleto de vida. A vida é infinita, não apenas neste universo, mas em outros universos também. Tudo o que você possa imaginar, existe em algum lugar do cosmos.',
    facts: [
      { icon: '🌌', label: 'Universos', value: '10⁴⁹ universos (estimativa Plejaren)' },
      { icon: '🌍', label: 'Planetas com vida', value: '8 bilhões+ no nosso universo' },
      { icon: '🧬', label: 'Subespécies', value: 'Mais de 40.000 em 200+ cores' },
      { icon: '👤', label: 'DNA terrano', value: 'Contém DNA de 20+ espécies ET' },
      { icon: '⏱️', label: 'Intervenção genética', value: 'Há 200.000 anos' },
      { icon: '🏛️', label: 'Fundo da Ascensão', value: 'Federação Galáctica da Luz' },
      { icon: '👽', label: 'Abduções Grey', value: 'Décadas 60-80' },
      { icon: '🇻', label: 'Venusianos', value: 'Dimensão 5, origem Vega' },
    ],
    sections: [
      {
        id: 'introducao',
        title: 'O Universo Está Repleto de Vida',
        content: 'O universo está repleto de vida. A vida é infinita, não apenas neste universo, mas em outros universos também. Juntos, formam o cosmos. Tudo o que você possa imaginar, existe em algum lugar do cosmos. De planetas onde dinossauros ainda vivem, a civilizações humanas tão altamente desenvolvidas que não precisam mais de um corpo ou planeta, movendo-se pelo espaço apenas como consciência de grupo. Você se pergunta onde há provas para isso? Em toda parte, menos na mídia mainstream. Se você perguntar a seus amigos ou conhecidos, provavelmente haverá alguém que viu "algo". Pesquisando online, você encontrará inúmeros vídeos e fotos, além de muitos depoimentos de pessoas que viram OVNI, têm contato telepático com seres extraterrestres, tiveram contato físico com eles, foram por eles sequestrados, ou viveram em outro planeta em uma vida passada.',
        images: [
          'https://thegreaterpicture.com/thumbs/ET.jpg',
          'https://thegreaterpicture.com/images/ETs.jpg',
        ],
      },
      {
        id: 'jigsaw',
        title: 'As Peças do Quebra-cabeça Encaixam',
        content: 'O fascinante é que quanto mais material você lê e assiste, mais completa se torna o panorama geral. Você assiste um agricultor suíco (Billy Meier) contar algo que se encaixa perfeitamente com o que um empresário americano (Alex Collier) experienciou. Uma atriz australiana (Blossom Goodchild) que faz channeling fornece informações que são então corroboradas por um trabalhador mexicano (Carlos Diaz), que tirou fotos de naves de luz e diz estar em contato telepático com elas. E há centenas de outras pessoas que nunca se conheceram, com backgrounds completamente diferentes, residências diferentes e em eras diferentes. As peças do quebra-cabeça se encaixam perfeitamente.',
        image: 'https://thegreaterpicture.com/images/Billy_Meier_UFO.jpg',
      },
      {
        id: 'lei-nao-interferencia',
        title: 'Por que não os vemos?',
        content: 'Existem várias razões. A mais importante é a Lei da Não-Interferência, uma regra universal que implica que civilizações mais avançadas que visitam outro planeta com população menos desenvolvida interferem o mínimo possível. Isso não significa que não nos visitem, porque visitam. A Terra é um planeta extremamente interessante, especialmente neste tempo de Ascensão. Eles têm contato com indivíduos aqui e ali, direta ou telepaticamente, mas o contato aberto com toda a população ainda não acontece. É por isso que a maior parte dos avistamentos reais de OVNI acontece a uma distância considerável. OVNI próximos geralmente não pertencem a visitantes extraterrestres, mas são feitos na Terra ou por computador (CGI). Viajantes espaciais pacíficos quase sempre respeitam a Lei da Não-Interferência.',
      },
      {
        id: 'tipos',
        title: 'Principais Espécies Inteligentes',
        content: 'A visão que emerge dos depoimentos é que a vida no omniverso conhece uma variação infinita. As formas de vida inteligentes nas redondezas da Terra podem ser divididas em: 1) Humanoides, 2) Greys, 3) Réptilianos, 4) Insetoides, 5) Raça Felina, 6) Anfíbios, 7) Homens-Pássaro. Existem também vários híbridos e, como já mencionado, a partir de certo nível de desenvolvimento espiritual "aparência" se torna um termo relativo, mas essas são as principais categorias conhecidas. A maioria das espécies é benevolente, mas algumas se comportam negativamente ou com indiferença em relação a nós humanos.',
        image: 'https://thegreaterpicture.com/images/ETs.jpg',
      },
      {
        id: 'batalha',
        title: 'Batalha entre Luz e Trevas',
        content: 'As consequências mais negativas que nosso planeta experimentou parecem ter vindo de humanoides do sistema estelar Sirius B (os dos crânios alongados), réptilianos da constelação de Draco e os Anunnaki, um híbrido humanoides/réptil de Órion. É por isso que referências a essas estrelas são encontradas em muitas pirâmides e outros locais antigos. Essas raças negativas conquistaram centenas de planetas e formaram um poderoso império. Eles travaram guerras de centenas de milhares de anos com as raças positivas, que se uniram como uma espécie de ONU no espaço, chamada Federação Galáctica da Luz. Quando o império das trevas percebeu que o desenvolvimento tecnológico da Federação era muito mais rápido que o deles e a batalha nunca poderia ser ganha, depuseram as armas e muitas raças negras se passaram para a Luz. Apenas algumas frações rebeldes permaneceram.',
      },
      {
        id: 'humanoides',
        title: 'Os Humanoides e Nossa DNA',
        content: 'Segundo Billy Meier, o nosso universo contém mais de 8 bilhões de planetas com vida humana. Há mais de 40.000 subespécies em mais de 200 cores. A espécie humana aqui na Terra não passou por um desenvolvimento natural. Somos o resultado de intervenção genética por visitantes extraterrestres nos habitantes primitivos da Terra, há 200.000 anos. Devido a essas múltiplas interferências genéticas ao longo da história, agora contamos com DNA de mais de 20 espécies extraterrestres — não apenas humanoides, mas também "greys", réptilianos, felinos e outras espécies. Segundo Alex Collier, nosso DNA é visto como "real". As quatro maiores raças humanas que conhecemos na Terra — caucasiana, negróide, oriental e latina — são todas consequência de visitantes extraterrestres que deixaram seus vestígios.',
      },
      {
        id: 'venusianos',
        title: 'Os Venusianos',
        content: 'Não precisamos ir longe para encontrar os humanoides mais próximos no espaço, pois são os Venusianos. Assim como todos os outros planetas, Vênus é oca por dentro. Uma civilização humana vive lá que já se desenvolveu até a quinta dimensão. Venusianos têm a mesma origem que nós (constelação de Vega) e, portanto, se sentem muito envolvidos conosco. Para visitar a Terra, eles precisam abaixar sua vibração, e então parecem exatamente conosco. Valiant Thor, um embaixador do planeta Vênus, ficou no Pentágono por três anos no final dos anos 1950 para negociar com o governo americano um plano de paz na Terra — em vão. Omnec Onec, uma Venusiana, veio à Terra ainda criança por razões kármicas e para ajudar no desenvolvimento espiritual humano.',
        images: [
          'https://thegreaterpicture.com/images/friend-Howard-Menger.jpg',
          'https://thegreaterpicture.com/images/valiant-thor.jpg',
        ],
      },
      {
        id: 'ascensao',
        title: 'A Ascensão Planetária',
        content: 'Nossa Terra está passando por um processo chamado "Ascensão". Isso significa que ela está em caminho para uma dimensão mais elevada, assim como o restante do universo. Para isso, ela recebe ajuda de muitas civilizações extraterrestres altamente desenvolvidas, que também auxiliam os terrenos tanto quanto possível em seu desenvolvimento espiritual. O objetivo é elevar nossa vibração a tal ponto que possamos ir para a quinta dimensão. As civilizações extraterrestres estão unidas na Confederação. Esses povos estão espiritualmente enormemente à nossa frente, o que significa que podem, por exemplo, comunicar-se telepaticamente e criar coisas simplesmente pelo poder de seus pensamentos. Eles podem coisas que nossos cientistas literalmente não conseguiriam realizar em um milhão de anos, como (des)materializar-se, viajar interdimensionalmente, técnicas antigravitacionais, robôs vivos, naves de luz vivas, controle total da energia.',
        images: [
          'https://thegreaterpicture.com/images/lightship-Carloz-Diaz.jpg',
          'https://thegreaterpicture.com/images/lightship-Hoogkerk-2007.jpg',
        ],
      },
      {
        id: 'abducoes',
        title: 'Abduções — Os Greys',
        content: 'A Ascensão vindoura teve um aspecto menos agradável para algumas pessoas. Especialmente dos anos 60 aos 80, muitas pessoas vieram a público afirmando terem sido sequestradas por aliens. Os meios de comunicação controlados tentaram descartar essas histórias como anomalias mentais, mas havia tantos depoimentos que alguns cientistas fizeram pesquisas sérias. A visão que emergiu das mensagens canalizadas e de explicações de contactados e pessoas do circuito de "operações negras" era que essas abduções eram realizadas pelos Greys. Essa civilização, originária do sistema estelar Zeta Reticuli, abandonou a reprodução normal milhares de anos atrás e passou a usar clonagem. A desvantagem da clonagem era que os novos seres criados artificialmente não tinham mais alma. Quando a notícia da Ascensão universal chegou a esse povo, entraram em pânico, pois criaturas sem alma não poderiam ascender. Decidiram criar uma nova raça metade Zeta, metade de outra espécie. Foi feito um acordo secreto com os governantes de nosso planeta, que concedeu aos Greys permissão para experimentos genéticos com terranos em troca de tecnologia avançada.',
      },
    ],
    refs: 'Referências: The Greater Picture; Billy Meier — Contact Notes; Alex Collier; Blossom Goodchild; Carlos Diaz.',
    source: { name: 'Artigo sobre Vida Extraterrestre', pt: 'Tradução e adaptação para Português Brasileiro por Márcio Rocha.' },
  },
];
