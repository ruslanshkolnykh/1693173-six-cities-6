import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {NameSpace} from "../../redux/root-reducer";
import {useSelector} from "react-redux";
import PropTypes from 'prop-types';


const PrivateRoute = ({render, path, exact}) => {
  const {authorizationStatus} = useSelector((state) => state[NameSpace.USER]);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
