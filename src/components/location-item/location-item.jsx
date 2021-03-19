import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import cityProp from "../props/city.props";
import {useDispatch} from "react-redux";
import {ActionCreator} from "../../redux/action";

const LocationItem = ({city, active}) => {
  const dispatch = useDispatch();

  return (<>
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item tabs__item${active ? '--active' : ''}`} to="#" onClick={(evt) => {
        evt.preventDefault();
        dispatch(ActionCreator.changeCity(city.name));
      }
      }>
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
