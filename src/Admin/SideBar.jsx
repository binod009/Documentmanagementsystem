import React from 'react'
import './sidebar.css';
import TopBar from '../Admin/Topbar';
import SidebarMenu from './SidebarMenu';
import {UploadFile,LineStyle,Add,PersonOutline,InsertDriveFile,Category,AdminPanelSettings,Logout} from '@mui/icons-material';
import SidebarListItem from './SidebarListItem';
import {Link} from 'react-router-dom';
export default function SideBar() {
  return (
   <>
<div className='sidebar'>
<div className='top'>
    <span className="top-title">DMS</span>
    </div> 
<div className='sidebarwrapper'>
   <SidebarMenu title="DashBoard">
<Link className='Link' to='/'>
     <SidebarListItem listname="Home">
         <LineStyle className="sidebarIcon"/>
        </SidebarListItem>
</Link>
  </SidebarMenu>
 <SidebarMenu title="Quick Menu">
      <Link className='Link' to='/user'>
     <SidebarListItem listname="User">
         <PersonOutline className="sidebarIcon"/>
        </SidebarListItem>
        </Link>
    <Link className='Link' to="/documents">
     <SidebarListItem listname="Document">
        <InsertDriveFile className='sidebarIcon'/>
    </SidebarListItem>
    </Link>

    <Link className='Link' to="/createcategory">
     <SidebarListItem listname="Create Category" >
         <Category className="sidebarIcon"/>
         </SidebarListItem>
   </Link>
   </SidebarMenu>


   <SidebarMenu title="User">
   <Link className='Link' to='/Viewuser'>
     <SidebarListItem listname="View">
         <PersonOutline className="sidebarIcon"/>
        </SidebarListItem>
        </Link>
        <Link className='Link' to="/createuser">
     <SidebarListItem listname="CreateUser">
        <Add className='sidebarIcon'/>
    </SidebarListItem>
    </Link>
   </SidebarMenu>

   <SidebarMenu title="Document">
   <Link className='Link' to="/Viewdocuments">
     <SidebarListItem listname="View">
         <InsertDriveFile className="sidebarIcon"/>
        </SidebarListItem>
        </Link>
   <Link className='Link' to="/uploaddoc">
     <SidebarListItem listname="Upload">
   <UploadFile className="sidebarIcon"/>
    </SidebarListItem>
    </Link>
   </SidebarMenu>
   <SidebarMenu title="profile">
     <Link className='Link' to="/profile">
       <SidebarListItem listname="Admin">
         <AdminPanelSettings className='sidebarIcon'/>
       </SidebarListItem>
     </Link>
     <Link className='Link' to="/logout">
       <SidebarListItem listname="Logout">
         <Logout className='sidebarIcon'/>
       </SidebarListItem>
     </Link>
   </SidebarMenu>
   
   </div>
   </div>
   </>
  )
}
