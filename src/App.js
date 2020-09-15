import React, { useEffect, useState } from "react";
import "./Styles/App.scss";
import Login from "./Components/Login";
import { getTokenFromResponse } from "./Utils/spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "playing_funky_beats";
    const _token = hash.access_token;
    //_token naming convention for  temp
    if (_token) {
      setToken(_token);
    }
  }, []);

  return <div className="app">{token ? <h1>sick beats</h1> : <Login />}</div>;
}

export default App;
