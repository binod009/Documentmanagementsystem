import React from 'react';
import './userdashboard.css';
import Featuredinfo from '../featuredinfo/Featuredinfo';
import TopBar from '../Admin/Topbar';
import SideBar from '../Admin/SideBar';
import '../App.css';
import User from '../Pages/user/User';
import Document from '../Pages/Document/Document';
import UserRequest from '../Pages/user/UserRequest';
import UserList from '../Pages/userlist/UserList';
import Upload from '../Pages/Upload/Upload';
import UserSidebar from './UserSidebar';
import CreateCategory from '../Pages/CreateCategory/CreateCategory';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { FileCopy,CategoryOutlined } from '@material-ui/icons';
import CategoryList from '../Category/CategoryList';

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
        
]
export default function UserDashboard() {
  return (
<>
    <Router>
    <div className='grid-container'>
      <div className='grid-nav'>
        <TopBar/>
      </div>
      <div className='grid-sidebar'><UserSidebar/></div>
      <div className='grid-content'>
      <Routes>
        <Route path="/" element={<><Featuredinfo data={data}/><CategoryList/></>}>
        </Route>
        <Route path="/user/dashboard" element={<><Featuredinfo data={data}/><CategoryList/></>}>
        </Route>
  <Route path="/userdashboard/document" element={<Document/>}> 
  </Route>
  <Route path="/userdashboard/createcategory" element={<CreateCategory/>}> 
  </Route>
  <Route path="/userdashboard/uploaddoc" element={<Upload/>}> 
  </Route>
  </Routes>
 
   </div>
    
    </div>
    </Router>
    </>
  )
}
