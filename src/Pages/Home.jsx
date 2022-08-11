import React from 'react'
import Featuredinfo from '../featuredinfo/Featuredinfo';
import TopBar from '../Admin/Topbar';
import SideBar from '../Admin/SideBar';
import '../App.css';
import CategoryList from '../Category/CategoryList';
import Chart from '../charts/Chart';
import './home.css';
import User from '../Pages/user/User';
import Document from '../Pages/Document/Document';
import UserRequest from '../Pages/user/UserRequest';
import UserList from '../Pages/userlist/UserList';
import { FileCopy,Person,CategoryOutlined } from '@material-ui/icons';
import Upload from '../Pages/Upload/Upload';
import { useEffect,useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import{db} from '../firebase';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,} from "react-router-dom";

export default function Home() {
const [count,setCount]= useState(0);

useEffect(()=>{
const retrive=async()=>{
  const colRef = collection(db, "category");
  const docsSnap = await getDocs(colRef);
  const list=[];
  docsSnap.forEach(doc => {
   list.push(doc.data());
  })
  setCount(list.length);
}
retrive();
},[])

  // doc.data() is never undefined for query doc snapshots

   
// doc.data() is never undefined for query doc snapshot

const data =[
    {
    title:"Documents",
    total:count,
    icon:<FileCopy/>
},
    {
    
    title:"Category",
    total:10,
    icon:<CategoryOutlined/>
},
{
  title:"Users",
  total:20,
  icon:<Person/>
}       
]
  return (
  <div className="Home">
    <div className="sidebar-container">
      <SideBar/>
    </div>
    <div className="homecontainer">
      <TopBar/>
      <div className="widgets">
      <Featuredinfo data={data}/>
      </div>
      <div className="category-container">
      <Chart/>
      </div>
    </div>
  </div>

     /* /* <Router>
    <div className='grid-container'>
      <div className='grid-nav'>
        <TopBar/>
      </div>
      <div className='grid-sidebar'><SideBar/></div>
      <div className='grid-content'>
      <Routes>
        <Route path="/" element={<><Featuredinfo data={data}/><CategoryList/></>}>
        </Route>
        <Route path="/dashboard" element={<><Featuredinfo data={data}/><CategoryList/></>}>
        </Route>
      <Route path="/user" element={<UserList/>}> 
  </Route>
  <Route path="/user/:userId" element={<User/>}> 
  </Route>
  <Route path="/Viewuser" element={<UserList/>}> 
  </Route>
  <Route path="/document" element={<Document/>}> 
  </Route>
  <Route path="/createcategory" element={<CreateCategory/>}> 
  </Route>
  <Route path="/request" element={<UserRequest/>}> 
  </Route>
  <Route path="/uploaddoc" element={<Upload/>}> 
  </Route>
  </Routes>
 
   </div>
    
    </div>
    </Router>  */

  )
}
