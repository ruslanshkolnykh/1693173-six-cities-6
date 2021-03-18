import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import {createStore} from 'redux';
import {reducer} from './redux/reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ActionType} from "./redux/action";

const store = createStore(reducer, composeWithDevTools());
store.dispatch({type: ActionType.CHANGE_CITY, payload: 'Amsterdam'});

ReactDOM.render(
    <Provider store ={store}>
      <App
        itemAmount={10}
        offers={store.getState().offers}
        reviews={reviews}
        city={store.getState().city}
      />
    </Provider>,
    document.querySelector(`#root`)
);

store.subscribe(()=>{
  console.log(store.getState());
  console.log(store.getState().offers);
  console.log(offers);
});

