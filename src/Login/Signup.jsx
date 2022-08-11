import React, { useState,useRef,useEffect } from "react";
import "./signup.css";
import logo from '../../src/logo11.png';
import { TextField, Button, Card, CardContent, Grid, Typography,Avatar,Box} from "@mui/material";
import {AuthContext} from '../context/AuthContext';
import Errors from "../Errors/Errors";
import { createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';
import {db} from '../firebase';
import {doc, setDoc} from "firebase/firestore";
import {Link, useNavigate} from 'react-router-dom';
export default function Signup() {
  const navigate = useNavigate();
  const [register,setRegister]  = useState({
    firstname:'',
    lastname:'',
    phone:null,
    email:'',
    address:'',
    password:'',
  });
  const [isSubmit,setIsSubmit] = useState(false);
  const[formErrors,setFormErrors]= useState(register);

const handleInput =(e)=>{
e.preventDefault();
const id = e.target.id;
const value = e.target.value;
setRegister({...register,[id]:value});
}

const validate = (values)=>{
const errors={};
const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i ;
const specialChars = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
if(!values.firstname){
  errors.firstname="Enter your FirstName";
}if(!values.lastname){
  errors.lastname="Enter your LastName"
}if(!values.email){
  errors.email = "Enter your email";
}else if(!regex.test(values.email)){
  errors.email="Enter a valid Email";
}
if(!values.address){
  errors.address="Enter your address"
}
if(values.phone===null){
errors.phone="Enter your phonenumber"
}if(!values.password){
  errors.password="Enter your Password";
}else if(values.password.length<=4){
  errors.password="Password must be more than 4 Character";
}else if(!specialChars.test(values.password)){
  errors.password = "Password must container special character @$!*"
}
return errors;
}

const handleSubmit=(e)=>{
  e.preventDefault();
  setIsSubmit(true);
  setFormErrors(validate(register));
}

useEffect(() => {
if(Object.keys(formErrors).length === 0 && isSubmit){
 createUserWithEmailAndPassword(auth, register.email, register.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setDoc(doc(db,"admin",user.uid),{
      id:user.uid,
      name:register.firstname,
      lastname:register.lastname,
      email:register.email,
      phone:register.phone,
      address:register.address,
    });
     navigate('/Admin/Login');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
},[formErrors]);

  return (
    <>
      <Card style={{ backgroundColor:"#eee" ,maxWidth:580,height:370 ,margin:"6rem auto",padding:"10px 15px"}}>
          <CardContent >
        <Box display="flex" alignitems="center" justifyContent="center"><Avatar  align="center" src={logo} sx={{width:45,height:45}}></Avatar></Box>
            <Typography style={{fontSize:"14px",fontWeight:"700",color:"darkblue",margin:"0.5rem"}}align="center" color="#444" gutterBottom variant="h5">SIGN UP</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Firstname"
                  fullWidth
                  id="firstname"
                  size="small"
                  onChange={handleInput}
                  value={register.firstname}
                  variant="outlined"
                ></TextField>
                <Errors message={formErrors.firstname}/>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  id="lastname"
                  label="lastname"
                  onChange={handleInput}
                  fullWidth
                  size="small"
                  value={register.lastname}
                  variant="outlined"
                  
                ></TextField>
                <Errors message={formErrors.lastname}/>

              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                id="address"
                onChange={handleInput}
                  label="Address"
                  fullWidth
                  value={register.address}
                  size="small"
                  variant="outlined"
                 
                ></TextField>
                <Errors message={formErrors.address}/>

              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                 id="phone"
                  type="number"
                  value={register.phone}
                  onChange={handleInput}
                  label="Phone"
                  fullWidth
                  size="small"
                  variant="outlined"
                 
                ></TextField>
                <Errors message={formErrors.phone}/>

              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                id="email"
                  type="text"
                  value={register.email}
                  label="Email"
                  onChange={handleInput}
                  fullWidth
                  size="small"
                  variant="outlined"      
                ></TextField>
                <Errors message={formErrors.email}/>

              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                type="password"
                id="password"
                value={register.password}
                  label="Password"
                  fullWidth
                  onChange={handleInput}
                  size="small"
                  variant="outlined"
                    autoComplete="false"
                ></TextField>
                <Errors message={formErrors.password}/>

              </Grid>
              <Grid xs={12}item>

                <Button
                style={{backgroundColor:"darkblue"}}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  SignUp
                </Button>
            
              </Grid>
              <Grid container spacing={0} justifyContent="center" item>
                
                <Typography>Already Have an Acccount ?<span style={{color:"red",marginLeft:"5px"}}>Log In</span></Typography>
              
              </Grid>
            </Grid>
            </form>
          </CardContent>
        </Card>

    </>
  );
}
