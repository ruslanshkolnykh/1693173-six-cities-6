import {ActionType} from './action';
import {startCity, cityList} from '../const';
import Offers from '../mocks/offers';

const initialState = {
  offers: {},
  city: cityList.map((city) => city.name === startCity)[0]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };

    case ActionType.FILL_OFFERS:
      return {
        ...state,
        offers: Offers.map((offer) => offer.city.name === action.payload.name)
      };
  }
  return state;
};

export {reducer};
