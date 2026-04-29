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
