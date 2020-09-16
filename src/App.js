import React, { useEffect, useState } from "react";
import "./Styles/App.scss";
import Login from "./Components/Login";
import SpotifyPlayer from "./Components/SpotifyPlayer";
import { getTokenFromResponse } from "./Utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./Context/StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    //_token naming convention for  temp
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then(
        (playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists,
          });
        },
        [token, dispatch]
      );
      // https://open.spotify.com/playlist/3i9pc3yUDnN7jeBrF9cXEe?si=P5qAKe2MTLqxgZR9IjnU8Q
      spotify
        .getPlaylist("3i9pc3yUDnN7jeBrF9cXEe?si=P5qAKe2MTLqxgZR9IjnU8Q")
        .then((response) =>
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        );
    }
  }, []);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <SpotifyPlayer spotify={spotify} />}
    </div>
  );
}

export default App;
