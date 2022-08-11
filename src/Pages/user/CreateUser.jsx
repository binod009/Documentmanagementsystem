import React, { useEffect } from 'react'
import './createuser.css'
import SideBar from '../../Admin/SideBar';
import {TextField,Alert,MenuItem,Select,InputLabel,FormControl} from '@mui/material';
import Topbar from '../../Admin/Topbar';
import { DriveFolderUpload, } from '@mui/icons-material';
import { useState } from 'react';
import Progress from '../../Loader/Progress';
import Errors from '../../Errors/Errors';
import styled from  'styled-components';
import {db,auth,storage} from "../../firebase";
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
    const [file,setFile] = useState(null);
    const [open, setOpen] = useState(false);
    const [userdata,setUser] = useState({
      fullname:"",
      phone:"",
      password:"",
      email:"",
      address:"",
      post:"",
      gender:""
    });
    const [formErrors,setFormErrors] = useState(userdata);
    const [isSubmit,setIsSubmit] = useState(false)
    const [err,setErr] = useState(false);
    const [per,setPer] = useState(null);
    const[alert,setAlert]= useState(false);
// useEffect(() => {
// const uploadfile =()=>{
// }
// file && uploadfile();
// },[file]);

const validate=(values,profile)=>{
  const errors={};
  const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const num  =/^[0-9]{10}$/;
  Object.values(values).every(x=>{
    if(!x){
      setAlert(true);
      errors.alert="Active";
    }else{
      if(!regex.test(values.email)){
         errors.email=true
     }
     if(!num.test(values.phone)){
      errors.phone=true
     }
     if(!values.post){
      errors.post=true;
     }
if(!values.gender){
  errors.gender=true;
}
     if(!values.address){
      errors.address=true;
     }
     if(!profile){
       errors.file ="Please select a Image";
     }
    }
  })
  return errors;
}
 const handleAdd =(e)=>{
         e.preventDefault();
         setIsSubmit(true);
         setFormErrors(validate(userdata,file));    
     }
     const handleinput=(e)=>{
         const id = e.target.id;
         const value=e.target.value;
         setUser({...userdata,[id]:value});
     }
     const handlegender=(e)=>{
       setUser((prev)=>({...prev,gender:e.target.value}));
}

useEffect(()=>{
if(Object.keys(formErrors).length===0 && isSubmit){
const name = new Date().getTime() + file.name;
const storageRef = ref(storage,name);
const uploadTask = uploadBytesResumable(storageRef, file);
setOpen(!open);
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
      
      const givefirebase = async ()=> {
        try{
        const res = await createUserWithEmailAndPassword(
            auth,
            userdata.email,
            userdata.password
        )
        await setDoc(doc(db,"users",res.user.uid) ,{
          ...userdata,img:downloadURL,
         });
          
       setUser({email:"",password:"",fullname:"",address:"",post:"",phone:"",gender:""});
       setFile("");
       setAlert(false);
       setOpen(false);
       }
      catch(error){
      console.log(error);
        } 
      }
      givefirebase();
    });
    
  }
)

}
},[formErrors])

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
            {alert && <Alert severity="error">Field Input Empty </Alert>}
                <Form onSubmit={handleAdd}>
                <div className="formInput">
                <label htmlFor='file'>
                Image:<DriveFolderUpload className="icon"/>
                </label>
                 <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
                 <Errors message={formErrors.file}/>
                 </div> 
              
                    <div className="formInput">
                    <TextField size="small" fullWidth  type="text" id="fullname" value={userdata.fullname} name='fullname'  onChange={handleinput} label="fullname" variant="standard" autoComplete="false"/>
                    </div>
                    <div className="formInput">
                    <TextField size="small" fullWidth type="text"  id="email" name='email' value={userdata.email} onChange={handleinput} label="Email" variant="standard" autoComplete="false" error={formErrors.email?formErrors.email:false} />
                    { err && <span className='error' style={{color:'red',fontSize:'12px'}}>email already exist !</span>}
                    
                    </div>
                    <div className="formInput">
                    <TextField size="small" fullWidth id="address"  type="text" name='address' value={userdata.address}  onChange={handleinput}  label="Address" variant="standard" autoComplete="false"/>
                    </div>
                    <div className="formInput">
                    <TextField size="small" fullWidth id="phone" type="number"  name='phone' value={userdata.phone} onChange={handleinput} label="Phone" variant="standard" error={formErrors.phone?formErrors.phone:false}autoComplete="false"/>
                    </div>                    
                    <div className="formInput">
                    <TextField size="small" fullWidth id="post" type="text" name='post' value={userdata.post} onChange={handleinput} label="Post" variant="standard" error={formErrors.post?formErrors.post:false} autoComplete="false"/>
                    </div>
                    <div className="formInput">
                    <TextField size="small" fullWidth id="password" type="password" name='password' value={userdata.password} onChange={handleinput} label="password" variant="standard" autoComplete="false"/>
                    </div>
                    <div className="formInput">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={userdata.gender}
          onChange={handlegender}
          label="Gender"
          error={formErrors.gender?formErrors.gender:false}
        >
           <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>

        </Select>
      </FormControl>
                    </div>
                   
                    <div className="formInput">
                     <Button type="submit">Create</Button>
                    </div>
                </Form>
                {open && <Progress open={open}/>}
            </div>
        </div>
        </div>
        
    </div>
  )
}
