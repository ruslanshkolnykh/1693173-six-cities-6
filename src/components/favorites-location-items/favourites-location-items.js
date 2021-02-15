import React from 'react';
import PropTypes from "prop-types";
import FavouritesLocationGroup from "../favourites-location-group/favourites-location-group";

const groupByCity = (arr = []) => {
  let result = [];
  result = arr.reduce((r, a) => {
    r[a.city] = r[a.city] || [];
    r[a.city].push(a);
    return r;
  }, Object.create(null));
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
  offers: PropTypes.array.isRequired,
};

export default FavouritesLocationItems;
