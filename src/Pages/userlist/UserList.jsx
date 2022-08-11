import React from 'react'
import './userlist.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, Panorama } from '@mui/icons-material';
import { Userrows } from '../../dummydata';
import {db} from "../../firebase";
import {Link} from "react-router-dom";
import SideBar from '../../Admin/SideBar';
import TopBar from '../../Admin/Topbar';
import {collection ,getDocs,deleteDoc,doc,onSnapshot} from "firebase/firestore";
import CircularProgress from '@mui/material/CircularProgress';  
export default class UserList extends React.Component {
  state={userdata:[],loading:true};
 columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'fullname', headerName: 'User', width: 190, renderCell: (params)=>{
            return(
                <div className='userlistuser'>
                <img className='userlistimage' src={params.row.hasOwnProperty('img')? params.row.img :""} alt="profile"/>
                <div style={{color:'blue',fontSize:'1.2em'}}>{params.row.fullname}</div>
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 240},
        {
          field: 'post',
          headerName: 'Post',
          width: 170,
        },
        {
          field: 'address',
          headerName: 'Address',
          width: 160,
        },
        {
          field: 'phone',
          headerName: 'phone',
          width: 160,
        },
        {
            field:'Action',
            headerName:'Action',
            widht:200,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={"/Admin/user/"+ params.row.id}>
                    <button className='userlistedit'>Edit</button>
                    </Link>
                    <DeleteOutline className="userlistdelete" onClick={()=>this.handelDelete(params.row.id)} />
                    </>
                )
        
            }
    
        },
    
      ];


 handelDelete= async (id)=>{
   try{
    await deleteDoc(doc(db, "users", id));
   }catch(err){
     console.log(err);
   }
    this.setState({userdata:this.state.userdata.filter((item)=>item.id!== id)})
 }
 componentDidMount = async ()=>{
//    let list=[];
//   try {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     querySnapshot.forEach((doc) => {
//     list.push({...doc.data(),id:doc.id})
//       });
//     this.setState({userdata:list})
//    }catch(err){
// console.log(err);
const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
  let list= [];
  console.log(snapShot.docs);
  snapShot.docs.forEach((doc)=>{
    list.push({...doc.data(),id:doc.id});
  });
  this.setState({userdata:list});
  this.setState({loading:false});
},(error)=>{
  console.log(error);
}
);
return()=>{
  unsub();
};
}

render(){
  return (

<div className='userlist'>
  <div className='sidebar-container'>
  <SideBar/>
  </div>
  <div className='list-container'>
    <TopBar/>
  <h1 className='userlist-title'>UserList</h1>
  <div style={{height:580}}>
  
<DataGrid
        rows={this.state.userdata}
        columns={this.columns}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        sortingMode='client'
        loading={this.state.loading}
              />
      
      </div>
      </div>
    </div>
  )
}
}


