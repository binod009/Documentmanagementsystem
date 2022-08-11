import React from 'react';
import Topbar from './Admin/Topbar';
import Featuredinfo from './featuredinfo/Featuredinfo';
import Home from './Pages/Home';
import SideBar from './Admin/SideBar';
import User from './Pages/user/User';
import Document from '../src/Pages/Document/Document';
import UserRequest from './Pages/user/UserRequest';
import Upload from './Pages/Upload/Upload';
import LoginSignup from './Login/LoginSignup';
import Login from './Login/Login';
import Signup from './Login/Signup';
import { FileCopy,Person,CategoryOutlined } from '@material-ui/icons';
import { useContext } from 'react';
import AdminRoutes from './Admin/Routes/AdminRoutes';
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
import SidebarMenu from './Admin/SidebarMenu';
import {UploadFile,LineStyle,Add,PersonOutline,InsertDriveFile,Category,AdminPanelSettings,Logout} from '@mui/icons-material';
import SidebarListItem from './Admin/SidebarListItem';
import UserRoutes from './Admin/Routes/UserRoutes';

function App (){
  const {dispatch} = useContext(AuthContext)
  const logout =()=>{
   dispatch({type:"LOGOUT",payload:{currentUser:"",backdrop:true}})
   localStorage.clear();
  }

return (
<AdminRoutes/>
)


/*<Router>
 <Routes>
  <Route path="/Admin/">
   <Route path="Login" element={<Login/>}/>
   <Route path="Signup" element={<Signup/>}/>
<Route index element={
<RequireAuth>
<Home/>
</RequireAuth>}/>
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
</> */


  }

export default App;
