import React from 'react';
import PropTypes from "prop-types";
import FavouritesLocationItem from "../favourites-location-item/favourites-location-item";
import offersProps from "../props/offers.props";

const FavouritesLocationGroup = ({offerGroup, offerArray}) => {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{offerGroup}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offerArray.map((offer) => <FavouritesLocationItem key={offer.id} offer={offer}/>)}
      </div>
    </li>
  );
};

FavouritesLocationGroup.propTypes = {
  offerGroup: PropTypes.string.isRequired,
  offerArray: PropTypes.arrayOf(offersProps).isRequired
};

export default FavouritesLocationGroup;
