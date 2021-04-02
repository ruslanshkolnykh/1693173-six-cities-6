import React from 'react';
import ItemList from "../item-list/item-list";
import Map from "../map/map";
import LocationsList from "../locations-list/locations-list";
import {useSelector} from "react-redux";
import {NameSpace} from "../../redux/root-reducer";
import Header from "../header/header";


const MainPage = () => {
  const {offers} = useSelector((state) => state[NameSpace.DATA]);
  const {city} = useSelector((state) => state[NameSpace.APP]);

  const offersFiltered = offers.filter((offer) => offer.city.name === city.name);


  return (<div className="page page--gray page--main">
    <Header />

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <LocationsList city={city} />
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersFiltered.length} places to stay in {city.name}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                    Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <ItemList offers={offersFiltered}/>
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map key={city.name} city={city.location} points={offersFiltered.map((offer) =>{
                const point = {
                  latitude: offer.location.latitude,
                  longitude: offer.location.longitude,
                  title: offer.title,
                };
                return point;
              })}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>);
};

export default MainPage;
