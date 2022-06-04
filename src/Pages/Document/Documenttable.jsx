import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';

const Container=(props)=>{
    return <div className='documenttable'>
       
        {props.children}
    </div>
}

export default function Documenttable(props) {
  const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'FullName', headerName: 'Full name', width: 140 },
        { field: 'uploaddate', headerName: 'UploadDate', width: 140 },
        { field: 'file', headerName: 'file', width: 140 },
        { field:'action', headerName:'Action',renderCell: (params)=>{
            return(
                <div className='Documentedit'>
                <DeleteOutline className="docsdelete" onClick={()=>handleDelete(params.row.id)}/>
             </div>
            )}
        }
      ];

const [data,setData] = useState(props.docdata.rows);
const handleDelete=(id)=>{
    setData (data.filter((item)=>item.id!==id));
}
return (
    
    <>
            <h1 className='documentcategoryTitle'>{props.docdata.title}</h1>
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

