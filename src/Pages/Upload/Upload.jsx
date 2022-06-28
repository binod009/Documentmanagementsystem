import React, { useEffect } from 'react'
import './upload.css';
import { useState,useContext } from 'react';
import {collection,addDoc} from "firebase/firestore";
import {db} from '../../firebase';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress,LinearProgress } from '@mui/material';
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import SideBar from '../../Admin/SideBar';
import Topbar from '../../Admin/Topbar';
import Errors from '../../Errors/Errors';
import { async } from '@firebase/util';
export default function Upload() {
  const {currentUser} = useContext(AuthContext);
  const [file,setFile] = useState("");
  const [per,setPer]= useState(null);
  const [documentdetails,setDocument] = useState({
    title:"",
    categoryName:"",
  });
const [formErrors,setFormErrors] = useState(documentdetails);
const [isSubmit,setIsSubmit] = useState(false);
//  useEffect(()=>{
//   file && uploaddocument();
//  },[file])
 const uploaddocument=()=>{
  const storage = getStorage();
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
      setPer(progress);
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
      setPer(null);
      alert("insdie call back");
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        const date = new Date().toLocaleDateString();
        let localdata = JSON.parse(localStorage.getItem('currentuser'));
        addDoc(collection(db,'category'),{
         ...documentdetails,uploaddate:date,view:downloadURL,fullname:localdata.name
           });
           //  const newcollectionRef = collection(db,'category',currentUser.uid,documentdetails.categoryName)
           //  await addDoc(newcollectionRef,{
           //  title:documentdetails.title,
           //  uploaedBy:currentUser.uid,
           //  category:documentdetails.categoryName,
           //  });
           const fileid =document.getElementById("filepath");
           setDocument({title:"",categoryName:"",file:null});
           fileid.value=null;
         });
    }
  );
}
// 

const handleInput=(e)=>{
const id = e.target.id;
const value = e.target.value;
setDocument({...documentdetails,[id]:value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(validate(documentdetails,file))
}
const validate=(values,filecheck)=>{
const errors={};
if(!values.title){
  errors.title="Enter the title";
}if(!values.categoryName){
  errors.categoryName="Enter category name";
}
if(filecheck===""){
  errors.file="Please Select your file";
}
return errors;
}
useEffect(()=>{
  if(Object.keys(formErrors).length === 0 && isSubmit){
    uploaddocument();//start uploading process 
  }
},[formErrors]);
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
    <Errors message={formErrors.title}/>
    <div className='uploaddoc'>
      <label htmlFor="filepath">File</label>
    <input id="filepath" style={{fontSize:'1.1em',color:'red'}}  onChange={(e)=>setFile(e.target.files[0])} type="file"/>
    { per!=null && <span style={{marginTop:"5px"}}><LinearProgress variant="determinate" value={per} /></span>}
    </div>
    <Errors message={formErrors.file}/>
    <div className='uploaddoc'>
    <label htmlFor="categoryName">Category</label>
    <input id="categoryName" type="text" value={documentdetails.categoryName} onChange={handleInput} placeholder="CategoryName"/>
    </div>
    <Errors message={formErrors.categoryName}/>
    {/* <div className='uploaddoc'>
        <label htmlFor="categoryoption" >Document Category</label>
        <select id="cateogoryoption" className='categoryselect' onChange={handleInput} name="active">
            <option value="reports"></option> 
        </select>
    </div> */}
 
    <button disabled={per!=null && per<100} className='upload-btn'>Upload</button>
    </form>
    </div>
    </div>
  )
}
