import React, { useEffect } from 'react'
import './upload.css';
import { useState,useContext } from 'react';
import {db} from '../../firebase';
import {collection} from '../../firebase/firestore';
import { addDoc} from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@mui/material';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import SideBar from '../../Admin/SideBar';
import Topbar from '../../Admin/Topbar';
export default function Upload() {
  const storage = getStorage();
  const {currentUser} = useContext(AuthContext);
  const [file,setFile] = useState("");
  const [documentdetails,setDocument] = useState({
    title:"",
    categoryName:"",
  });
 useEffect(()=>{
  const uploaddocument=()=>{
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage,name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        <CircularProgress value={85}/>
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
       console.log(error);
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
    }
  file && uploaddocument();
 },[file])

const handleInput=(e)=>{
const id = e.target.id;
const value = e.target.value;
setDocument({...documentdetails,[id]:value})
}

const handleSubmit =(e)=>{
    e.preventDefault();
     const newcollectionRef = collection(db,'category',currentUser.Uid,documentdetails.categoryName)
     await addDoc(newcollectionRef,{
     title:documentdetails.title,
     uploaedBy:currentUser.name,
     category:documentdetails.categoryName,
     });
    setDocument({title:"",categoryName:""});
}
  return (
    <div className='upload-container'>
      <div className='sidebar-container'>
      <SideBar/>
      </div>
    <div className='upload'>
      <Topbar/>
    <span><h1 className='uplaodtitle'>Upload Document</h1></span>
    <form onSubmit={handleSubmit} className="uploadForm">
    <div className='uploaddoc'>
    <label htmlFor="title">Title</label>
    <input type="text" id="title" value ={documentdetails.title} onChange={handleInput} placeholder="TitleName"/>
    </div>
    <div className='uploaddoc'>
      <label htmlFor="filepath">File</label>
    <input id="filepath" style={{fontSize:'1.1em',color:'red'}} onChange={(e)=>setFile(e.target.files[0])} type="file"/>
    </div>
    <div className='uploaddoc'>
    <label htmlFor="categoryName">Category</label>
    <input id="categoryName" type="text" value={documentdetails.categoryName} onChange={handleInput} placeholder="CategoryName"/>
    </div>
    {/* <div className='uploaddoc'>
        <label htmlFor="categoryoption" >Document Category</label>
        <select id="cateogoryoption" className='categoryselect' onChange={handleInput} name="active">
            <option value="reports"></option> 
        </select>
    </div> */}
    <button className='upload-btn'>Upload</button>
    </form>
    </div>
    </div>
  )
}
