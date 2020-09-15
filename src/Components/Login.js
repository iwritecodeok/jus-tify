import React from "react";
import "../Styles/Login.scss";
import Logo from "../Assets/justify_logo.png";
import { loginUrl } from "../Utils/spotify.js";

function Login() {
  return (
    <div className="login">
      {/* logo */}
      <img src={Logo} />
      <a href={loginUrl} className="login__button">
        login with jus-tify
      </a>
      <p>by continuing you are agreeing with just-ify's terms of use.</p>
    </div>
  );
}

export default Login;
