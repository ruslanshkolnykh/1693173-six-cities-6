import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore} from 'redux';
import {reducer} from './redux/reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ActionCreator} from "./redux/action";
import {startCity} from "./const";

const store = createStore(reducer, composeWithDevTools());

store.dispatch(ActionCreator.changeCity(startCity));

ReactDOM.render(
    <Provider store ={store}>
      <App
      />
    </Provider>,
    document.querySelector(`#root`)
);
