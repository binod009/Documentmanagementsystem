import React from 'react'
import Document from '../../Pages/Document/Document';
import Upload from '../../Pages/Upload/Upload';
import UserDashboard from '../../UserDashBoard/UserDashboard';
import Login from '../../Login/Login';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

export default function UserRoutes() {
  return (
<>
<Router>
 <Routes>
  <Route path="/user/">
   <Route path="Login" element={<Login/>}/>
<Route index element={<UserDashboard/>}/>
<Route path="documents">
  <Route index element={<Document/>}/>
  <Route path="user/document/upload" element={<Upload/>}/> 
</Route>
</Route>


   </Routes>
</Router>
</> 
  )
}
