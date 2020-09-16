import React from "react";
import "../Styles/Row.scss";

function SongRow({ track, playSong }) {
  console.log(track);
  return (
    <div className="song__row" onClick={() => playSong(track.id)}>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}-{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
