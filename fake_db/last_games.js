import {
  barcelonaLogo,
  realmadridLogo,
  manchesterCityLogo,
  mtcLogo,
  mchLogo,
  atmLogo,
  plus,
} from '../assets';

const games = [
  {
    id: '1',
    firstTeamName: 'ברצלונה',
    secondTeamName: 'מנצ׳סטר סיטי',
    firstTeamImage: barcelonaLogo,
    secondTeamImage: manchesterCityLogo,
    firstTeamScore: 5,
    seconeTeamScore: 0,
  },
  {
    id: '2',
    firstTeamName: 'ברצלונה',
    secondTeamName: 'ריאל מדריד',
    firstTeamImage: barcelonaLogo,
    secondTeamImage: realmadridLogo,
    firstTeamScore: 5,
    seconeTeamScore: 0,
  },
  {
    id: '3',
    firstTeamName: 'מכבי תל אביב',
    secondTeamName: 'מכבי חיפה',
    firstTeamImage: mtcLogo,
    secondTeamImage: mchLogo,
    firstTeamScore: 3,
    seconeTeamScore: 2,
  },
  {
    id: '4',
    firstTeamName: 'אתלטיקו מדריד',
    secondTeamName: 'מנצ׳סטר סיטי',
    firstTeamImage: atmLogo,
    secondTeamImage: manchesterCityLogo,
    firstTeamScore: 4,
    seconeTeamScore: 5,
  },
  {
    id: '5',
    firstTeamName: 'ריאל מדריד',
    secondTeamName: 'אתלטיקו מדריד',
    firstTeamImage: realmadridLogo,
    secondTeamImage: atmLogo,
    firstTeamScore: 3,
    seconeTeamScore: 4,
  },
];

export default games;
