import * as React from "react";

import "./index.css";

const SideNavItem = ({
  name,
  onPress,
}) => {
  return (
    <div onClick={onPress} className="sideNavItemWrapper">
      <span class="material-icons">{name}</span>
    </div>
  )
}

export default SideNavItem;
