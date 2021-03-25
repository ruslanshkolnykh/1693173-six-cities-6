const startCity = `Paris`;

const startItemsAmount = 10;

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const cityList = [
  {
    "location": {
      "latitude": 48.864716,
      "longitude": 2.349014,
      "zoom": 10
    },
    "name": `Paris`
  },
  {
    "location": {
      "latitude": 50.93333,
      "longitude": 6.95,
      "zoom": 10
    },
    "name": `Cologne`
  },
  {
    "location": {
      "latitude": 50.8503396,
      "longitude": 4.3517103,
      "zoom": 10
    },
    "name": `Brussels`
  },
  {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": `Amsterdam`
  },
  {
    "location": {
      "latitude": 53.551086,
      "longitude": 9.993682,
      "zoom": 10
    },
    "name": `Hamburg`
  },
  {
    "location": {
      "latitude": 51.22172,
      "longitude": 6.77616,
      "zoom": 10
    },
    "name": `Dusseldorf`
  },
];

const AppRoute = {
  LOGIN: `/login`,
  FAVOURITES: `/favourites`,
  OFFER: `/offer/:id`,
  MAIN: `/`
};

export {startCity, cityList, startItemsAmount, AuthorizationStatus, AppRoute};
