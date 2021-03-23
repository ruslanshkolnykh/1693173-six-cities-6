import {ActionType} from './action';
import {startCity, cityList, startItemsAmount} from '../const';
import Offers from '../mocks/offers';

const initialState = {
  offers: [],
  city: cityList.filter((city) => city.name === startCity)[0],
  itemsAmount: startItemsAmount,
  reviews: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: cityList.filter((city) => city.name === action.payload)[0],
        offers: Offers.filter((offer) => offer.city.name === action.payload)
      };

    case ActionType.FILL_OFFERS:
      return {
        ...state,
        offers: Offers.filter((offer) => offer.city.name === action.payload)
      };

    case ActionType.CHANGE_ITEMS_AMOUNT:
      return {
        ...state,
        itemsAmount: action.payload
      };

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload
      };
  }
  return state;
};

export {reducer};
