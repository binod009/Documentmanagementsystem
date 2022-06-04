import React from 'react'
import './user.css';
import SideBar from '../../Admin/SideBar';
import TopBar from '../../Admin/Topbar';
import {PermIdentity,MyLocationOutlined,Male,AlternateEmail,WorkOutline, PhoneAndroidOutlined, PublishOutlined} from '@mui/icons-material';
export default function User() {
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
    <img className="userShowImg" src="https://c4.wallpaperflare.com/wallpaper/260/928/20/6k-portrait-ariana-grande-wallpaper-preview.jpg" alt="" />
    <div className='userShowTopTitle'>
        <span className='usershowUsername'>Binod khatri</span>
        <span className='usershowPost'>Manager</span>
        <span className='usershowDepartment'>MarketingDepartment</span>
    </div>
</div>
<div className='userShowBottom'>
    <span className='usershowTitle'>Account Details</span>
    <div className="userShowInfo">
    <PermIdentity className="userShowIcon"/>
    <span className='userShowInfoTitle'>BinodKhatri</span>
    </div>
    <div className="userShowInfo">
    <WorkOutline className="userShowIcon"/>
    <span className='userShowInfoTitle'>Manager</span>
    </div>
    <div className="userShowInfo">
    <Male className="userShowIcon"/>
    <span className='userShowInfoTitle'>Male</span>
    </div>
    <span className='usershowTitle'>Contact Details</span>
    <div className="userShowInfo">
    <MyLocationOutlined className="userShowIcon"/>
    <span className='userShowInfoTitle'>Bhadrapur-10</span>
    </div>
    <div className="userShowInfo">
    <AlternateEmail className="userShowIcon"/>
    <span className='userShowInfoTitle'>binodkhatri22@gmail.com</span>
    </div>
    <div className="userShowInfo">
    <PhoneAndroidOutlined className="userShowIcon"/>
    <span className='userShowInfoTitle'> +977 9817637124</span>
    </div>
    
</div>


 </div>
 <div className='userUpdate'>
 <span className="userUpdateTitle">Edit</span>     
    <form className='userUpdateForm'>
        <div className='userUpdateLeft'>
            <div className='userUpdateItem'>

                <label>UserName</label>
                <input 
                type="text"
                placeholder='binod khatri'
                className='userUpdateInfo'
                />
            </div>
            <div className='userUpdateItem'>
                <label>FullName</label>
                <input 
                type="text"
                placeholder='binod khatri'
                className='userUpdateInfo'
                />
            </div>
            <div className='userUpdateItem'>
                <label>Post</label>
                <input 
                type="text"
                placeholder='Manager'
                className='userUpdateInfo'
                />
            </div>
            <div className='userUpdateItem'>
                <label>DepartMent</label>
                <input 
                type="text"
                placeholder='Marketing'
                className='userUpdateInfo'
                />
            </div>
            <div className='userUpdateItem'>
                <label>Email</label>
                <input 
                type="text"
                placeholder='binod921@gmail.com'
                className='userUpdateInfo'
                />
            </div>
            <div className='userUpdateItem'>
                <label>Phone</label>
                <input 
                type="text"
                placeholder='+977 9817362533'
                className='userUpdateInfo'
                />
            </div>
            <div className='userUpdateItem'>
                <label>Address</label>
                <input 
                type="text"
                placeholder='Bhadrapur-10'
                className='userUpdateInfo'
                />
            </div>
        
        </div>
     
        <div className='userUpdateRight'>
            <div className='userUpdateUpload'>
            <img src="https://c4.wallpaperflare.com/wallpaper/260/928/20/6k-portrait-ariana-grande-wallpaper-preview.jpg" alt="" className="userUpdateImg" />
            <label htmlFor="file"><PublishOutlined classsName="userUpdateIcon"/></label>
            <input type='file' id='file'style={{display:'none'}}/>
        </div>
        <button className='userUpdateButton'>Update</button>
</div>
</form>  
</div>
</div>
</div>
</div>
  )
}
