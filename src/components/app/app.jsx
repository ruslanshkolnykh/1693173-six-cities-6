import React, {useEffect} from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import Favourites from "../favorites/favourites";
import Room from "../room/room";
import NotFound from "../not-found/not-found";
import {useDispatch, useSelector} from "react-redux";
import browserHistory from "../../browser-history";
import PrivateRoute from "../private-route/private-route";
import {fetchOffersList} from "../../redux/api-actions";
import LoadingScreen from "../loading/loading";
import MainEmpty from "../main-empty/main-empty";

const App = () => {
  const {offers, reviews, isDataLoaded} = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchOffersList());
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          {offers.length > 0 ? <MainPage /> : <MainEmpty />}
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/favourites"
          render={() => {
            return (<Favourites offers={offers.filter((offer)=>offer.is_favorite)} />);
          }}
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


export default App;
