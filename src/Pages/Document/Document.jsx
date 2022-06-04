import React from 'react';
import './document.css';
import Documenttable from './Documenttable';
import { documentdata } from '../../dummydata';
import SideBar from '../../Admin/SideBar';
import TopBar from '../../Admin/Topbar';
export  default class Document extends React.Component {
state={filteritem:[]};
handelfilter=(e)=>{
   this.result = documentdata.filter((docdata)=>docdata.title.toLowerCase().includes(e.target.value))
   this.setState({filteritem:this.result});
}

renderconditional(){
    if(this.state.filteritem.length<=0){
        return documentdata.map((item,index)=>{return(<Documenttable docdata={item} key={index}/>)})
    }else{
    return this.state.filteritem.map((item,index)=>{return(<Documenttable docdata={item} key={index}/>)})
    }
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
        <input type="text"  className='inputfilter' onChange={this.handelfilter} placeholder='Filter....'/>
        </div> 
       
       { 
       this.renderconditional()
        }
       </div>
    </div>
   
    )
  }
}
