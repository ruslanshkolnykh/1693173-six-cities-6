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
// store.subscribe(()=>{
//   console.log(store.getState());
// });

store.dispatch(ActionCreator.changeCity(startCity));

ReactDOM.render(
    <Provider store ={store}>
      <App
        // itemAmount={10}
        // offers={store.getState().offers}
        // reviews={reviews}
        // city={store.getState().city}
      />
    </Provider>,
    document.querySelector(`#root`)
);
