import React from 'react'
import './usersidebar.css';
import { useContext } from 'react';
import {AuthContext} from '../context/AuthContext';
import SidebarMenu from '../Admin/SidebarMenu';
import SidebarListItem from '../Admin/SidebarListItem';
import {Link} from "react-router-dom";
import {UploadFile,LineStyle,InsertDriveFile,Category,Logout} from '@mui/icons-material';
export default function UserSidebar() {
const {dispatch} = useContext(AuthContext);
const logout =()=>{
dispatch({type:"LOGOUT",payload:{currentUser:"",backdrop:true}})
localStorage.clear();
}
  return (
        <>
<div className='sidebar'>
        <div className='top'>
      <span className="top-title">DMS</span>
      </div> 
  <div className='sidebarwrapper'>
     <SidebarMenu title="DashBoard">
     <Link className='Link' to='/user'> 
       <SidebarListItem listname="Home">
           <LineStyle className="sidebarIcon"/>
          </SidebarListItem>
          </Link>
         </SidebarMenu>
         <SidebarMenu title="Document">
 <Link className='Link' to='/user/document'> 
     <SidebarListItem listname="View">
         <InsertDriveFile className="sidebarIcon"/>
        </SidebarListItem>
 </Link>
 <Link className='Link' to='/user/document/upload'> 
    <SidebarListItem listname="Upload">
   <UploadFile className="sidebarIcon"/>
    </SidebarListItem>
    </Link>
    <Link className='Link' to='/user/Recent'> 
    <SidebarListItem listname="Recently Uploaded">
   <UploadFile className="sidebarIcon"/>
    </SidebarListItem>
    </Link>
   
   </SidebarMenu>
     <SidebarMenu title="profile">
     <Link className='Link' to="">
         <div className='logout-box'>
           <Logout className="sidebarIcon"/>
           <span onClick={logout} className="logout">Logout</span>
         </div>
         </Link>
     </SidebarMenu>
     </div>
     </div>
     </>
  )
}
