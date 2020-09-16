import React from "react";
import "../Styles/Footer.scss";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";
import Colors from "../Styles/_Colors.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Hit single</h4>
          <p>Cool Artist</p>
        </div>
      </div>

      <div className="footer__mid">
        <ShuffleIcon className="footer__blue" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineOutlinedIcon
          fontSize="large"
          className="footer__icon"
        />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__blue" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
