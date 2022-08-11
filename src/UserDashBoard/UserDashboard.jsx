import React from 'react';
import './userdashboard.css';
import Featuredinfo from '../featuredinfo/Featuredinfo';
import UserSidebar from '../UserDashBoard/UserSidebar';
import Topbar from '../Admin/Topbar';
import '../App.css';
import { FileCopy,CategoryOutlined } from '@material-ui/icons';

const data =[
    {
    title:"Documents",
    total:5,
    icon:<FileCopy/>
},
{
    
    title:"Category",
    total:10,
    icon:<CategoryOutlined/>
}
        
];
export default function UserDashboard() {
  return (
<>
<div className="Home">
    <div className="sidebar-container">
<UserSidebar/>
  </div>
    <div className="homecontainer">
      <Topbar/>
      <div className="widgets">
      <Featuredinfo data={data}/>
      </div>
    </div>
  </div>
</>
  )
}
