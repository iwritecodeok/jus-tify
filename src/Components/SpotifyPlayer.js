import React from "react";
import "../Styles/SpotifyPlayer.scss";
import SpotifyBody from "./SpotifyBody";
import SideBar from "./SideBar";
import Footer from "./Footer.js";
function SpotifyPlayer({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar spotify={spotify}/>
        <SpotifyBody spotify={spotify} />
      </div>
      {/* footer */}
      <Footer spotify={spotify}/>
    </div>
  );
}

export default SpotifyPlayer;
