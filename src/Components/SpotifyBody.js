import React from "react";
import { useStateValue } from "../Context/StateProvider";
import "../Styles/Body.scss";
import Header from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function SpotifyBody({spotify}) {
    const[{discover_weekly }, dispatch] = useStateValue();

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
  return (
    <div className="body">
      <Header spotify={spotify}/>
      <div className="body__info">
          <img 
          src={discover_weekly?.images[0].url}
          alt=""/>
          <div className="body__infoText">
              <strong>PlayList</strong>
              <h2>Discover Weekly</h2>
              <p>{discover_weekly?.description}</p>
          </div>
          <div className="body__songs">
              <div className="body__icons">
                  <PlayCircleFilledIcon 
                  className="body__playButton"
                  onClick={playPlaylist}/>
                  <FavoriteIcon/>
                  <MoreHorizIcon fontSize='large'/>
              </div>
              {/* song list */}
              {discover_weekly?.tracks.items.map(item=>
                <SongRow track={item.track}/>)}
          </div>
      </div>
    </div>
  );
}

export default SpotifyBody;
