import React, { useState,useContext } from 'react'
import './createcategory.css'
import SideBar from '../../Admin/SideBar';
import Topbar from '../../Admin/Topbar';
import {db} from '../../firebase';
import {AuthContext} from '../../context/AuthContext';
import { collection} from "firebase/firestore";
import { addDoc,doc } from 'firebase/firestore';
export default function CreateCategory() {
const [category,setCategory] = useState("");
const {currentUser} = useContext(AuthContext)
 const handleSubmit = async(e)=>{
    e.preventDefault();
    const newcollectionRef = collection(db,'category',currentUser.uid,category);
    await addDoc(newcollectionRef,null);
    alert("category created");

  }
  return (
    <div className='category-container'>
      <div className='sidebar-container'>
     <SideBar/>
      </div>
    <div className='createcategory'>  
    <Topbar/>
    <form onSubmit={handleSubmit} className='create-categoryform'>
        <div className='categoryform'>
        <label htmlFor='categoryname'>CategoryName</label>
        <input type="text" id="categoryname" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='CategoryName'/>
        </div>
        <div className='categoryform'>
        <label htmlFor='active'>Category Type</label>
        <select  className='typeselect' name="active" id="active">
        <option value="private">Private</option>
        <option value= "public">Public</option>    
        </select> 
        </div>
        <button className='category-btn' type='submit'>Create</button>
        </form>    
    </div>
    </div>
  )
}
