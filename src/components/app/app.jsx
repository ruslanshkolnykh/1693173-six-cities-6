import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import Favourites from "../favorites/favourites";
import Room from "../room/room";
import NotFound from "../not-found/not-found";
import offersProps from "../props/offers.props";

// временный город
const tempCity = {
  "location": {
    "latitude": 52.370216,
    "longitude": 4.895168,
    "zoom": 10
  },
  "name": `Amsterdam`
};

const App = (props) => {
  const {itemAmount, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            itemAmount={itemAmount}
            offers={offers}
            city={tempCity}
          />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favourites"
          render={() => {
            return (<Favourites offers={offers.filter((offer)=>offer.is_favorite)} />);
          }
          }
        />
        <Route exact path="/offer/:id/"
          render={(properties) => {
            return (<Room offer={offers.filter((offer)=>offer.id === parseInt(properties.match.params.id, 10))[0]} reviews={reviews}/>);
          }
          }
        />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  itemAmount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offersProps).isRequired,
  reviews: PropTypes.array.isRequired,
};

export default App;
