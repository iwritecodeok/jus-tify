import React from "react";
import "../Styles/SpotifyPlayer.scss";
import SpotifyBody from "./SpotifyBody";
import SideBar from "./SideBar";
import Footer from "./Footer.js";
function SpotifyPlayer({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <SpotifyBody spotify={spotify} />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default SpotifyPlayer;
