import React, { useState } from "react";

function Manu() {
    const [sidebarActive, setSidebarActive] = useState([false]);
    const toggleSidebar = () => {
      setSidebarActive(!sidebarActive);
    };
  return (
    <div className="sidebar-menu-icons" onClick={toggleSidebar}>
    <svg width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M62.5 221.7V246.1C62.5 284 93.2 314.7 131.1 314.7H868.8C906.7 314.7 937.4 284 937.4 246.1V221.7C937.4 183.8 906.7 153.1 868.8 153.1H131.1C93.2 153.1 62.5 183.8 62.5 221.7ZM131.1 581.1H868.8C906.7 581.1 937.4 550.4 937.4 512.5V488C937.4 450.1 906.7 419.4 868.8 419.4H131.1C93.2 419.4 62.5 450.1 62.5 488V512.4C62.5 550.4 93.2 581.1 131.1 581.1ZM131.1 847.4H868.8C906.7 847.4 937.4 816.7 937.4 778.8V754.4C937.4 716.5 906.7 685.8 868.8 685.8H131.1C93.2 685.8 62.5 716.5 62.5 754.4V778.8C62.5 816.7 93.2 847.4 131.1 847.4Z" fill="#E03939"/>
</svg>

    </div>
  )
}

export default Manu