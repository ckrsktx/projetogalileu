export interface CropCircleImage {
  id: string;
  src: string;
  location: string;
  date: string;
  year: number;
  country: string;
}

export interface CropCircleYear {
  year: number;
  thumbnail: string;
  count: number;
  description: string;
  images: CropCircleImage[];
}

export const cropCirclesData: CropCircleYear[] = [
  {
    year: 1990,
    thumbnail: 'https://galactic-server.com/c45d8621k/1990.jpg',
    count: 4,
    description: 'Primeiras formações documentadas em campos de milho na Inglaterra.',
    images: [
      { id: 'corn1', src: 'https://galactic-server.com/c45d8621k/corn1.jpg', location: 'Stanton ST Bernard, nr Devizes, Wiltshire', date: '12/7/1990', year: 1990, country: 'England' },
      { id: 'corn8', src: 'https://galactic-server.com/c45d8621k/corn8.jpg', location: 'United Kingdom', date: '1990', year: 1990, country: 'England' },
      { id: 'corn9', src: 'https://galactic-server.com/c45d8621k/corn9.jpg', location: 'United Kingdom', date: '1990', year: 1990, country: 'England' },
      { id: 'corn18', src: 'https://galactic-server.com/c45d8621k/corn18.jpg', location: 'Etchilhampton, England', date: '29/7/1990', year: 1990, country: 'England' }
    ]
  },
  {
    year: 1991,
    thumbnail: 'https://galactic-server.com/c45d8621k/1991.jpg',
    count: 12,
    description: 'Aumento significativo de formações no Reino Unido.',
    images: [
      { id: 'corn2', src: 'https://galactic-server.com/c45d8621k/corn2.jpg', location: 'United Kingdom', date: '1991', year: 1991, country: 'England' },
      { id: 'corn3', src: 'https://galactic-server.com/c45d8621k/corn3.jpg', location: 'Kite lands, nr Micheldever, Hampshire', date: '8/8/1991', year: 1991, country: 'England' },
      { id: 'corn4', src: 'https://galactic-server.com/c45d8621k/corn4.jpg', location: 'United Kingdom', date: '1991', year: 1991, country: 'England' },
      { id: 'corn5', src: 'https://galactic-server.com/c45d8621k/corn5.jpg', location: 'United Kingdom', date: '1991', year: 1991, country: 'England' },
      { id: 'corn7', src: 'https://galactic-server.com/c45d8621k/corn7.jpg', location: 'Ickceton, nr Cambridge (Cambridgeshire)', date: '12/8/1991', year: 1991, country: 'England' },
      { id: 'corn10', src: 'https://galactic-server.com/c45d8621k/corn10.jpg', location: 'United Kingdom', date: '1991', year: 1991, country: 'England' },
      { id: 'corn11', src: 'https://galactic-server.com/c45d8621k/corn11.jpg', location: 'United Kingdom', date: '1991', year: 1991, country: 'England' },
      { id: 'corn12', src: 'https://galactic-server.com/c45d8621k/corn12.jpg', location: 'Beckhamton, nr Avebury, Wiltshire', date: '14/6/1991', year: 1991, country: 'England' },
      { id: 'corn13', src: 'https://galactic-server.com/c45d8621k/corn13.jpg', location: 'United Kingdom', date: '1991', year: 1991, country: 'England' },
      { id: 'corn14', src: 'https://galactic-server.com/c45d8621k/corn14.jpg', location: 'United Kingdom', date: '1991', year: 1991, country: 'England' },
      { id: 'corn15', src: 'https://galactic-server.com/c45d8621k/corn15.jpg', location: 'Woodford, England', date: '7/8/1991', year: 1991, country: 'England' },
      { id: 'corn23', src: 'https://galactic-server.com/c45d8621k/corn23.jpg', location: 'Barbury Castle, England', date: '16/6/1991', year: 1991, country: 'England' }
    ]
  },
  {
    year: 1995,
    thumbnail: 'https://galactic-server.com/c45d8621k/1995.jpg',
    count: 17,
    description: 'Complexidade crescente dos padrões geométricos.',
    images: [
      { id: 'corn93', src: 'https://galactic-server.com/c45d8621k/corn93.jpg', location: 'England', date: '1995', year: 1995, country: 'England' },
      { id: 'corn94', src: 'https://galactic-server.com/c45d8621k/corn94.jpg', location: 'Lurkley Hill, nr East Kennett, Wiltshire', date: '21/5/1995', year: 1995, country: 'England' },
      { id: 'corn95', src: 'https://galactic-server.com/c45d8621k/corn95.jpg', location: 'Dansbury, nr stocbridge', date: 'Mid June 1995', year: 1995, country: 'England' },
      { id: 'corn96', src: 'https://galactic-server.com/c45d8621k/corn96.jpg', location: 'Cowdown, nr Andower, Hampshire', date: '17/6/1995', year: 1995, country: 'England' },
      { id: 'corn97', src: 'https://galactic-server.com/c45d8621k/corn97.jpg', location: 'Longwood Warren, Cheesfoot Head, nr Winchester, Hampshire', date: '26/6/1995', year: 1995, country: 'England' },
      { id: 'corn98', src: 'https://galactic-server.com/c45d8621k/corn98.jpg', location: 'Lichfield, nr Dunly, Hampshire', date: '4/7/1995', year: 1995, country: 'England' },
      { id: 'corn99', src: 'https://galactic-server.com/c45d8621k/corn99.jpg', location: 'Punchbowl, Cheesehead, nr Winchester, Hampshire', date: '4/7/1995', year: 1995, country: 'England' },
      { id: 'corn100', src: 'https://galactic-server.com/c45d8621k/corn100.jpg', location: 'Shoreham, Airport, Sussex', date: '6/7/1995', year: 1995, country: 'England' },
      { id: 'corn101', src: 'https://galactic-server.com/c45d8621k/corn101.jpg', location: 'Brockwood, Hampshire', date: 'Early July 1995', year: 1995, country: 'England' },
      { id: 'corn102', src: 'https://galactic-server.com/c45d8621k/corn102.jpg', location: 'Watership Down, nr Kingsclere, Newbury, Hampshire', date: '6/7/1995', year: 1995, country: 'England' },
      { id: 'corn103', src: 'https://galactic-server.com/c45d8621k/corn103.jpg', location: 'East Meon, Petersfield, Hampshire', date: 'Early July 1995', year: 1995, country: 'England' },
      { id: 'corn104', src: 'https://galactic-server.com/c45d8621k/corn104.jpg', location: 'Winterbourne Bassett, Wiltshire', date: 'Mid July 1995', year: 1995, country: 'England' },
      { id: 'corn105', src: 'https://galactic-server.com/c45d8621k/corn105.jpg', location: 'Roundway Rings, nr Devizes, Wiltshire', date: 'Mid July 1995', year: 1995, country: 'England' },
      { id: 'corn106', src: 'https://galactic-server.com/c45d8621k/corn106.jpg', location: 'Statford Upon Avon, Warwickshire', date: 'Mid July 1995', year: 1995, country: 'England' },
      { id: 'corn107', src: 'https://galactic-server.com/c45d8621k/corn107.jpg', location: 'Appleshawn, nr Andower, Hampshire', date: '29/7/1995', year: 1995, country: 'England' },
      { id: 'corn108', src: 'https://galactic-server.com/c45d8621k/corn108.jpg', location: 'The organic cropcircle', date: '1995', year: 1995, country: 'England' },
      { id: 'corn109', src: 'https://galactic-server.com/c45d8621k/corn109.jpg', location: 'East Meon, Hampshire', date: 'Early August 1995', year: 1995, country: 'England' }
    ]
  },
  {
    year: 1999,
    thumbnail: 'https://galactic-server.com/c45d8621k/1999.jpg',
    count: 60,
    description: 'Ano excepcional com formações de grande escala mundial.',
    images: [
      { id: 'corn268', src: 'https://galactic-server.com/c45d8621k/corn268.jpg', location: 'Woodborough Hill, nr Alton Barnes, Wiltshire', date: '30/4/1999', year: 1999, country: 'England' },
      { id: 'corn272', src: 'https://galactic-server.com/c45d8621k/corn272.jpg', location: 'Henwood, nr East Meon, Hampshire', date: '27/4/1999', year: 1999, country: 'England' },
      { id: 'corn219', src: 'https://galactic-server.com/c45d8621k/corn219.jpg', location: 'Barbury Castle, nr Chiseldon Wiltshire', date: '31/5/1999', year: 1999, country: 'England' },
      { id: 'corn225', src: 'https://galactic-server.com/c45d8621k/corn225.jpg', location: 'Chilbolton, nr Andover, Hampshire', date: '16/6/1999', year: 1999, country: 'England' },
      { id: 'corn214', src: 'https://galactic-server.com/c45d8621k/corn214.jpg', location: 'Avebury Trusloe, nr Avebury Wiltshire', date: '19/6/1999', year: 1999, country: 'England' },
      { id: 'corn212', src: 'https://galactic-server.com/c45d8621k/corn212.jpg', location: 'East Field, nr Alton Barnes Wiltshire', date: '12/6/1999', year: 1999, country: 'England' },
      { id: 'corn211', src: 'https://galactic-server.com/c45d8621k/corn211.jpg', location: 'East Field, nr Alton Barnes Wiltshire', date: '12/6/1999', year: 1999, country: 'England' },
      { id: 'corn210', src: 'https://galactic-server.com/c45d8621k/corn210.jpg', location: 'Allington, nr Devizes, Wiltshire', date: '24/6/1999', year: 1999, country: 'England' },
      { id: 'corn258', src: 'https://galactic-server.com/c45d8621k/corn258.jpg', location: 'Stanton St Bernard, nr Alton Barnes, Wiltshire', date: '23/6/1999', year: 1999, country: 'England' },
      { id: 'corn265', src: 'https://galactic-server.com/c45d8621k/corn265.jpg', location: 'Lippen Lane, Warnford, nr Winchester, Hamps', date: '12/7/1999', year: 1999, country: 'England' },
      { id: 'corn223', src: 'https://galactic-server.com/c45d8621k/corn223.jpg', location: 'Cherhill, nr Calne, Wiltshire', date: '17/7/1999', year: 1999, country: 'England' },
      { id: 'corn256', src: 'https://galactic-server.com/c45d8621k/corn256.jpg', location: 'Honey Street, Nr Alton Barnes Wiltshire', date: '16/7/1999', year: 1999, country: 'England' },
      { id: 'corn262', src: 'https://galactic-server.com/c45d8621k/corn262.jpg', location: 'Windmill Hill, Nr Avebury, Wiltshire', date: '16/7/1999', year: 1999, country: 'England' },
      { id: 'corn213', src: 'https://galactic-server.com/c45d8621k/corn213.jpg', location: 'Avebury Avenue, nr Avebury, Wiltshire', date: '29/7/1999', year: 1999, country: 'England' },
      { id: 'corn220', src: 'https://galactic-server.com/c45d8621k/corn220.jpg', location: 'Beckhampton, nr Avebury, Wiltshire', date: '28/7/1999', year: 1999, country: 'England' },
      { id: 'corn216', src: 'https://galactic-server.com/c45d8621k/corn216.jpg', location: 'Barbury Castle, nr Chiseldon, Wiltshire', date: '23/7/1999', year: 1999, country: 'England' },
      { id: 'corn257', src: 'https://galactic-server.com/c45d8621k/corn257.jpg', location: 'Stanton St Bernard, nr Alton Barnes, Wiltshire', date: '14/8/1999', year: 1999, country: 'England' },
      { id: 'corn217', src: 'https://galactic-server.com/c45d8621k/corn217.jpg', location: 'Bishop Cannings, nr Devizes, Wiltshire', date: '6/8/1999', year: 1999, country: 'England' },
      { id: 'corn215', src: 'https://galactic-server.com/c45d8621k/corn215.jpg', location: 'Barbury Castle,nr Chiseldon, Wiltshire', date: '5/8/1999', year: 1999, country: 'England' },
      { id: 'corn218', src: 'https://galactic-server.com/c45d8621k/corn218.jpg', location: 'Milk Hill, nr Alton Barnes, Wiltshire', date: '1/8/1999', year: 1999, country: 'England' },
      { id: 'corn207', src: 'https://galactic-server.com/c45d8621k/corn207.jpg', location: 'Jindrichovice', date: '25/7/1999', year: 1999, country: 'Czech Republic' },
      { id: 'corn222', src: 'https://galactic-server.com/c45d8621k/corn222.jpg', location: 'Ehlen A44, nr kassel ,Hessen', date: '26/6/1999', year: 1999, country: 'Germany' }
    ]
  },
  {
    year: 2001,
    thumbnail: 'https://galactic-server.com/c45d8621k/corn505.gif',
    count: 95,
    description: 'Explosão mundial de círculos: Inglaterra, Alemanha, Holanda, Sérvia, Polônia, Noruega e EUA.',
    images: [
      { id: 'corn449', src: 'https://galactic-server.com/c45d8621k/corn449.jpg', location: 'Gog Magog Hills (2), nr Cambridge, Cambridgeshire', date: '25th July 2001', year: 2001, country: 'England' },
      { id: 'corn450', src: 'https://galactic-server.com/c45d8621k/corn450.jpg', location: 'Milk Hill (2), nr Alton Barnes, Wiltshire', date: '13th August 2001', year: 2001, country: 'England' },
      { id: 'corn453', src: 'https://galactic-server.com/c45d8621k/corn453.jpg', location: 'Avebury Stone Circle, Wiltshire', date: '31th May 2001', year: 2001, country: 'England' },
      { id: 'corn454', src: 'https://galactic-server.com/c45d8621k/corn454.jpg', location: 'Green Street, nr Avebury, Wiltshire', date: '31th May 2001', year: 2001, country: 'England' },
      { id: 'corn460', src: 'https://galactic-server.com/c45d8621k/corn460.jpg', location: 'Beckhampton, nr Avebury, Wiltshire', date: '30th June 2001', year: 2001, country: 'England' },
      { id: 'corn466', src: 'https://galactic-server.com/c45d8621k/corn466.jpg', location: 'Silbury Hill (2), nr Avebury, Wiltshire', date: '24th June 2001', year: 2001, country: 'England' },
      { id: 'corn470', src: 'https://galactic-server.com/c45d8621k/corn470.jpg', location: 'East Field, nr Alton Barnes, Wiltshire', date: '21st June 2001', year: 2001, country: 'England' },
      { id: 'corn482', src: 'https://galactic-server.com/c45d8621k/corn482.jpg', location: 'Milk Hill, Nr Alton Barnes, Wiltshire', date: '12th July 2001', year: 2001, country: 'England' },
      { id: 'corn505', src: 'https://galactic-server.com/c45d8621k/corn505.html', location: 'Chilbolton (1), nr Wherwell, Hampshire', date: '19th August 2001', year: 2001, country: 'England' },
      { id: 'corn506', src: 'https://galactic-server.com/c45d8621k/corn505.html', location: 'Chilbolton (2), nr Wherwell, Hampshire', date: '19th August 2001', year: 2001, country: 'England' },
      { id: 'corn522', src: 'https://galactic-server.com/c45d8621k/corn522.jpg', location: 'Kirchhardt, nr Sinsheim, Baden-Württemberg', date: '1st July 2001', year: 2001, country: 'Germany' },
      { id: 'corn523', src: 'https://galactic-server.com/c45d8621k/corn523.jpg', location: 'Gudensberg, nr Hessen', date: '30th June 2001', year: 2001, country: 'Germany' },
      { id: 'corn524', src: 'https://galactic-server.com/c45d8621k/corn524.jpg', location: 'Felsberg, nr Melsungen, Hessen', date: '17th June 2001', year: 2001, country: 'Germany' },
      { id: 'corn542', src: 'https://galactic-server.com/c45d8621k/corn542.jpg', location: 'Odzaci-Backi Gracac', date: '30th May 2001', year: 2001, country: 'Serbia' },
      { id: 'corn543', src: 'https://galactic-server.com/c45d8621k/corn543.jpg', location: 'Wylatowo, nr Mogilno, West Pomerania', date: '27th June 2001', year: 2001, country: 'Poland' },
      { id: 'corn544', src: 'https://galactic-server.com/c45d8621k/corn544.jpg', location: 'Rotvoll, Trondheim', date: '1th September 2001', year: 2001, country: 'Norway' }
    ]
  },
  {
    year: 2005,
    thumbnail: 'https://galactic-server.com/c45d8621k/2005.jpg',
    count: 120,
    description: 'Círculos de cultivo alcançam tamanhos monumentais em múltiplos continentes.',
    images: [
      { id: 'corn802', src: 'https://galactic-server.com/c45d8621k/corn802.jpg', location: 'Golden Ball Hill, nr Alton Barnes, Wiltshire', date: '1st May 2005', year: 2005, country: 'England' },
      { id: 'corn803', src: 'https://galactic-server.com/c45d8621k/corn803.jpg', location: 'Diever, Drenthe', date: '28/8/2005', year: 2005, country: 'The Netherlands' },
      { id: 'corn804', src: 'https://galactic-server.com/c45d8621k/corn804.jpg', location: 'Rychnov u Jablonce nad Nisou', date: '28th June 2005', year: 2005, country: 'Czech Republic' },
      { id: 'corn806', src: 'https://galactic-server.com/c45d8621k/corn806.jpg', location: 'Avebury Manor, nr Avebury, Wiltshire', date: '27th July 2005', year: 2005, country: 'England' },
      { id: 'corn807', src: 'https://galactic-server.com/c45d8621k/corn807.jpg', location: 'Bluebell Hill, nr Maidstone, Kent', date: '19th June 2005', year: 2005, country: 'England' },
      { id: 'corn809', src: 'https://galactic-server.com/c45d8621k/corn809.jpg', location: 'Peccioli - Capannoni, Pisa', date: '2/7/2005', year: 2005, country: 'Italy' },
      { id: 'corn813', src: 'https://galactic-server.com/c45d8621k/corn813.jpg', location: 'Northern Colorado', date: 'August 18th 2005', year: 2005, country: 'USA' },
      { id: 'corn831', src: 'https://galactic-server.com/c45d8621k/corn831.jpg', location: 'Makowarsko, wojewodztwo kujawsko-pomorskie', date: '17/7/2005', year: 2005, country: 'Poland' },
      { id: 'corn835', src: 'https://galactic-server.com/c45d8621k/corn835.jpg', location: 'Russia, Toliatti', date: '22/07/2005', year: 2005, country: 'Russia' },
      { id: 'corn850', src: 'https://galactic-server.com/c45d8621k/corn850.jpg', location: 'Sormland, Nykoping, Tystberga', date: '28/8/2005', year: 2005, country: 'Sweden' },
      { id: 'corn851', src: 'https://galactic-server.com/c45d8621k/corn851.jpg', location: 'Richmond, British Columbia', date: 'August 19 2005', year: 2005, country: 'Canada' },
      { id: 'corn853', src: 'https://galactic-server.com/c45d8621k/corn853.jpg', location: 'Coles County, Illinois', date: 'August 21 2005', year: 2005, country: 'USA' },
      { id: 'corn857', src: 'https://galactic-server.com/c45d8621k/corn857.jpg', location: '20 kilometre outside of Vienna North East', date: '21/07/2005', year: 2005, country: 'Austria' },
      { id: 'corn860', src: 'https://galactic-server.com/c45d8621k/corn860.jpg', location: 'Texel, Noord', date: '21/8/2005', year: 2005, country: 'The Netherlands' },
      { id: 'corn892', src: 'https://galactic-server.com/c45d8621k/corn892.jpg', location: 'Northwood, North Dakota', date: 'Friday August 19th 2005', year: 2005, country: 'USA' }
    ]
  },
  {
    year: 2009,
    thumbnail: 'https://galactic-server.com/c45d8621k/2009.jpg',
    count: 70,
    description: 'Padrões codificados sugerem mensagens matemáticas complexas.',
    images: [
      { id: 'corn1192', src: 'https://galactic-server.com/c45d8621k/corn1192.jpg', location: 'Bishop Cannings, nr Devizes, Wiltshire', date: '8th June', year: 2009, country: 'England' },
      { id: 'corn1193', src: 'https://galactic-server.com/c45d8621k/corn1193.jpg', location: 'Barbury Castle, nr Wroughton, Wiltshire', date: '24th May', year: 2009, country: 'England' },
      { id: 'corn1195', src: 'https://galactic-server.com/c45d8621k/corn1195.jpg', location: 'Milk Hill (5), Stanton St Bernard, Wiltshire', date: '27th June', year: 2009, country: 'England' },
      { id: 'corn1196', src: 'https://galactic-server.com/c45d8621k/corn1196.jpg', location: 'Winterbourne Bassett (2), nr Avebury, Wiltshire', date: '31st July', year: 2009, country: 'England' },
      { id: 'corn1197', src: 'https://galactic-server.com/c45d8621k/corn1197.jpg', location: 'Windmill Hill, Nr Avebury Trusloe, Wiltshire', date: '6th August', year: 2009, country: 'England' },
      { id: 'corn1208', src: 'https://galactic-server.com/c45d8621k/corn1208.jpg', location: 'Silbury Hill, nr Avebury, Wiltshire', date: '5th July', year: 2009, country: 'England' },
      { id: 'corn1266', src: 'https://galactic-server.com/c45d8621k/corn1266.jpg', location: 'Åmodt farm, nr Rælingen. North of Oslo', date: '20th August', year: 2009, country: 'Norway' },
      { id: 'corn1267', src: 'https://galactic-server.com/c45d8621k/corn1267.jpg', location: 'Bourges', date: '8th June', year: 2009, country: 'France' },
      { id: 'corn1268', src: 'https://galactic-server.com/c45d8621k/corn1268.jpg', location: 'Goes, Zuid Holland', date: '8th of August 2009', year: 2009, country: 'The Netherlands' },
      { id: 'corn1270', src: 'https://galactic-server.com/c45d8621k/corn1270.jpg', location: 'Cascina Martina, Riva Presso Chieri, Torino', date: '20th June', year: 2009, country: 'Italy' },
      { id: 'corn1272', src: 'https://galactic-server.com/c45d8621k/corn1272.jpg', location: 'Momalle et Fexhe-Le-Haut-Clocher', date: '2nd July', year: 2009, country: 'Belgium' },
      { id: 'corn1273', src: 'https://galactic-server.com/c45d8621k/corn1273.jpg', location: 'Wilbur, Lincoln County, Washington', date: '23rd July', year: 2009, country: 'USA' },
      { id: 'corn1275', src: 'https://galactic-server.com/c45d8621k/corn1275.jpg', location: 'Hörhausen, Thurgau', date: '12th July', year: 2009, country: 'Switzerland' },
      { id: 'corn1276', src: 'https://galactic-server.com/c45d8621k/corn1276.jpg', location: 'Ehlen, Hessen (Hessia)', date: '30th May', year: 2009, country: 'Germany' },
      { id: 'corn1277', src: 'https://galactic-server.com/c45d8621k/corn1277.jpg', location: 'Kozarovce, Tlmace', date: '11th July 2009', year: 2009, country: 'Slovakia' },
      { id: 'corn1278', src: 'https://galactic-server.com/c45d8621k/corn1278.jpg', location: 'Dinsky district, Krasnodar region', date: '23rd June', year: 2009, country: 'Russia' },
      { id: 'corn1280', src: 'https://galactic-server.com/c45d8621k/corn1280.jpg', location: 'Strzyzawa k. Bydgoszczy', date: '17th July', year: 2009, country: 'Poland' },
      { id: 'corn1285', src: 'https://galactic-server.com/c45d8621k/corn1285.jpg', location: 'Stettler, Alberta', date: '25th August', year: 2009, country: 'Canada' },
      { id: 'corn1288', src: 'https://galactic-server.com/c45d8621k/corn1288.jpg', location: 'Moose Jaw, Saskatchewan', date: '19th September', year: 2009, country: 'Canada' }
    ]
  }
];

export const allYears = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009];

export const cropCircleInfo = {
  title: 'Crop Circles',
  subtitle: 'Círculos de Cultivo',
  description: 'Marcações em campos de milho geradas por alienígenas usando tecnologia interdimensional. Estas formações geométricas perfeitas aparecem em todo o mundo, especialmente na região de Wiltshire, Inglaterra, próximo a locais antigos como Avebury e Stonehenge.',
  technology: 'Tecnologia Interdimensional',
  origin: 'Várias raças, principalmente Telosi e Federação Galáctica',
  purpose: 'Comunicação, chaves de conhecimento ancestral, guia para ascensão'
};
