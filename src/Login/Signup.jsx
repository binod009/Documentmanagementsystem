import React, { useState,useRef } from "react";
import "./signup.css";
import logo from '../../src/logo11.png';
import {Link} from 'react-router-dom';
import { TextField, Button, Card, CardContent, Grid, Typography,Avatar,Box} from "@mui/material";
import {AuthContext} from '../context/AuthContext';

export default function () {

  return (
    <>
        <Card style={{ backgroundColor:"#eee" ,maxWidth:550,height:350 ,margin:"6rem auto",padding:"10px 15px"}}>
          <CardContent >
        <Box display="flex" alignitems="center" justifyContent="center"><Avatar  align="center" src={logo} sx={{width:45,height:45}}></Avatar></Box>
            <Typography style={{fontSize:"14px",fontWeight:"700",color:"darkblue",margin:"0.5rem"}}align="center" color="#444" gutterBottom variant="h5">SIGN UP</Typography>
          <form >
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="FullName"
                  fullWidth
                  size="small"
                  variant="outlined"
                 
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Username"
                  fullWidth
                  size="small"
                  variant="outlined"
                  
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Address"
                  fullWidth
                  size="small"
                  variant="outlined"
                 
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  type="number"
                  label="Phone"
                  fullWidth
                  size="small"
                  variant="outlined"
                 
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  type="email"
                  label="Email"
                  fullWidth
                  size="small"
                  variant="outlined"
             
          
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Password"
                  fullWidth
                  size="small"
                  variant="outlined"
               
             
                ></TextField>
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
