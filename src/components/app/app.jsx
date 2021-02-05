import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from "prop-types";

const App = (props) => {
  const {itemAmount} = props;

  return (
    <MainPage itemAmount={itemAmount}/>
  );
};

App.propTypes = {
  itemAmount: PropTypes.number.isRequired,
};

export default App;
