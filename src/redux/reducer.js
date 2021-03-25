import {ActionType} from './action';
import {startCity, cityList, startItemsAmount, AuthorizationStatus} from '../const';

const initialState = {
  offers: [],
  city: cityList.filter((city) => city.name === startCity)[0],
  itemsAmount: startItemsAmount,
  reviews: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: cityList.filter((city) => city.name === action.payload)[0],
      };

    case ActionType.FILL_OFFERS:
      return {
        ...state,
        offers: state.offers.filter((offer) => offer.city.name === action.payload)
      };

    case ActionType.CHANGE_ITEMS_AMOUNT:
      return {
        ...state,
        itemsAmount: action.payload
      };

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
  }
  return state;
};

export {reducer};
