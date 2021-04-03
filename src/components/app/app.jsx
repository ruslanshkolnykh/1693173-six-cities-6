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
import {fetchOffersList, fetchUserData} from "../../redux/api-actions";
import LoadingScreen from "../loading/loading";
import MainEmpty from "../main-empty/main-empty";
import {NameSpace} from "../../redux/root-reducer";

const App = () => {
  const {offers, isDataLoaded} = useSelector((state) => state[NameSpace.DATA]);
  const {reviews} = useSelector((state) => state[NameSpace.APP]);
  const user = useSelector((state) => state[NameSpace.USER]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchOffersList());
    }
  }, [isDataLoaded]);

  useEffect(() => {
    if (user.authorizationStatus === `AUTH`) {
      dispatch(fetchUserData());
    }
  }, [user.authorizationStatus === `AUTH`]);

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
          {user.authorizationStatus === `NO_AUTH` ? <Login /> : <MainPage />}
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
