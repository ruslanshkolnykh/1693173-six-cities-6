import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import Favourites from "../favorites/favourites";
import Room from "../room/room";
import NotFound from "../not-found/not-found";

const App = (props) => {
  const {itemAmount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage itemAmount={itemAmount} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favourites">
          <Favourites />
        </Route>
        <Route exact path="/offer/:id">
          <Room />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  itemAmount: PropTypes.number.isRequired,
};

export default App;
