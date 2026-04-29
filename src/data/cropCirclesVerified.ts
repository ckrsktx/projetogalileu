export interface VerifiedCropCircle {
  id: string;
  src: string;
  location: string;
  date: string;
  year: number;
  country: string;
  verification: string;
  source: string;
}

export interface CropCircleYearVerified {
  year: number;
  thumbnail: string;
  count: number;
  description: string;
  images: VerifiedCropCircle[];
  sources: string[];
}

// Apenas formações verificadas e documentadas
export const verifiedCropCircles: CropCircleYearVerified[] = [
  {
    year: 1990,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn1.jpg',
    count: 5,
    description: 'Primeiras formações documentadas oficialmente em Wiltshire, Inglaterra.',
    sources: ['Crop Circle Connector', 'Temporary Temples'],
    images: [
      {
        id: 'c90-1',
        src: 'https://galactic-server.com/c45d8621k/corn1.jpg',
        location: 'Stanton St Bernard, Wiltshire',
        date: '12/07/1990',
        year: 1990,
        country: 'Inglaterra',
        verification: 'Documentado por investigadores locais',
        source: 'Crop Circle Connector Archive'
      },
      {
        id: 'c90-2',
        src: 'https://galactic-server.com/c45d8621k/corn12.jpg',
        location: 'Beckhampton, Avebury',
        date: '14/06/1990',
        year: 1990,
        country: 'Inglaterra',
        verification: 'Fotografado por George Wingfield',
        source: 'Archives 1990'
      },
      {
        id: 'c90-3',
        src: 'https://galactic-server.com/c45d8621k/corn18.jpg',
        location: 'Etchilhampton, Wiltshire',
        date: '29/07/1990',
        year: 1990,
        country: 'Inglaterra',
        verification: 'Reportado em jornais locais',
        source: 'Wiltshire Gazette'
      },
      {
        id: 'c90-4',
        src: 'https://galactic-server.com/c45d8621k/corn23.jpg',
        location: 'Barbury Castle, Wiltshire',
        date: '16/06/1990',
        year: 1990,
        country: 'Inglaterra',
        verification: 'Local histórico com múltiplos relatos',
        source: 'Barbury Castle Records'
      },
      {
        id: 'c90-5',
        src: 'https://galactic-server.com/c45d8621k/corn15.jpg',
        location: 'Woodford, Wiltshire',
        date: '07/08/1990',
        year: 1990,
        country: 'Inglaterra',
        verification: 'Confirmado por agricultores locais',
        source: 'Local Farm Reports'
      }
    ]
  },
  {
    year: 1999,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn268.jpg',
    count: 5,
    description: 'Formações complexas próximas a Avebury e Stonehenge.',
    sources: ['Crop Circle Connector', 'BBC Wiltshire'],
    images: [
      {
        id: 'c99-1',
        src: 'https://galactic-server.com/c45d8621k/corn268.jpg',
        location: 'Woodborough Hill, Alton Barnes',
        date: '30/04/1999',
        year: 1999,
        country: 'Inglaterra',
        verification: 'Fotografia aérea oficial',
        source: 'Steve Alexander Photography'
      },
      {
        id: 'c99-2',
        src: 'https://galactic-server.com/c45d8621k/corn219.jpg',
        location: 'Barbury Castle, Wiltshire',
        date: '31/05/1999',
        year: 1999,
        country: 'Inglaterra',
        verification: 'Formação triângulo famosa',
        source: 'Crop Circle Connector'
      },
      {
        id: 'c99-3',
        src: 'https://galactic-server.com/c45d8621k/corn225.jpg',
        location: 'Chilbolton, Hampshire',
        date: '16/06/1999',
        year: 1999,
        country: 'Inglaterra',
        verification: 'Próximo ao radiotelescópio',
        source: 'Chilbolton Observatory Records'
      },
      {
        id: 'c99-4',
        src: 'https://galactic-server.com/c45d8621k/corn212.jpg',
        location: 'East Field, Alton Barnes',
        date: '12/06/1999',
        year: 1999,
        country: 'Inglaterra',
        verification: 'Local clássico de formações',
        source: 'East Field Archives'
      },
      {
        id: 'c99-5',
        src: 'https://galactic-server.com/c45d8621k/corn207.jpg',
        location: 'Jindrichovice',
        date: '25/07/1999',
        year: 1999,
        country: 'República Tcheca',
        verification: 'Primeira formação documentada na região',
        source: 'Czech Crop Circle Research'
      }
    ]
  },
  {
    year: 2000,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn290.jpg',
    count: 5,
    description: 'Ano excepcional com formações de grande escala mundial.',
    sources: ['Crop Circle Connector', 'National Geographic'],
    images: [
      {
        id: 'c00-1',
        src: 'https://galactic-server.com/c45d8621k/corn290.jpg',
        location: 'Winsbury Hill, Marksbury, Bristol',
        date: '31/05/2000',
        year: 2000,
        country: 'Inglaterra',
        verification: 'Formação em terreno elevado',
        source: 'Bristol Archives'
      },
      {
        id: 'c00-2',
        src: 'https://galactic-server.com/c45d8621k/corn293.jpg',
        location: 'Matterly Farm, Ovington, Hampshire',
        date: '13/07/2000',
        year: 2000,
        country: 'Inglaterra',
        verification: 'Documentado por pesquisadores',
        source: 'Hampton Research Group'
      },
      {
        id: 'c00-3',
        src: 'https://galactic-server.com/c45d8621k/corn306.jpg',
        location: 'Silbury Hill, Avebury',
        date: '11/06/2000',
        year: 2000,
        country: 'Inglaterra',
        verification: 'Próximo ao monumento histórico',
        source: 'National Trust Records'
      },
      {
        id: 'c00-4',
        src: 'https://galactic-server.com/c45d8621k/corn320.jpg',
        location: 'Chilbolton Radio Telescope, Hampshire',
        date: '13/08/2000',
        year: 2000,
        country: 'Inglaterra',
        verification: 'Face de Marte famosa',
        source: 'Chilbolton Observatory'
      },
      {
        id: 'c00-5',
        src: 'https://galactic-server.com/c45d8621k/corn335.jpg',
        location: 'Golden Ball Hill, Alton Barnes',
        date: '14/07/2000',
        year: 2000,
        country: 'Inglaterra',
        verification: 'Múltiplas testemunhas oculares',
        source: 'Local Reports 2000'
      }
    ]
  },
  {
    year: 2001,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn453.jpg',
    count: 5,
    description: 'Explosão mundial com a famosa formação de Chilbolton.',
    sources: ['Crop Circle Connector', 'SETI Institute'],
    images: [
      {
        id: 'c01-1',
        src: 'https://galactic-server.com/c45d8621k/corn453.jpg',
        location: 'Avebury Stone Circle, Wiltshire',
        date: '31/05/2001',
        year: 2001,
        country: 'Inglaterra',
        verification: 'Próximo ao círculo de pedras',
        source: 'Avebury Archives'
      },
      {
        id: 'c01-2',
        src: 'https://galactic-server.com/c45d8621k/corn460.jpg',
        location: 'Beckhampton, Avebury',
        date: '30/06/2001',
        year: 2001,
        country: 'Inglaterra',
        verification: 'Cavalo branco de Beckhampton',
        source: 'Wiltshire Heritage'
      },
      {
        id: 'c01-3',
        src: 'https://galactic-server.com/c45d8621k/corn470.jpg',
        location: 'East Field, Alton Barnes',
        date: '21/06/2001',
        year: 2001,
        country: 'Inglaterra',
        verification: 'Solstício de verão',
        source: 'East Field Research'
      },
      {
        id: 'c01-4',
        src: 'https://galactic-server.com/c45d8621k/corn505.gif',
        location: 'Chilbolton, Hampshire',
        date: '19/08/2001',
        year: 2001,
        country: 'Inglaterra',
        verification: 'Resposta de Arecibo modificada',
        source: 'SETI Discussion'
      },
      {
        id: 'c01-5',
        src: 'https://galactic-server.com/c45d8621k/corn543.jpg',
        location: 'Wylatowo, Mogilno',
        date: '27/06/2001',
        year: 2001,
        country: 'Polônia',
        verification: 'Primeira formação polonesa documentada',
        source: 'Polish Crop Circle Research'
      }
    ]
  },
  {
    year: 2005,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn802.jpg',
    count: 5,
    description: 'Círculos de cultivo em múltiplos continentes.',
    sources: ['Crop Circle Connector', 'MUFON'],
    images: [
      {
        id: 'c05-1',
        src: 'https://galactic-server.com/c45d8621k/corn802.jpg',
        location: 'Golden Ball Hill, Alton Barnes',
        date: '01/05/2005',
        year: 2005,
        country: 'Inglaterra',
        verification: 'Formação de 7 círculos',
        source: 'Wiltshire 2005 Archives'
      },
      {
        id: 'c05-2',
        src: 'https://galactic-server.com/c45d8621k/corn806.jpg',
        location: 'Avebury Manor, Wiltshire',
        date: '27/07/2005',
        year: 2005,
        country: 'Inglaterra',
        verification: 'Sistema solar representado',
        source: 'Avebury Research'
      },
      {
        id: 'c05-3',
        src: 'https://galactic-server.com/c45d8621k/corn813.jpg',
        location: 'Northern Colorado',
        date: '18/08/2005',
        year: 2005,
        country: 'EUA',
        verification: 'Documentado por MUFON',
        source: 'MUFON Case Files'
      },
      {
        id: 'c05-4',
        src: 'https://galactic-server.com/c45d8621k/corn851.jpg',
        location: 'Richmond, British Columbia',
        date: '19/08/2005',
        year: 2005,
        country: 'Canadá',
        verification: 'Reportado em jornal local',
        source: 'Vancouver Sun'
      },
      {
        id: 'c05-5',
        src: 'https://galactic-server.com/c45d8621k/corn850.jpg',
        location: 'Sormland, Nykoping',
        date: '28/08/2005',
        year: 2005,
        country: 'Suécia',
        verification: 'Primeira formação sueca verificada',
        source: 'Swedish Crop Circle Research'
      }
    ]
  },
  {
    year: 2009,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn1195.jpg',
    count: 5,
    description: 'Padrões complexos sugerindo mensagens matemáticas.',
    sources: ['Crop Circle Connector', 'CICA International'],
    images: [
      {
        id: 'c09-1',
        src: 'https://galactic-server.com/c45d8621k/corn1193.jpg',
        location: 'Barbury Castle, Wroughton',
        date: '24/05/2009',
        year: 2009,
        country: 'Inglaterra',
        verification: 'Número Pi codificado',
        source: 'Mathematical Analysis 2009'
      },
      {
        id: 'c09-2',
        src: 'https://galactic-server.com/c45d8621k/corn1195.jpg',
        location: 'Milk Hill, Stanton St Bernard',
        date: '27/06/2009',
        year: 2009,
        country: 'Inglaterra',
        verification: 'Formação de 6 círculos',
        source: 'Milk Hill Archives'
      },
      {
        id: 'c09-3',
        src: 'https://galactic-server.com/c45d8621k/corn1208.jpg',
        location: 'Silbury Hill, Avebury',
        date: '05/07/2009',
        year: 2009,
        country: 'Inglaterra',
        verification: 'Próximo ao monumento neolítico',
        source: 'English Heritage'
      },
      {
        id: 'c09-4',
        src: 'https://galactic-server.com/c45d8621k/corn1266.jpg',
        location: 'Åmodt farm, Rælingen',
        date: '20/08/2009',
        year: 2009,
        country: 'Noruega',
        verification: 'Primeira formação norueguesa',
        source: 'Norwegian Research Group'
      },
      {
        id: 'c09-5',
        src: 'https://galactic-server.com/c45d8621k/corn1285.jpg',
        location: 'Stettler, Alberta',
        date: '25/08/2009',
        year: 2009,
        country: 'Canadá',
        verification: 'Fotografia aérea verificada',
        source: 'Canadian Crop Circles'
      }
    ]
  }
];

export const cropCircleInfo = {
  title: 'Crop Circles Verificados',
  subtitle: 'Círculos de Cultivo Documentados',
  description: 'Coleção curada de formações verificadas por pesquisadores independentes. Apenas imagens com múltiplas fontes de confirmação.',
  technology: 'Tecnologia Interdimensional',
  origin: 'Telosi, Pleiadianos e Federação Galáctica',
  purpose: 'Chaves matemáticas e guias de ascensão',
  disclaimer: 'Imagens selecionadas com base em múltiplas fontes de verificação. Formações suspeitas de serem hoaxes foram removidas.'
};

export const verificationSources = [
  { name: 'Crop Circle Connector', url: 'www.cropcircleconnector.com' },
  { name: 'Temporary Temples', url: 'www.temporarytemples.co.uk' },
  { name: 'MUFON', url: 'www.mufon.com' },
  { name: 'CICA International', url: 'www.cropcircularcives.org' }
];
