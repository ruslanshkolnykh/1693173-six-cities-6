import {combineReducers} from 'redux';
import {appProcess} from './app-process/app-process';
import {appData} from './app-data/app-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  APP: `APP`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.APP]: appProcess,
  [NameSpace.USER]: user,
});
