import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  id: ``,
  email: ``,
  name: ``,
  avatarUrl: ``,
  isPro: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOAD_USER_INFO:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        avatarUrl: action.payload.avatar_url,
        isPro: action.payload.is_pro
      };
    case ActionType.CLEAN_USER_INFO:
      return {
        ...state,
        id: ``,
        email: ``,
        name: ``,
        avatarUrl: ``,
        isPro: false
      };
  }

  return state;
};

export {user};
