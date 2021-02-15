import React from 'react';
import PropTypes from "prop-types";
import FavouritesLocationItem from "../favourites-location-item/favourites-location-item";

const FavouritesLocationItems = (props) => {
  const {offers} = props;

  return (
    <>
      {offers.map((item)=> <FavouritesLocationItem key={item.id} offer={item}/>)}
    </>
  );
};

FavouritesLocationItems.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default FavouritesLocationItems;
