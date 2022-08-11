import React, { useState } from 'react'
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {db} from "../../firebase";
import { deleteDoc,doc } from 'firebase/firestore';
import { DeleteOutline } from '@mui/icons-material';
import Viewer from './Viewer';
export default function Documenttable(props) {
  const columns = [
        { field: 'id', headerName: 'Id', width: 140, },
        {field:'title',headerName:'FileName',width:160},
        { field: 'uploadedby', headerName: 'UploadedBy', width: 150 },
        { field: 'uploaddate', headerName: 'UploadDate', width: 150 },
        { field: 'file', headerName: 'File', width: 150,renderCell:(params)=>{return(
          <>
         {params.row.view && <Viewer doc={params.row.view}/>}
         </>
        )}},
        { field:'action', headerName:'Action',renderCell: (params)=>{
            return(
                <div className='Documentedit'>
                <DeleteOutline className="docsdelete" onClick={()=>handleDelete(params.row.id)}/>
             </div>
            )}
        }
      ];
const [data,setData] = useState(props.docdata.rows);

const handleDelete=async(id)=>{
  try{
    await deleteDoc(doc(db, "category", id));
   }catch(err){
     console.log(err);
   }
    setData (data.filter((item)=>item.id!==id));
}
return (
    <>
      <h1 className='documentcategoryTitle'>{props.docdata.categoryName}</h1>
            <div style={{ height: 400, width: '98%' }}>
              <DataGrid
                rows={data}
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[2]}
                checkboxSelection
                
              />
              
             </div>
    
   </>
)  
}

