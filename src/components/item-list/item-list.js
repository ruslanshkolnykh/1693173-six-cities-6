import React from 'react';
import PropTypes from "prop-types";
import PlaceItem from "../place-item/place-item";

const ItemList = ({offers}) => {

  return (
    <>
      {offers.map((item)=> <PlaceItem key={item.id} offer={item}/>)}
    </>
  );
};

ItemList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default ItemList;
