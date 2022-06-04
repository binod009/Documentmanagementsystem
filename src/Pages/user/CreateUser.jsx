import React, { useEffect } from 'react'
import './createuser.css'
import SideBar from '../../Admin/SideBar';
import {TextField} from '@mui/material';
import Topbar from '../../Admin/Topbar';
import { DriveFolderUpload } from '@mui/icons-material';
import { useState } from 'react';
import styled from  'styled-components';
import {db,auth,storage} from "../../firebase";
import Swal from 'sweetalert2';
import {doc, setDoc} from "firebase/firestore";
import { createUserWithEmailAndPassword} from 'firebase/auth';
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Button = styled.button`
    width: 150px;
    padding: 10px;
    border:none;
    background-color: blue;
    font-weight: bold;
    color: white;
    cursor:pointer; 
    &:disabled{
        background-color:rgb(91, 91, 156);
        cursor:not-allowed;
    }
        `;
  export const Form = styled.form`
      display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    align-items: center;
    gap:2rem;
        `;

export default function CreateUser(){
    const [file,setFile] = useState("");
    const [userdata,setUser] = useState({
      fullname:"",
      phone:"",
      password:"",
      email:"",
      address:"",
      post:""
    });
    const [err,setErr] = useState(false);
    const [per,setPer] = useState(null);

useEffect(() => {
const uploadfile =()=>{
const name = new Date().getTime() + file.name;
const storageRef = ref(storage,name);
console.log(storageRef);
const uploadTask = uploadBytesResumable(storageRef, file);
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setPer(progress);
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
      default:
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
     setUser((prev)=>({...prev,img:downloadURL}));
    });
  }
);

}
file && uploadfile();
},[file]);
     const handleAdd = async (e)=>{
       console.log(userdata);
         e.preventDefault();
         try{
             const res = await createUserWithEmailAndPassword(
                 auth,
                 userdata.email,
                 userdata.password
             )
           const docs = await setDoc(doc(db,"users",res.user.uid) ,{
                ...userdata,

              });
              console.log(docs);
            setUser({email:"",password:"",fullname:"",address:"",post:"",phone:""});
            }
         catch(error){
         setErr(true);
         const timer = setTimeout(()=>{
          setErr(false);
         },2000)
         return()=>clearTimeout(timer);
         } 
         
     }
     const handleinput=(e)=>{
         const id = e.target.id;
         const value=e.target.value;
         setUser({...userdata,[id]:value});
     }

  return (
    <div className='createuser'>
        <div className='sidebar-container'>
            <SideBar/>
        </div>
        <div className='createuser-formcontainer'>
            <Topbar/>
        <div className='titlebar'>
        <span className='title'><h1>Add New User</h1></span>
        </div>
        <div className='bottom'>
            <div className='left'>
                <img src={file ? URL.createObjectURL(file):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                alt="profileimage"/>
            </div>
            <div className='right'>
                <Form onSubmit={handleAdd}>
                <div className="formInput">
                <label htmlFor='file'>
                Image:<DriveFolderUpload className="icon"/>
                </label>
                 <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
                    </div>
                    <div className="formInput">
                    <TextField size="small" fullWidth  type="text" id="fullname" value={userdata.fullname} name='fullname'  onChange={handleinput} label="fullname" variant="standard" autoComplete="false"/>
                    </div>
                    <div className="formInput">
                    <TextField size="small" fullWidth type="text"  id="email" name='email' value={userdata.email} onChange={handleinput} label="Email" variant="standard" autoComplete="false"/>
                    { err && <span className='error' style={{color:'red',fontSize:'12px'}}>email already exist !</span>}
                    </div>
                    <div className="formInput">
                    <TextField size="small" fullWidth id="address"  type="text" name='address' value={userdata.address}  onChange={handleinput}  label="Address" variant="standard" autoComplete="false"/>
                    </div>
                    <div className="formInput">
                    <TextField size="small" fullWidth id="phone" type="number"  name='phone' value={userdata.phone} onChange={handleinput} label="Phone" variant="standard" autoComplete="false"/>
                    </div>
                    <div className="formInput">
                    <TextField size="small" fullWidth id="post" type="text" name='post' value={userdata.post} onChange={handleinput} label="Post" variant="standard" autoComplete="false"/>
                    </div>
                    <div className="formInput">
                    <TextField size="small" fullWidth id="password" type="password" name='password' value={userdata.password} onChange={handleinput} label="password" variant="standard" autoComplete="false"/>
                    </div>
                   
                    <div className="formInput">
                     <Button disabled={per!==null && per<100} type="submit">Create</Button>
                    </div>
                </Form>
            </div>
        </div>
        </div>
    </div>
  )
}
