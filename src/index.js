import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './redux/reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ActionCreator} from "./redux/action";
import thunk from "redux-thunk";
import {AuthorizationStatus} from "./const";
import {createAPI} from "./api/api";
import {redirect} from "./redux/middleware/redirect";

const api = createAPI(
    () => store.dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

ReactDOM.render(
    <Provider store ={store}>
      <App
      />
    </Provider>,
    document.querySelector(`#root`)
);
