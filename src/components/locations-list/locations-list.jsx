import React from 'react';
import LocationItem from "../location-item/location-item";
import {cityList} from '../../const';
import cityProp from '../props/city.props';

const LocationsList = ({city}) => {
  const checkActive = (itemName, cityName) => {
    return (itemName === cityName) ? true : false;
  };

  return (
    <>
      {cityList.map((item)=> <LocationItem key={item.name} city={item} active={checkActive(item.name, city.name)}/>)}
    </>
  );
};

LocationsList.propTypes = {
  city: cityProp,
};

export default LocationsList;
