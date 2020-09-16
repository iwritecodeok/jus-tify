import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../Styles/Body.scss";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../Context/StateProvider";

function Header() {
    const [{user}, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs, or Genres" type="text" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
