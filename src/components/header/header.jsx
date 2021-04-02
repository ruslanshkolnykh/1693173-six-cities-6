import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NameSpace} from "../../redux/root-reducer";
import {Link} from "react-router-dom";
import {logout} from "../../redux/api-actions";

const Header = () => {
  const user = useSelector((state) => state[NameSpace.USER]);

  const dispatch = useDispatch();

  const handleOnClick = (evt) => {
    evt.preventDefault();

    dispatch(logout());
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favourites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user.email}</span>
                  </Link>
                </li>
                <li>
                  <a href="#" onClick={handleOnClick}>
                    <img src="img/logout.png" width="20px" height="20px"/>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
