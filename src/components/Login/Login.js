import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from '../../firebase';

export default function Login() {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = event => {
    // Prevent default refresh behavior
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
        history.push('/');
    })
    .catch(error => alert(error.message));
  }

  const register = event => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {

    })
    .catch(error => alert(error.message));
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Login"
        />
      </Link>

      <div className="login_container">
          <h1>Sign In</h1>
          <form>
              <h5>E-mail</h5>
              <input value={email} onChange={event => setEmail(event.target.value)} type="text"/>
              <h5>Password</h5>
              <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
              <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
          </form>
          <p>
          By continuing, you agree to Amazon's&nbsp;
          <a href="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=200545940">Conditions of Use</a>
          &nbsp;and&nbsp;
          <a href="/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&amp;nodeId=200534380">Privacy Notice</a>
          .
          </p>
          <Link to="/register">
            <button onClick={register} type="submit" className="login_register_button">Create your Amazon Account</button>
          </Link>
      </div>
    </div>
  );
}
