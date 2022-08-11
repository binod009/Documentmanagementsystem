import { DialogTitle,DialogContent,Dialog, makeStyles } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
export default function Viewer(props) {
  const [openPopup,setOpenPopup] = useState(false);
  const toggleShow = () =>setOpenPopup(!openPopup);
  
  return (
    <>
  <Button onClick={toggleShow}>View
</Button>
    <Dialog  tabIndex='-1' open={openPopup} maxWidth="md">
      <DialogTitle>
        <div style={{display:'flex'}}>
         <Typography variant="h6" style={{flexGrow:1}} component="div">Document Viewer</Typography>
         <Button onClick={toggleShow} style={{backgroundColor:'red',color:"white"}}>X</Button>
         </div>
      </DialogTitle>
     <DialogContent dividers>
      <Container>
      <iframe
      src={props.doc + "&embedded=true"}
        title="file"
        width="580px"
       height="550px"
    ></iframe>
      </Container>
     </DialogContent>
    </Dialog>
    </>
  )
}











































// import React from 'react'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// import { useState } from 'react';
// import { MDBBtn,
//       MDBModal,
//       MDBModalDialog,
//       MDBModalContent,
//       MDBModalHeader,
//       MDBModalTitle,
//       MDBModalBody,
//       MDBIcon,
//       MDBModalFooter,
//     } from 'mdb-react-ui-kit';
//     export default function Viewer(props) {
//       const [gridModal, setGridModal] = useState(false);
//       const toggleShow = () => setGridModal(!gridModal);
//       return (
//         <>
//          <MDBBtn onClick={toggleShow}tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
//          <MDBIcon far icon="eye" size="lg"/>
//       </MDBBtn>
//        {/* <MDBBtn onClick={toggleShow}floating tag='a'>View
//        <MDBIcon fas icon="eye" />
//     </MDBBtn> */}
//           {/* <MDBBtn onClick={toggleShow}>View</MDBBtn> */}
//           <MDBModal tabIndex='-1' show={gridModal} setShow={setGridModal}>
//             <MDBModalDialog>
//               <MDBModalContent>
//                 <MDBModalHeader>
//                   <MDBModalTitle>Grids in modals</MDBModalTitle>
//                   <MDBBtn
//                     type='button'
//                     className='btn-close'
//                     color='none'
//                     onClick={toggleShow}
//                   ></MDBBtn>
//                 </MDBModalHeader>
//                 <MDBModalBody>
                  
//             <iframe
//         src={props.doc + "&embedded=true"}
//         title="file"
//         width="95%"
//         height="550px"
//       ></iframe>
                
//                 </MDBModalBody>
//                 <MDBModalFooter>
//                 </MDBModalFooter>
//               </MDBModalContent>
//             </MDBModalDialog>
//           </MDBModal>
//         </>
//       );
//     }
