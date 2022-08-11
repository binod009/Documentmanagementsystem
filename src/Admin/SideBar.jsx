import React from 'react'
import './sidebar.css';
import TopBar from '../Admin/Topbar';
import {CircularProgress,Backdrop} from '@mui/material';
import { useContext } from 'react';
import SidebarMenu from './SidebarMenu';
import {UploadFile,LineStyle,Add,PersonOutline,InsertDriveFile,Category,AdminPanelSettings,Logout} from '@mui/icons-material';
import SidebarListItem from './SidebarListItem';
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
export default function SideBar() {
  const {dispatch} = useContext(AuthContext)
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
<Link className='Link' to='/Admin'>
     <SidebarListItem listname="Home">
         <LineStyle className="sidebarIcon"/>
        </SidebarListItem>
</Link>
  </SidebarMenu>
 <SidebarMenu title="Quick Menu">
      <Link className='Link' to='/Admin/user'>
     <SidebarListItem listname="User">
         <PersonOutline className="sidebarIcon"/>
        </SidebarListItem>
        </Link>
    <Link className='Link' to="/Admin/documents">
     <SidebarListItem listname="Document">
        <InsertDriveFile className='sidebarIcon'/>
    </SidebarListItem>
    </Link>

    <Link className='Link' to="/Admin/createcategory">
     <SidebarListItem listname="Create Category" >
         <Category className="sidebarIcon"/>
         </SidebarListItem>
   </Link>
   </SidebarMenu>


   <SidebarMenu title="User">
   <Link className='Link' to='/Admin/Viewuser'>
     <SidebarListItem listname="View">
         <PersonOutline className="sidebarIcon"/>
        </SidebarListItem>
        </Link>
        <Link className='Link' to="/Admin/createuser">
     <SidebarListItem listname="CreateUser">
        <Add className='sidebarIcon'/>
    </SidebarListItem>
    </Link>
   </SidebarMenu>

   <SidebarMenu title="Document">
   <Link className='Link' to="/Admin/Viewdocuments">
     <SidebarListItem listname="View">
         <InsertDriveFile className="sidebarIcon"/>
        </SidebarListItem>
        </Link>
   <Link className='Link' to="/Admin/uploaddoc">
     <SidebarListItem listname="Upload">
   <UploadFile className="sidebarIcon"/>
    </SidebarListItem>
    </Link>
   </SidebarMenu>
   <SidebarMenu title="profile">
     <Link className='Link' to="/Admin/profile">
       <SidebarListItem listname="Admin">
         <AdminPanelSettings className='sidebarIcon'/>
       </SidebarListItem>
     </Link>
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
