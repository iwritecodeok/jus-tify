import React from "react";
import "../Styles/Login.scss";
import Logo from "../Assets/justify_logo.png";
import { loginUrl } from "../Utils/spotify.js";
function Login() {
  return (
    <div className="login">
      {/* logo */}
      <img src={Logo} />
      {/* email */}
      <form>
        <h5>your email with Spotify</h5>
        <input type="email" />
        {/* password */}
        <h5>your Spotify password</h5>
        <input type="password" />
        {/* Login with Spotify button */}
      </form>
      <a href={loginUrl} className="login__button">
        log in with jus-tify
      </a>
      <p>by continuing you are agreeing with just-ify's terms of use.</p>
    </div>
  );
}

export default Login;
