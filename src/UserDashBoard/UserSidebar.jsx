import React from 'react'
import './usersidebar.css';
import SidebarMenu from '../Admin/SidebarMenu';
import SidebarListItem from '../Admin/SidebarListItem';
import {Link} from "react-router-dom";
import {UploadFile,LineStyle,InsertDriveFile,Category} from '@mui/icons-material';
export default function UserSidebar() {
  return (
    <div className='sidebar'>
<div className='sidebarwrapper'>
<SidebarMenu title="DashBoard">
<Link className='Link' to='/user/dashboard'>
     <SidebarListItem listname="Home">
         <LineStyle className="sidebarIcon"/>
        </SidebarListItem>
</Link>
</SidebarMenu>

<SidebarMenu title="Quick Menu">
<Link className='Link' to='/userdashboard/document'>
     <SidebarListItem listname="Document">
     <InsertDriveFile className='sidebarIcon'/>
        </SidebarListItem>
</Link>
<Link className='Link' to='/userdashboard/createcategory'>
     <SidebarListItem listname="CreateCategory">
     <Category className="sidebarIcon"/>
        </SidebarListItem>
</Link>
</SidebarMenu>
<SidebarMenu title="Document">
<Link className='Link' to='/userdashboard/documentview'>
     <SidebarListItem listname="View">
     <InsertDriveFile className="sidebarIcon"/>
        </SidebarListItem>
</Link>
<Link className='Link' to='/userdashboard/uploaddoc'>
     <SidebarListItem listname="Upload">
     <UploadFile className="sidebarIcon"/>
        </SidebarListItem>
</Link>
</SidebarMenu>
</div>
</div>
  )
}
