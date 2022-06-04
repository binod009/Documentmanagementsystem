import React from 'react'
import './sidebar.css'
export default function SidebarListItem(props) {
  return (

<li className="sidebarListItem">
    {props.children}
    {props.listname}
</li>

  )
}
