 import React from "react";
export default function SidebarMenu(props) {
  return (
    <div className="sidebarMenu">
    <h3 className='sidebarTitle'>{props.title}</h3>
        <ul className='sidebarList'>
        {props.children}
        </ul>
    </div>
  )
}
