import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import Favourites from "../favorites/favourites";
import Room from "../room/room";
import NotFound from "../not-found/not-found";
import {useSelector} from "react-redux";

const App = () => {
  const {offers, reviews} = useSelector((state) => state);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
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

// App.propTypes = {
//   itemAmount: PropTypes.number.isRequired,
//   // offers: PropTypes.arrayOf(offersProps).isRequired,
//   reviews: PropTypes.array.isRequired,
//   // store: PropTypes.Object.is
// };

// const mapStateToProps = function (state) {
//   return {
//     itemsAmount: state.itemsAmount,
//     offers: state.offers,
//     city: state.city
//   };
// };

export default App;
