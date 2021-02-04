import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

ReactDOM.render(
    <App itemAmount={10}/>,
    document.querySelector(`#root`)
);
