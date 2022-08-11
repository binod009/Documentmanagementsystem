import React from 'react'
import './user.css';
import{db} from '../../firebase';
import{addDoc, doc,getDoc, updateDoc} from "firebase/firestore";
import {useParams} from 'react-router-dom';
import SideBar from '../../Admin/SideBar';
import TopBar from '../../Admin/Topbar';
import {getStorage,ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage';
import {PermIdentity,MyLocationOutlined,Male,AlternateEmail,WorkOutline, PhoneAndroidOutlined, PublishOutlined} from '@mui/icons-material';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Progress from '../../Loader/Progress';
export default function User() {
const {userid} = useParams();
const [file,setFile] = useState("");
const [open,setOpen]= useState(false);
const [issubmit,setIsSubmit] = useState(false);
let newurl ="";
const [edituser,setEditUser]=useState({
    fullname:"",
    post:"",
    email:"",
    phone:"",
    address:"",
    img:"",
    gender:"",
});
const navigate = useNavigate();
// const update = async(newurl)=>{
// if(newurl){
//   console.log(userid);
//   const userRef = doc(db,"users",userid);
//   await updateDoc(userRef,{
//     ...edituser
//   });
//   setEditUser({fullname:"",phone:"",address:"",phone:"",img:"",age:""});
// }else{
  
//   }
// }

const handleSubmit = async(e,newurl)=>{
e.preventDefault();
if(newurl){
  const userRef = doc(db,"users",userid);
  await updateDoc(userRef,{
    ...edituser,img:newurl
  });
  setEditUser({fullname:"",phone:"",address:"",phone:"",img:"",age:""});
  navigate('/Admin/user');
}else{
const userRef = doc(db,"users",userid)
    await updateDoc(userRef,{
      ...edituser
  })
  setEditUser({fullname:"",phone:"",address:"",phone:"",img:"",age:""});
  navigate('/Admin/user');
}
}
useEffect(()=>{
const upload=()=>{
  setOpen(!open);
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
        
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
           newurl = downloadURL;
        });
        setOpen(false);
})
}
file && upload();
},[file])
useEffect(()=>{
const changeimage=()=>{
setEditUser({...edituser,img:URL.createObjectURL(file)});
}
file && changeimage();
},[file]);


useEffect(()=>{
   userid && getSingleuser();
  },[userid])


const getSingleuser=async()=>{
const docRef = doc(db,'users',userid);
const snapshot = await getDoc(docRef);
if(snapshot.exists()){
  console.log(snapshot.data())
    setEditUser({...snapshot.data()}); 
   }
}
const handleInput=(e)=>{
const id = e.target.id;
const value = e.target.value;
setEditUser({...edituser,[id]:value});
}

  return (
    <div className='user'> 
    <div className='sidebar-container'>
    <SideBar/>
    </div>
<div className='userContainer'>
 <TopBar/>
 <div className='userTitleContainer'>
            <h1 className='userTitle'>Edit User</h1>
        </div>
<div className='edituser-container'>
   <div className='userShow'>
  <div className='userShowTop'>
    <img className="userShowImg" src={edituser.img} alt="profile" />
    <div className='userShowTopTitle'>
        <span className='usershowUsername'>{edituser.fullname}</span>
        <span className='usershowPost'>{edituser.post}</span>
        <span className='usershowDepartment'>MarketingDepartment</span>
    </div>
</div>
<div className='userShowBottom'>
    <span className='usershowTitle'>Account Details</span>
    <div className="userShowInfo">
    <PermIdentity className="userShowIcon"/>
    <span className='userShowInfoTitle'>{edituser.fullname}</span>
    </div>
    <div className="userShowInfo">
    <WorkOutline className="userShowIcon"/>
    <span className='userShowInfoTitle'>{edituser.post}</span>
    </div>
    <div className="userShowInfo">
    <Male className="userShowIcon"/>
    <span className='userShowInfoTitle'>{edituser.gender}</span>
    </div>
    <span className='usershowTitle'>{edituser.phone}</span>
    <div className="userShowInfo">
    <MyLocationOutlined className="userShowIcon"/>
    <span className='userShowInfoTitle'>{edituser.address}</span>
    </div>
    <div className="userShowInfo">
    <AlternateEmail className="userShowIcon"/>
    <span className='userShowInfoTitle'>{edituser.email}</span>
    </div>
    <div className="userShowInfo">
    <PhoneAndroidOutlined className="userShowIcon"/>
    <span className='userShowInfoTitle'>{edituser.phone}</span>
    </div>
    
</div>


 </div>
 <div className='userUpdate'>
 <span className="userUpdateTitle">Edit</span>     
    <form onSubmit={handleSubmit} className='userUpdateForm'>
        <div className='userUpdateLeft'>
            <div className='userUpdateItem'>
                <label>FullName</label>
                <input 
                id="fullname"
                type="text"
                value={edituser.fullname}
                placeholder='binod khatri'
                className='userUpdateInfo'
                onChange={handleInput}
                />
            </div>
            <div className='userUpdateItem'>
                <label>Post</label>
                <input
                id="post"
                type="text"
                value={edituser.post}
                placeholder='Manager'
                onChange={handleInput}
                className='userUpdateInfo'
                />
            </div>
            <div className='userUpdateItem'>
                <label>DepartMent</label>
                <input 
                id="departmnet"
                type="text"
                onChange={handleInput}
                placeholder='Marketing'
                className='userUpdateInfo'
                />
            </div>
            <div className='userUpdateItem'>
                <label>Email</label>
                <input 
                id="email"
                type="text"
                value={edituser.email}
                onChange={handleInput}
                placeholder='binod921@gmail.com'
                className='userUpdateInfo'
                />
            </div>
            <div className='userUpdateItem'>
                <label>Phone</label>
                <input 
                id="phone"
                type="text"
                value={edituser.phone}
                onChange={handleInput}
                placeholder='+977 9817362533'
                className='userUpdateInfo'
                />
            </div>
            <div className='userUpdateItem'>
                <label>Address</label>
                <input 
                type="text"
                id="address"
                placeholder='Bhadrapur-10'
                value={edituser.address}
                onChange={handleInput}
                className='userUpdateInfo'
                />
            </div>
            <div className='userUpdateItem'>
                <label>Gender</label>
                <select id="gender"  onChange={handleInput}>
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
               </select>
            </div>
        
        </div>
     
        <div className='userUpdateRight'>
            <div className='userUpdateUpload'>
            <img src={edituser.img} alt="profile" className="userUpdateImg" />
            <label htmlFor="file"><PublishOutlined className="userUpdateIcon"/></label>
            <input type='file' id='file'onChange={e=>setFile(e.target.files[0])}  style={{display:'none'}}/>
        </div>
        <button className='userUpdateButton'>Update</button>
</div>
</form>  
</div>
</div>
</div>
{open && <Progress open={open}/>}
</div>
  
  )
}
