import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import cityProp from "../props/city.props";

const LocationItem = ({city, active}) => {

  return (<>
    <li className="locations__item">
      <Link className={active ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} to="#">
        <span>{city.name}</span>
      </Link>
    </li>
  </>
  );
};

LocationItem.propTypes = {
  city: cityProp,
  active: PropTypes.bool.isRequired,
};


export default LocationItem;
