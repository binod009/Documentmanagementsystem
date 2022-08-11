import React from 'react';
import './document.css';
import Documenttable from './Documenttable';
import { documentdata } from '../../dummydata';
import SideBar from '../../Admin/SideBar';
import Alert from '@mui/material/Alert';
import {AlertTitle,TextField,LinearProgress,Box} from '@mui/material';
import TopBar from '../../Admin/Topbar';
import{db} from '../../firebase';
import {collection,onSnapshot } from "firebase/firestore";
export  default class Document extends React.Component {
state={filteritem:[],query:"",loading:false}; 
componentDidMount = async()=>{
  this.setState({loading:true});
//gives realtime data update and changes in database
const unsub = onSnapshot(collection(db, "category"), (snapShot) => {
  const list= [];
  snapShot.docs.forEach((doc)=>{
    list.push({...doc.data(),id:doc.id});
  });
  const finaldata = Object.values(list.reduce((a, { categoryName, ...rest }) => {
        a[categoryName] = a[categoryName] || { categoryName, rows: [] }
        a[categoryName].rows.push(rest)
         return a
       }, {}))
       
  this.setState({filteritem:finaldata});
  this.setState({loading:false});
},(error)=>{
  console.log(error);
}
);
return()=>{
  unsub();
};
}
//    const querySnapshot = await getDocs(collection(db,'category'));
//    const querydata=[];
//   querySnapshot.forEach((doc)=>{
//     querydata.push({...doc.data(),id:doc.id});
//   });
//    const finaldata = Object.values(querydata.reduce((a, { title, ...rest }) => {
//     a[title] = a[title] || { title, rows: [] }
//     a[title].rows.push(rest)
//     return a
//   }, {}))
//   this.setState({filteritem:finaldata});
//   console.log(finaldata);
// }

renderContent(){
return this.state.loading ? 
<LinearProgress/> :
 this.state.filteritem.filter((item)=>item.categoryName.toLowerCase().includes(this.state.query)).map((item,index)=>{return <Documenttable docdata={item} key={index}/>})

}
render(){
  return (
    <div className='document-container'>
      <div className='sidebar-container'>
      <SideBar/>
      </div>
        <div className='document'>
        <TopBar/>
         <div className='filterContainer'> 
        <TextField fullWidth onChange={(e)=>this.setState({query:e.target.value})} label="Search" id="fullWidth" />
        {/* <input type="text"  className='inputfilter' onChange={(e)=>this.setState({query:e.target.value})} placeholder='Filter....'/> */}
        </div>  
       {this.renderContent()}
       </div>
    </div>
   
    )
  }
}
