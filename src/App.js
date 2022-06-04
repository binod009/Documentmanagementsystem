import React from 'react';
import Topbar from './Admin/Topbar';
import Home from './Pages/Home';
import SideBar from './Admin/SideBar';
import User from './Pages/user/User';
import Document from '../src/Pages/Document/Document';
import UserRequest from './Pages/user/UserRequest';
import Upload from './Pages/Upload/Upload';
import LoginSignup from './Login/LoginSignup';
import Login from './Login/Login';
import Signup from './Login/Signup';
import { useContext } from 'react';
import {AuthContext} from './context/AuthContext';
import CreateCategory from './Pages/CreateCategory/CreateCategory';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from './Pages/userlist/UserList';
import UserDashboard from './UserDashBoard/UserDashboard';
import CreateUser from './Pages/user/CreateUser';

function App (){
const {currentUser} = useContext(AuthContext)
 const RequireAuth = ({children}) => {
   return currentUser ? children : <Navigate to="/Login"/>;
 };
 
return(
<>
<Router>
 <Routes>
   <Route path="/">
   <Route path="Login" element={<Login/>}/>
<Route index element={
<RequireAuth>
<Home/>
</RequireAuth>}/>
<Route path="user">
  <Route index element={<RequireAuth><UserList/></RequireAuth>}/>
  <Route path="userrequest" element={
    <RequireAuth> <UserRequest/></RequireAuth>

}
  
/>
  <Route path=":userid" element={<RequireAuth><User/></RequireAuth>}/>
</Route>
<Route path="documents">
  <Route index element={<RequireAuth><Document/></RequireAuth>}/>
  <Route path="uploaddoc" element={<RequireAuth><Upload/></RequireAuth>}/> 
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
);
  }

export default App;
