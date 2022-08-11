import React from 'react'
import Home from '../../Pages/Home';
import UserRequest from '../../Pages/user/UserRequest';
import Upload from '../../Pages/Upload/Upload';
import { useContext } from 'react';
import UserList from '../../Pages/userlist/UserList';
import CreateCategory from '../../Pages/CreateCategory/CreateCategory';
import CreateUser from '../../Pages/user/CreateUser';
import Login from '../../Login/Login';
import User from '../../Pages/user/User';
import Document from '../../Pages/Document/Document';
import { AuthContext } from '../../context/AuthContext';
import Signup from '../../Login/Signup';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
export default function AdminRoutes() {
const {currentUser} = useContext(AuthContext);
 const RequireAuth = ({children}) => {
   return currentUser ? children : <Navigate to="/Admin/Login"/>;
 };
  return (
    <>
    <Router>
 <Routes>
  <Route path="/Admin/">
   <Route path="Login" element={<Login/>}/>
   <Route path="Signup" element={<Signup/>}/>
<Route index element={
<RequireAuth>
<Home/>
</RequireAuth>}
/>

<Route path="user">
  <Route index element={<RequireAuth><UserList/></RequireAuth>}/>
  <Route path="/Admin/userrequest" element={
  <RequireAuth> <UserRequest/></RequireAuth>}
  />
<Route path=":userid" element={<RequireAuth><User/></RequireAuth>}/>
</Route>
<Route path="documents">
  <Route index element={<RequireAuth><Document/></RequireAuth>}/>
  <Route path="Admin/uploaddoc" element={<RequireAuth><Upload/></RequireAuth>}/> 
</Route>
<Route path="createcategory">
  <Route index element={<RequireAuth><CreateCategory/></RequireAuth>}/> 
</Route>
<Route path="viewuser">
  <Route index element={<RequireAuth><UserList/></RequireAuth>}/> 
</Route>
<Route path="uploaddoc">
  <Route index element={<RequireAuth><Upload/></RequireAuth>}/> 
</Route>
<Route path="createuser">
  <Route index element={<RequireAuth><CreateUser/></RequireAuth>}/> 
</Route>

</Route>
   </Routes>
</Router>
</> 

  )
}
