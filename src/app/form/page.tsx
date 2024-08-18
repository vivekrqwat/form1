"use client";
import React, { useState } from 'react'
import{AppBar, Box, Button, Grid, TextField, Toolbar, Typography} from "@mui/material"
import { SxProps, Theme } from '@mui/system';
import Footer from '../footer/page';


const Form:React.FC=()=> {
  const style: SxProps<Theme>={
    background:"#219ebc"
  } 
  const width:SxProps<Theme>={
    width:"80%"
  }
  interface Data{
    name:string,
    email:string,
    date:string
  }
  const defaultdata={
name:"",
email:"",
date:""
  }
  //destructurisation of array 
  const[data,setdata]=useState<Data>(defaultdata)
  const[t,setT]=useState<Boolean>(false)
  const onvalue=(e:React.ChangeEvent<HTMLTextAreaElement| HTMLInputElement>)=>{
   
setdata({...data,[e.target.name]:e.target.value})
console.log(e,"t")
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //preventing reload of page
    // console.log('Form submitted:', data);
    setT(!t)
  
  };  
  console.log("sam",data)
  return (
    <div>
     
      <AppBar position='static' sx={style}>
        <Toolbar> MYAPP</Toolbar>
      </AppBar>
      <Box display={"flex"} mb={2} mt={2} >
      <Typography variant='h3'> {t?
      `hello  ${data.name} your details have been noticed`
      :"ABOUT ME USER DETAILS FORM"}</Typography>
        </Box>
        {
        t?<>
        <Typography>THANKYOU {data.name} for submiting the form</Typography>
        </>:<form onSubmit={handleSubmit} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} height={"360px"} >
      <Grid item xs={6}  height={"10%"} >
      <TextField sx={width} placeholder='Firstname'
      onChange={onvalue} name='name'
      >ggg</TextField>
      </Grid>
   
    <Grid item xs={6}  height={"10%"} >
      <TextField sx={width}placeholder='Middlename'>ggg</TextField>
    </Grid>
    <Grid item xs={6}  height={"10%"} >
      <TextField sx={width} placeholder='lastname'>ggg</TextField>
    </Grid>
    <Grid item xs={6}  height={"10%"}>
      <TextField sx={width}placeholder='Phone'>ggg</TextField>
    </Grid>
    <Grid item xs={6}  height={"10%"}>
      <TextField sx={width}placeholder='SSN'>ggg</TextField>
    </Grid>
    <Grid item xs={6}  height={"10%"}>
      <TextField sx={width}placeholder='Email'>ggg</TextField>
    </Grid>
    <Grid item xs={12}> <TextField sx={width} placeholder='Country'>ggg</TextField></Grid>

      </Grid>
      <Button type='submit'  fullWidth variant='contained'>SUBMIT</Button>
      </form>}
      <h1></h1>
      <Box height={"35vh"} display={"flex"} alignItems={"end"}>
        
      <Footer></Footer>
      </Box>
     
    </div>
  )
}
export default Form