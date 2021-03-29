import {ActionType} from '../action';
import {cityList, startItemsAmount, startCity} from '../../const';

const initialState = {
  itemsAmount: startItemsAmount,
  city: cityList.filter((city) => city.name === startCity)[0],
  reviews: [],
};

const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ITEMS_AMOUNT:
      return {
        ...state,
        itemsAmount: action.payload
      };
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: cityList.filter((city) => city.name === action.payload)[0],
      };

  }

  return state;
};

export {appProcess};
