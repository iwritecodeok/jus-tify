import React from "react";
import "../Styles/SideBar.scss";

function SidebarOptions({ title, Icon }) {
  return (
    <div className="sidebar__option">
      {Icon && <Icon className="sidebarOption__icons" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOptions;
