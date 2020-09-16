import React from "react";
import "../Styles/SideBar.scss";
import Logo from "../Assets/justify_logo.png";
import SideBarOption from "./SidebarOptions";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import LibraryMusicRoundedIcon from "@material-ui/icons/LibraryMusicRounded";
import { useStateValue } from "../Context/StateProvider";

function SideBar() {
    const[{ playlists }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <img src={Logo} className="sidebar__logo" />
      <SideBarOption Icon={HomeRoundedIcon} title="Home" />
      <SideBarOption Icon={SearchRoundedIcon} title="Search" />
      <SideBarOption Icon={LibraryMusicRoundedIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PlayLists</strong>
      <hr />
        {
            playlists?.items?.map(playlist =>(
                <SideBarOption title={playlist.name}/>
            ))}
    </div>
  );
}

export default SideBar;
