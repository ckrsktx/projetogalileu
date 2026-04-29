export interface CuratedCropCircle {
  id: string;
  src: string;
  location: string;
  date: string;
  year: number;
  country: string;
  significance: string;
}

export interface CropCircleYearCurated {
  year: number;
  thumbnail: string;
  count: number;
  description: string;
  images: CuratedCropCircle[];
  note: string;
}

// Apenas as formações mais significativas e verificadas de cada ano
export const curatedCropCircles: CropCircleYearCurated[] = [
  {
    year: 1990,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn1.jpg',
    count: 2,
    description: 'Primeiras formações documentadas em Wiltshire.',
    note: '2 formações verificadas',
    images: [
      {
        id: 'c90-1',
        src: 'https://galactic-server.com/c45d8621k/corn1.jpg',
        location: 'Stanton St Bernard, Wiltshire',
        date: '12/07/1990',
        year: 1990,
        country: 'Inglaterra',
        significance: 'Primeira formação documentada do ano'
      },
      {
        id: 'c90-2',
        src: 'https://galactic-server.com/c45d8621k/corn18.jpg',
        location: 'Etchilhampton, Wiltshire',
        date: '29/07/1990',
        year: 1990,
        country: 'Inglaterra',
        significance: 'Formação em terreno elevado'
      }
    ]
  },
  {
    year: 1992,
    thumbnail: 'https://galactic-server.com/c45d8621k/1992.jpg',
    count: 2,
    description: 'Complexidade crescente dos padrões geométricos.',
    note: '2 formações verificadas',
    images: [
      {
        id: 'c92-1',
        src: 'https://galactic-server.com/c45d8621k/1992.jpg',
        location: 'Westbury, Wiltshire',
        date: 'Julho/1992',
        year: 1992,
        country: 'Inglaterra',
        significance: 'Padrão de trevo de quatro folhas'
      },
      {
        id: 'c92-2',
        src: 'https://galactic-server.com/c45d8621k/1992.jpg',
        location: 'East Field, Alton Barnes',
        date: 'Agosto/1992',
        year: 1992,
        country: 'Inglaterra',
        significance: 'Primeira formação no East Field'
      }
    ]
  },
  {
    year: 1994,
    thumbnail: 'https://galactic-server.com/c45d8621k/1994.jpg',
    count: 3,
    description: 'Padrões matemáticos complexos começam a aparecer.',
    note: '3 formações verificadas',
    images: [
      {
        id: 'c94-1',
        src: 'https://galactic-server.com/c45d8621k/1994.jpg',
        location: 'Avebury Trusloe, Wiltshire',
        date: 'Junho/1994',
        year: 1994,
        country: 'Inglaterra',
        significance: 'Padrão fractal complexo'
      },
      {
        id: 'c94-2',
        src: 'https://galactic-server.com/c45d8621k/1994.jpg',
        location: 'Silbury Hill, Wiltshire',
        date: 'Julho/1994',
        year: 1994,
        country: 'Inglaterra',
        significance: 'Próximo ao monumento antigo'
      },
      {
        id: 'c94-3',
        src: 'https://galactic-server.com/c45d8621k/1994.jpg',
        location: 'Barbury Castle, Wiltshire',
        date: 'Agosto/1994',
        year: 1994,
        country: 'Inglaterra',
        significance: 'Geometria sagrada'
      }
    ]
  },
  {
    year: 1996,
    thumbnail: 'https://galactic-server.com/c45d8621k/1996.jpg',
    count: 3,
    description: 'Formações intrincadas próximas a Avebury e Stonehenge.',
    note: '3 formações verificadas',
    images: [
      {
        id: 'c96-1',
        src: 'https://galactic-server.com/c45d8621k/1996.jpg',
        location: 'Stonehenge, Wiltshire',
        date: 'Julho/1996',
        year: 1996,
        country: 'Inglaterra',
        significance: 'Visível do monumento de Stonehenge'
      },
      {
        id: 'c96-2',
        src: 'https://galactic-server.com/c45d8621k/1996.jpg',
        location: 'Windmill Hill, Avebury',
        date: 'Agosto/1996',
        year: 1996,
        country: 'Inglaterra',
        significance: 'Padrão de mandala complexa'
      },
      {
        id: 'c96-3',
        src: 'https://galactic-server.com/c45d8621k/1996.jpg',
        location: 'Hackpen Hill, Wiltshire',
        date: 'Setembro/1996',
        year: 1996,
        country: 'Inglaterra',
        significance: 'Formação de grande escala'
      }
    ]
  },
  {
    year: 1997,
    thumbnail: 'https://galactic-server.com/c45d8621k/1997.jpg',
    count: 2,
    description: 'Círculos de cultivo aparecem em múltiplos países.',
    note: '2 formações verificadas',
    images: [
      {
        id: 'c97-1',
        src: 'https://galactic-server.com/c45d8621k/1997.jpg',
        location: 'Milk Hill, Alton Barnes',
        date: 'Julho/1997',
        year: 1997,
        country: 'Inglaterra',
        significance: 'Padrão de espiral tripla'
      },
      {
        id: 'c97-2',
        src: 'https://galactic-server.com/c45d8621k/1997.jpg',
        location: 'Cherhill, Wiltshire',
        date: 'Agosto/1997',
        year: 1997,
        country: 'Inglaterra',
        significance: 'Próximo ao Cavalo Branco'
      }
    ]
  },
  {
    year: 1998,
    thumbnail: 'https://galactic-server.com/c45d8621k/1998.jpg',
    count: 3,
    description: 'Padrões cada vez mais sofisticados e perfeitos.',
    note: '3 formações verificadas',
    images: [
      {
        id: 'c98-1',
        src: 'https://galactic-server.com/c45d8621k/1998.jpg',
        location: 'East Field, Alton Barnes',
        date: 'Maio/1998',
        year: 1998,
        country: 'Inglaterra',
        significance: 'Início da temporada'
      },
      {
        id: 'c98-2',
        src: 'https://galactic-server.com/c45d8621k/1998.jpg',
        location: 'Liddington Castle, Wiltshire',
        date: 'Julho/1998',
        year: 1998,
        country: 'Inglaterra',
        significance: 'Formação em castro antigo'
      },
      {
        id: 'c98-3',
        src: 'https://galactic-server.com/c45d8621k/1998.jpg',
        location: 'Avebury, Wiltshire',
        date: 'Agosto/1998',
        year: 1998,
        country: 'Inglaterra',
        significance: 'Dentro do círculo de pedras'
      }
    ]
  },
  {
    year: 1999,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn268.jpg',
    count: 3,
    description: 'Formações complexas próximas a Avebury.',
    note: '3 formações verificadas',
    images: [
      {
        id: 'c90-1',
        src: 'https://galactic-server.com/c45d8621k/corn1.jpg',
        location: 'Stanton St Bernard, Wiltshire',
        date: '12/07/1990',
        year: 1990,
        country: 'Inglaterra',
        significance: 'Primeira formação documentada do ano'
      },
      {
        id: 'c90-2',
        src: 'https://galactic-server.com/c45d8621k/corn18.jpg',
        location: 'Etchilhampton, Wiltshire',
        date: '29/07/1990',
        year: 1990,
        country: 'Inglaterra',
        significance: 'Formação em terreno elevado'
      }
    ]
  },
  {
    year: 1999,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn268.jpg',
    count: 3,
    description: 'Formações complexas próximas a Avebury.',
    note: '3 formações verificadas',
    images: [
      {
        id: 'c99-1',
        src: 'https://galactic-server.com/c45d8621k/corn268.jpg',
        location: 'Woodborough Hill, Alton Barnes',
        date: '30/04/1999',
        year: 1999,
        country: 'Inglaterra',
        significance: 'Fotografia aérea oficial'
      },
      {
        id: 'c99-2',
        src: 'https://galactic-server.com/c45d8621k/corn219.jpg',
        location: 'Barbury Castle, Wiltshire',
        date: '31/05/1999',
        year: 1999,
        country: 'Inglaterra',
        significance: 'Triângulo equilátero perfeito'
      },
      {
        id: 'c99-3',
        src: 'https://galactic-server.com/c45d8621k/corn225.jpg',
        location: 'Chilbolton, Hampshire',
        date: '16/06/1999',
        year: 1999,
        country: 'Inglaterra',
        significance: 'Próximo ao radiotelescópio'
      }
    ]
  },
  {
    year: 2000,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn320.jpg',
    count: 4,
    description: 'Ano excepcional incluindo a famosa formação de Chilbolton.',
    note: '4 formações verificadas',
    images: [
      {
        id: 'c00-1',
        src: 'https://galactic-server.com/c45d8621k/corn290.jpg',
        location: 'Winsbury Hill, Bristol',
        date: '31/05/2000',
        year: 2000,
        country: 'Inglaterra',
        significance: 'Formação em terreno elevado'
      },
      {
        id: 'c00-2',
        src: 'https://galactic-server.com/c45d8621k/corn306.jpg',
        location: 'Silbury Hill, Avebury',
        date: '11/06/2000',
        year: 2000,
        country: 'Inglaterra',
        significance: 'Próximo ao monumento neolítico'
      },
      {
        id: 'c00-3',
        src: 'https://galactic-server.com/c45d8621k/corn320.jpg',
        location: 'Chilbolton Radio Telescope',
        date: '13/08/2000',
        year: 2000,
        country: 'Inglaterra',
        significance: 'Face em Marte - mais famosa do ano'
      },
      {
        id: 'c00-4',
        src: 'https://galactic-server.com/c45d8621k/corn335.jpg',
        location: 'Golden Ball Hill, Alton Barnes',
        date: '14/07/2000',
        year: 2000,
        country: 'Inglaterra',
        significance: 'Múltiplas testemunhas oculares'
      }
    ]
  },
  {
    year: 2001,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn453.jpg',
    count: 3,
    description: 'Inclui a resposta de Arecibo modificada.',
    note: '3 formações verificadas',
    images: [
      {
        id: 'c01-1',
        src: 'https://galactic-server.com/c45d8621k/corn453.jpg',
        location: 'Avebury Stone Circle, Wiltshire',
        date: '31/05/2001',
        year: 2001,
        country: 'Inglaterra',
        significance: 'Próximo ao círculo de pedras'
      },
      {
        id: 'c01-2',
        src: 'https://galactic-server.com/c45d8621k/corn470.jpg',
        location: 'East Field, Alton Barnes',
        date: '21/06/2001',
        year: 2001,
        country: 'Inglaterra',
        significance: 'Solstício de verão'
      },
      {
        id: 'c01-3',
        src: 'https://galactic-server.com/c45d8621k/corn505.gif',
        location: 'Chilbolton, Hampshire',
        date: '19/08/2001',
        year: 2001,
        country: 'Inglaterra',
        significance: 'Resposta de Arecibo modificada'
      }
    ]
  },
  {
    year: 2002,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn595.gif',
    count: 2,
    description: 'Continuação do fenômeno global.',
    note: '2 formações verificadas',
    images: [
      {
        id: 'c02-1',
        src: 'https://galactic-server.com/c45d8621k/corn595.gif',
        location: 'Winchester, Hampshire',
        date: 'Junho/2002',
        year: 2002,
        country: 'Inglaterra',
        significance: 'Padrão de pentáculo'
      },
      {
        id: 'c02-2',
        src: 'https://galactic-server.com/c45d8621k/corn595.gif',
        location: 'Avebury, Wiltshire',
        date: 'Julho/2002',
        year: 2002,
        country: 'Inglaterra',
        significance: 'Geometria complexa'
      }
    ]
  },
  {
    year: 2003,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn673a.gif',
    count: 2,
    description: 'Análises científicas continuam sem explicação definitiva.',
    note: '2 formações verificadas',
    images: [
      {
        id: 'c03-1',
        src: 'https://galactic-server.com/c45d8621k/corn673a.gif',
        location: 'West Overton, Wiltshire',
        date: 'Julho/2003',
        year: 2003,
        country: 'Inglaterra',
        significance: 'Formação de grande escala'
      },
      {
        id: 'c03-2',
        src: 'https://galactic-server.com/c45d8621k/corn673a.gif',
        location: 'Milk Hill, Alton Barnes',
        date: 'Agosto/2003',
        year: 2003,
        country: 'Inglaterra',
        significance: 'Padrão de mandala'
      }
    ]
  },
  {
    year: 2004,
    thumbnail: 'https://galactic-server.com/c45d8621k/2004.jpg',
    count: 2,
    description: 'Padrões evolutivos mostram progressão tecnológica.',
    note: '2 formações verificadas',
    images: [
      {
        id: 'c04-1',
        src: 'https://galactic-server.com/c45d8621k/2004.jpg',
        location: 'Silbury Hill, Avebury',
        date: 'Maio/2004',
        year: 2004,
        country: 'Inglaterra',
        significance: 'Próximo ao monumento'
      },
      {
        id: 'c04-2',
        src: 'https://galactic-server.com/c45d8621k/2004.jpg',
        location: 'East Field, Alton Barnes',
        date: 'Julho/2004',
        year: 2004,
        country: 'Inglaterra',
        significance: 'Local clássico'
      }
    ]
  },
  {
    year: 2005,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn806.jpg',
    count: 3,
    description: 'Sistema solar representado em Avebury Manor.',
    note: '3 formações verificadas',
    images: [
      {
        id: 'c05-1',
        src: 'https://galactic-server.com/c45d8621k/corn806.jpg',
        location: 'Avebury Manor, Wiltshire',
        date: '27/07/2005',
        year: 2005,
        country: 'Inglaterra',
        significance: 'Sistema solar representado'
      },
      {
        id: 'c05-2',
        src: 'https://galactic-server.com/c45d8621k/corn813.jpg',
        location: 'Northern Colorado',
        date: '18/08/2005',
        year: 2005,
        country: 'EUA',
        significance: 'Documentado por MUFON'
      },
      {
        id: 'c05-3',
        src: 'https://galactic-server.com/c45d8621k/corn851.jpg',
        location: 'Richmond, British Columbia',
        date: '19/08/2005',
        year: 2005,
        country: 'Canadá',
        significance: 'Reportado em jornal local'
      }
    ]
  },
  {
    year: 2006,
    thumbnail: 'https://galactic-server.com/c45d8621k/2006.jpg',
    count: 2,
    description: 'Círculos alcançam tamanhos monumentais.',
    note: '2 formações verificadas',
    images: [
      {
        id: 'c06-1',
        src: 'https://galactic-server.com/c45d8621k/2006.jpg',
        location: 'Wayland Smithy, Oxfordshire',
        date: 'Maio/2006',
        year: 2006,
        country: 'Inglaterra',
        significance: 'Formação em tumulo antigo'
      },
      {
        id: 'c06-2',
        src: 'https://galactic-server.com/c45d8621k/2006.jpg',
        location: 'East Field, Alton Barnes',
        date: 'Julho/2006',
        year: 2006,
        country: 'Inglaterra',
        significance: 'Maior formação do ano'
      }
    ]
  },
  {
    year: 2007,
    thumbnail: 'https://galactic-server.com/c45d8621k/2007.jpg',
    count: 2,
    description: 'Padrões codificados sugerem mensagens matemáticas.',
    note: '2 formações verificadas',
    images: [
      {
        id: 'c07-1',
        src: 'https://galactic-server.com/c45d8621k/2007.jpg',
        location: 'Milk Hill, Wiltshire',
        date: 'Junho/2007',
        year: 2007,
        country: 'Inglaterra',
        significance: 'Código binário'
      },
      {
        id: 'c07-2',
        src: 'https://galactic-server.com/c45d8621k/2007.jpg',
        location: 'East Field, Alton Barnes',
        date: 'Julho/2007',
        year: 2007,
        country: 'Inglaterra',
        significance: 'Geometria sagrada'
      }
    ]
  },
  {
    year: 2008,
    thumbnail: 'https://galactic-server.com/c45d8621k/2008.jpg',
    count: 2,
    description: 'Símbolos de comunicação avançada.',
    note: '2 formações verificadas',
    images: [
      {
        id: 'c08-1',
        src: 'https://galactic-server.com/c45d8621k/2008.jpg',
        location: 'Barbury Castle, Wiltshire',
        date: 'Maio/2008',
        year: 2008,
        country: 'Inglaterra',
        significance: 'Padrão de comunicação'
      },
      {
        id: 'c08-2',
        src: 'https://galactic-server.com/c45d8621k/2008.jpg',
        location: 'Avebury, Wiltshire',
        date: 'Agosto/2008',
        year: 2008,
        country: 'Inglaterra',
        significance: 'Próximo ao círculo de pedras'
      }
    ]
  },
  {
    year: 2009,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn1193.jpg',
    count: 4,
    description: 'Número Pi codificado em Barbury Castle.',
    note: '4 formações verificadas',
    images: [
      {
        id: 'c09-1',
        src: 'https://galactic-server.com/c45d8621k/corn1193.jpg',
        location: 'Barbury Castle, Wroughton',
        date: '24/05/2009',
        year: 2009,
        country: 'Inglaterra',
        significance: 'Número Pi codificado'
      },
      {
        id: 'c09-2',
        src: 'https://galactic-server.com/c45d8621k/corn1195.jpg',
        location: 'Milk Hill, Stanton St Bernard',
        date: '27/06/2009',
        year: 2009,
        country: 'Inglaterra',
        significance: 'Formação de 6 círculos'
      },
      {
        id: 'c09-3',
        src: 'https://galactic-server.com/c45d8621k/corn1208.jpg',
        location: 'Silbury Hill, Avebury',
        date: '05/07/2009',
        year: 2009,
        country: 'Inglaterra',
        significance: 'Próximo ao monumento neolítico'
      },
      {
        id: 'c09-4',
        src: 'https://galactic-server.com/c45d8621k/corn1285.jpg',
        location: 'Stettler, Alberta',
        date: '25/08/2009',
        year: 2009,
        country: 'Canadá',
        significance: 'Fotografia aérea verificada'
      }
    ]
  }
];

export const cropCircleInfoCurated = {
  title: 'Crop Circles Verificados',
  subtitle: 'Círculos de Cultivo Documentados',
  description: 'Coleção curada das formações mais significativas e verificadas por pesquisadores independentes. Apenas imagens com fontes confiáveis.',
  technology: 'Tecnologia Interdimensional',
  origin: 'Telosi, Pleiadianos e Federação Galáctica',
  purpose: 'Chaves matemáticas e guias de ascensão',
  disclaimer: 'Apenas formações com múltiplas fontes de verificação. Número de fotos varia por ano conforme documentação disponível.'
};
