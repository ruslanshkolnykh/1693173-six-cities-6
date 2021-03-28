import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/api-actions';
import {NameSpace} from "../../redux/root-reducer";
import Header from "../header/header";

const Login = () => {
  const st = useSelector((state) => state);

  const loginRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (<div className="page page--gray page--login">
    <Header />

    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action=""
            onSubmit={handleSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                ref={loginRef}
                className="login__input form__input"
                type="text"
                name="name"
                id="name"
                data-testid="login"
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                ref={passwordRef}
                className="login__input form__input"
                type="text"
                name="password"
                id="password"
                data-testid="password"
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="/">
              <span>{st[NameSpace.APP].city.name}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  </div>);
};

export default Login;
