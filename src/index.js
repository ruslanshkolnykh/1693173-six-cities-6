import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
// import offers from './mocks/offersold';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import favourOffers from './mocks/favour-offers';

ReactDOM.render(
    <App
      itemAmount={10}
      offers={offers}
      reviews={reviews}
      favourOffers={favourOffers}
    />,
    document.querySelector(`#root`)
);
