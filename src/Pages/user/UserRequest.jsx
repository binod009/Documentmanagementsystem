import React from 'react';
import './userrequest.css';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CancelIcon from '@mui/icons-material/Cancel';
import { makeStyles } from '@mui/styles';
import Sidebar from '../../Admin/SideBar';
import TopBar from '../../Admin/Topbar';
import{Avatar,Table,TableCell,TableContainer,TableHead,TableRow,TableBody,Paper} from '@mui/material';
import { hover } from '@testing-library/user-event/dist/hover';

function createData(Name,Address, Email, Profile,Phone,Post,Department) {
    return { Name, Address,Email, Profile, Phone, Post,Department };
  }
  
  const rows = [
    createData('Binodkhatri', 'Bhadrapur-10','khatribinod44@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','9817282165','Manager','Developers'),
    createData('Binodkhatri', 'Damak-4','zeebanbasnet23@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','9872637132','junior','Developers'),
    createData('Binodkhatri', 'Chandragadi-8','rohanraj12@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','9817263712','Junior','Developers'),
    createData('Binodkhatri', 'Biratamode-3','sumanbasnet44@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','9844234232','HD','Marketing'),
    createData('Binodkhatri', 'Kakarbhitta-1','dependrastha12@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','9816273723','Employee','Marketing'),
    createData('Binodkhatri', 'Dhulabaari-4','ramhari554@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','Senior','9817374631','Developers'),
    createData('Binodkhatri', 'Dhulabaari-4','ramhari554@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','Senior','9817374631','Developers'),
    createData('Binodkhatri', 'Dhulabaari-4','ramhari554@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','Senior','9817374631','Developers'),
    createData('Binodkhatri', 'Dhulabaari-4','ramhari554@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','Senior','9817374631','Developers'),
    createData('Binodkhatri', 'Dhulabaari-4','ramhari554@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','Senior','9817374631','Developers'),
    createData('Binodkhatri', 'Dhulabaari-4','ramhari554@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','Senior','9817374631','Developers'),
    createData('Binodkhatri', 'Dhulabaari-4','ramhari554@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','Senior','9817374631','Developers'),
    createData('Binodkhatri', 'Dhulabaari-4','ramhari554@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','Senior','9817374631','Developers'),
    createData('Binodkhatri', 'Dhulabaari-4','ramhari554@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','Senior','9817374631','Developers'),
    createData('Binodkhatri', 'Dhulabaari-4','ramhari554@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','Senior','9817374631','Developers'),
    createData('Binodkhatri', 'Dhulabaari-4','ramhari554@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','Senior','9817374631','Developers'),
    createData('Binodkhatri', 'Dhulabaari-4','ramhari554@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','Senior','9817374631','Developers'),
    createData('Binodkhatri', 'Dhulabaari-4','ramhari554@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','Senior','9817374631','Developers'),
    createData('Binodkhatri', 'Dhulabaari-4','ramhari554@gmial.com','https://cdn.pixabay.com/photo/2017/08/26/15/37/eye-2683414__340.jpg','Senior','9817374631','Developers'),
  ];

  const useStyles = makeStyles((theme)=>({
    table:{
        minWidth:550,
        overflowY: "scroll"
    },
    TableContainer:{
        borderRadius:10,
        margin:'10px 10px',
        maxWidth:'98%',
        height:'100%'
    },
   
    TableCell:{
       border:'1px solid orange',  
    },
    Action:{
      display:'flex',
      flexDirection:'row',
      width:'11rem',
      justifyContent:'space-between',
      alignItems:'center', 
    },
    Approve:{
     display:'flex',
     alignItems:'center',
     cursor:'pointer',
     padding:'0.1rem',
     justifyContent:'space-between',
     border:'1px solid green',
     borderRadius:'3rem',
     color:'green',
     transition:'0.5s ease',
     "&:hover":{
       backgroundColor:'green',
       color:'#fff',
     }
    },
    Decline:{
        display:'flex',
        color:'red',
        alignItems:'center',
        justifyContent:'space-between',
        cursor:'pointer', 
        padding:'0.1rem',
        border:'1px solid red',
        borderRadius:'3rem',
        transition:'0.5s ease',
        "&:hover":{
            backgroundColor:'red',
            color:'#fff',
        }   
    },
   
  }));

  
export default function UserRequest() {
    const classes = useStyles();
  return (
    <div className='request-container'>
      <div className='sidebar-container'>
      <Sidebar/>
      </div>
      <div className='userrequest'>
        <TopBar/>
        <h1 className='userrequest-title'>User Request</h1>
    <TableContainer className={classes.TableContainer} component={Paper}>
    <Table stickyHeader aria-label="sticky table" className={classes.table}>
      <TableHead >
        <TableRow  >
          <TableCell  style={{width:20}} align="center">Name</TableCell>
          <TableCell style={{width:20}} align="center">Address</TableCell>
          <TableCell style={{width:20}} align="center">Email</TableCell>
          <TableCell style={{width:20}} align="center">Profile</TableCell>
          <TableCell style={{width:20}}  align="center">Phone</TableCell>
          <TableCell style={{width:20}}  align="center">Post</TableCell>
          <TableCell style={{width:20}}  align="center">Department</TableCell>
          <TableCell style={{width:45}}  align="center">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row,index) => (
          <TableRow
            key={index}
          >
            <TableCell   align="center">{row.Name}</TableCell>
            <TableCell   align="center">{row.Address}</TableCell>
            <TableCell   align="center">{row.Email}</TableCell>
            <TableCell  align="center"><Avatar variant="rounded" alt="profile" src={row.Profile}/></TableCell>
            <TableCell  align="center">{row.Phone}</TableCell>
            <TableCell  align="center">{row.Post}</TableCell>
            <TableCell  align="center">{row.Department}</TableCell>
            <TableCell   align="center"><div className={classes.Action}><span className={classes.Approve}><HowToRegIcon className="requestListIconApprove"/>Approve</span>
            <span className={classes.Decline}><CancelIcon className="requestListIconDecline" />Decline</span>
            </div></TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
</div>
);
}
