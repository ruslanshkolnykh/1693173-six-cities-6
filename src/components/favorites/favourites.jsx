import React from 'react';
import FavouritesLocationItems from "../favorites-location-items/favourites-location-items";
import {useSelector} from "react-redux";
import {NameSpace} from "../../redux/root-reducer";
import Header from "../header/header";

const Favourites = () => {
  const st = useSelector((state) => state);
  const offersFiltered = st[NameSpace.DATA].offers.filter((offer) => offer.is_favorite);

  return (<div className="page">
    <Header />

    {(offersFiltered.length > 0) ?
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavouritesLocationItems offers={offersFiltered}/>
            </ul>
          </section>
        </div>
      </main>
      :
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future
                trips.</p>
            </div>
          </section>
        </div>
      </main>
    }
    <footer className="footer container">
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </a>
    </footer>
  </div>);
};


export default Favourites;
