import React from 'react'
import './login.css';
import logo from '../../src/logo11.png';
import { useState,useContext } from 'react';
import {TextField,Button} from '@mui/material';
import{signInWithEmailAndPassword} from "firebase/auth";
import {Link, useNavigate} from 'react-router-dom';
import {auth} from '../firebase';
import {AuthContext} from '../context/AuthContext';

export default function Login() {

  const [error,setError] = useState(false);
  const [UserLogin,setUserLogin] = useState({
    email: "" ,
    password: ""
  });
const navigate = useNavigate();

const {dispatch} = useContext(AuthContext)

const handleInput =(e)=>{
const name = e.target.name;
const value= e.target.value;
setUserLogin({...UserLogin, [name]:value});
}
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, UserLogin.email,UserLogin.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type:"LOGIN", payload:user})
    navigate("/");
  })
  .catch((error) => {
    setError(true);
    // ..
  });
  }
  return (
<div className='login-container'>
  <form className='formcontainer' onSubmit={handleSubmit} >
    <div className='logocontainer'>
      <img className="logo" src={logo} alt="logo"/>
    </div>
      <div className='inputfield'>
      <TextField fullWidth type="text" name='email' id="email"value={UserLogin.email} label="Username" variant="outlined" onChange={handleInput} autoComplete="false"/>
      </div>
      <div className='inputfield'>
      <TextField fullWidth type="password" name='password' id="password" value={UserLogin.password} label="Password" variant="outlined" onChange={handleInput} autoComplete="false" />
      </div>
      <div className='rememberme'>
        <input type="checkbox" id="rememberpassword" />
          <label htmlFor="rememberpassword">Remember Me</label>
      </div>  
     {error && <span style={{fontSize:"12px",color:"red",marginTop:"10px"}}>Wrong Email & Password !</span>}
      <div className='btn-container'>
      <Button type="submit" fullWidth variant="contained">Login</Button>
      </div> 
      <div className='fp-container'>
         <p className='forget'>Forget Password......?</p>
      </div> 
      <div className="Signup">
        <Link to="/Signup" className="Link">
          <p>Need an account?<span style={{color:"#20629C",marginLeft:"3px"}}>Sign Up</span></p>
        </Link>
      </div>
  </form>
    </div>
  )
}
