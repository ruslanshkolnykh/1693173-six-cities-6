import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import Favourites from "../favorites/favourites";
import Room from "../room/room";
import NotFound from "../not-found/not-found";

const App = (props) => {
  const {itemAmount, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            itemAmount={itemAmount}
            offers={offers}
          />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favourites">
          <Favourites
            offers={offers}
          />
        </Route>
        <Route exact path="/offer/:id">
          <Room reviews={reviews}/>
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
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default App;
