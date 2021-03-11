import React from 'react';
import PropTypes from "prop-types";
import FavouritesLocationGroup from "../favourites-location-group/favourites-location-group";
import offersProps from "../props/offers.props";

const groupByCity = (arr = []) => {
  let result = [];
  result = arr.reduce((r, a) => {
    r[a.city.name] = r[a.city.name] || [];
    r[a.city.name].push(a);
    return r;
  }, {});
  return result;
};

const FavouritesLocationItems = ({offers}) => {

  const groupedOffers = groupByCity(offers);

  return (
    <>
      {Object.keys(groupedOffers).map((offerGroup)=> <FavouritesLocationGroup key={Math.random()} offerArray={groupedOffers[offerGroup]} offerGroup={offerGroup}/>)}
    </>
  );
};

FavouritesLocationItems.propTypes = {
  offers: PropTypes.arrayOf(offersProps).isRequired,
};

export default FavouritesLocationItems;
