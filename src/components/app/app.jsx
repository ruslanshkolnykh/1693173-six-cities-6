import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import Favourites from "../favorites/favourites";
import Room from "../room/room";
import NotFound from "../not-found/not-found";
import {useSelector} from "react-redux";
import browserHistory from "../../browser-history";
import PrivateRoute from "../private-route/private-route";

const App = () => {
  const {offers, reviews} = useSelector((state) => state);

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <PrivateRoute exact path="/"
          render={() => {
            return (
              <MainPage

              />
            );
          }}
        />
        {/* <Route exact path="/">*/}
        {/*  <MainPage></MainPage>*/}
        {/* </Route>*/}
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


export default App;
