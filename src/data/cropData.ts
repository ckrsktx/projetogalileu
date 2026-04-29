export interface CropEntry {
  id: string;
  src: string;
  location: string;
  date: string;
  year: number;
  country: string;
  note: string;
}

const B = 'https://galactic-server.com/c45d8621k/';

export const cropEntries: CropEntry[] = [
  { id:'cc1', src:B+'corn1.jpg',    location:'Stanton St Bernard, Wiltshire',              date:'12/07/1990', year:1990, country:'Inglaterra', note:'Primeira formação documentada' },
  { id:'cc2', src:B+'corn18.jpg',   location:'Etchilhampton, Wiltshire',                   date:'29/07/1990', year:1990, country:'Inglaterra', note:'Formação em terreno elevado' },
  { id:'cc3', src:B+'corn23.jpg',   location:'Barbury Castle, Wiltshire',                   date:'16/06/1991', year:1991, country:'Inglaterra', note:'Triângulo equilátero — marco histórico' },
  { id:'cc4', src:B+'corn12.jpg',   location:'Beckhampton, Avebury',                        date:'14/06/1991', year:1991, country:'Inglaterra', note:'Padrão de anéis concêntricos' },
  { id:'cc5', src:B+'corn15.jpg',   location:'Woodford, Wiltshire',                         date:'07/08/1991', year:1991, country:'Inglaterra', note:'Círculos de tamanho crescente' },
  { id:'cc6', src:B+'1992.jpg',     location:'East Field, Alton Barnes',                    date:'Julho/1992', year:1992, country:'Inglaterra', note:'Primeiro pictograma grande' },
  { id:'cc7', src:B+'1993.jpg',     location:'Charley Knoll, Leicestershire',               date:'Julho/1993', year:1993, country:'Inglaterra', note:'Formação fractal complexa' },
  { id:'cc8', src:B+'1994.jpg',     location:'Avebury Trusloe, Wiltshire',                  date:'Julho/1994', year:1994, country:'Inglaterra', note:'Escorpião — padrão fractal' },
  { id:'cc9', src:B+'corn97.jpg',   location:'Longwood Warren, Winchester, Hampshire',       date:'26/06/1995', year:1995, country:'Inglaterra', note:'Espiral quádrupla documentada' },
  { id:'cc10',src:B+'corn109.jpg',  location:'East Meon, Hampshire',                        date:'Agosto/1995', year:1995, country:'Inglaterra', note:'Galáxia espiral — última do ano' },
  { id:'cc11',src:B+'1996.jpg',     location:'Stonehenge, Wiltshire',                       date:'Julho/1996', year:1996, country:'Inglaterra', note:'Espiral de Julia Set — 151 círculos' },
  { id:'cc12',src:B+'1997.jpg',     location:'Milk Hill, Alton Barnes',                     date:'Agosto/1997', year:1997, country:'Inglaterra', note:'Fractal Koch — precisão matemática' },
  { id:'cc13',src:B+'1998.jpg',     location:'Beckhampton, Avebury',                        date:'Agosto/1998', year:1998, country:'Inglaterra', note:'Hexágono 7 dobras — escala recorde' },
  { id:'cc14',src:B+'corn219.jpg',  location:'Barbury Castle, Wiltshire',                   date:'31/05/1999', year:1999, country:'Inglaterra', note:'Mandala — múltiplas testemunhas' },
  { id:'cc15',src:B+'corn268.jpg',  location:'Woodborough Hill, Alton Barnes',              date:'30/04/1999', year:1999, country:'Inglaterra', note:'Fotografia aérea oficial' },
  { id:'cc16',src:B+'corn225.jpg',  location:'Chilbolton, Hampshire',                       date:'16/06/1999', year:1999, country:'Inglaterra', note:'Próximo ao radiotelescópio' },
  { id:'cc17',src:B+'corn320.jpg',  location:'Chilbolton Radio Telescope, Hampshire',       date:'13/08/2000', year:2000, country:'Inglaterra', note:'Face — formação mais famosa do ano' },
  { id:'cc18',src:B+'corn306.jpg',  location:'Silbury Hill, Avebury',                       date:'11/06/2000', year:2000, country:'Inglaterra', note:'Mandala — monumento neolítico' },
  { id:'cc19',src:B+'corn335.jpg',  location:'Golden Ball Hill, Alton Barnes',              date:'14/07/2000', year:2000, country:'Inglaterra', note:'Espiral dupla — testemunhas oculares' },
  { id:'cc20',src:B+'corn505.gif',  location:'Chilbolton, Hampshire',                       date:'19/08/2001', year:2001, country:'Inglaterra', note:'Resposta de Arecibo — mensagem ET' },
  { id:'cc21',src:B+'corn453.jpg',  location:'Avebury Stone Circle, Wiltshire',             date:'31/05/2001', year:2001, country:'Inglaterra', note:'Dentro do patrimônio histórico' },
  { id:'cc22',src:B+'corn543.jpg',  location:'Wylatowo, Mogilno',                           date:'27/06/2001', year:2001, country:'Polônia',   note:'Primeira formação polonesa verificada' },
  { id:'cc23',src:B+'corn595.gif',  location:'Crabwood, Winchester',                        date:'15/08/2002', year:2002, country:'Inglaterra', note:'Rosto ET com disco binário' },
  { id:'cc24',src:B+'corn673a.gif', location:'West Overton, Wiltshire',                     date:'Julho/2003', year:2003, country:'Inglaterra', note:'Mandala hexagonal — grande escala' },
  { id:'cc25',src:B+'2004.jpg',     location:'Silbury Hill, Avebury',                       date:'Agosto/2004', year:2004, country:'Inglaterra', note:'Espiral tridimensional' },
  { id:'cc26',src:B+'corn806.jpg',  location:'Avebury Manor, Wiltshire',                    date:'27/07/2005', year:2005, country:'Inglaterra', note:'Mapa do sistema solar' },
  { id:'cc27',src:B+'corn813.jpg',  location:'Northern Colorado',                           date:'18/08/2005', year:2005, country:'EUA',        note:'Documentado por MUFON' },
  { id:'cc28',src:B+'2006.jpg',     location:'Waylands Smithy, Oxfordshire',                date:'Julho/2006', year:2006, country:'Inglaterra', note:'Padrão de pena — túmulo neolítico' },
  { id:'cc29',src:B+'2007.jpg',     location:'East Field, Alton Barnes',                    date:'Julho/2007', year:2007, country:'Inglaterra', note:'Formação de 1033 pés — recorde' },
  { id:'cc30',src:B+'2008.jpg',     location:'Barbury Castle, Wiltshire',                   date:'01/06/2008', year:2008, country:'Inglaterra', note:'Número Pi codificado com 10 dígitos' },
  { id:'cc31',src:B+'corn1193.jpg', location:'Barbury Castle, Wroughton',                   date:'24/05/2009', year:2009, country:'Inglaterra', note:'Fórmula de Euler representada' },
  { id:'cc32',src:B+'corn1208.jpg', location:'Silbury Hill, Avebury',                       date:'05/07/2009', year:2009, country:'Inglaterra', note:'Flor 12 pétalas — monumento antigo' },
  { id:'cc33',src:B+'corn1285.jpg', location:'Stettler, Alberta',                           date:'25/08/2009', year:2009, country:'Canadá',     note:'Fotografia aérea verificada' },
];

export const cropYears = [...new Set(cropEntries.map(e => e.year))].sort();
