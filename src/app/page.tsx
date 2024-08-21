"use client";

import { AppBar, Button, Toolbar, Typography } from "@mui/material";

import Link from "next/link";
import { TableFooter } from '@mui/material';
import { Box } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SxProps, Theme } from '@mui/system';//used for type define
import { useRouter } from "next/navigation";//used for navigation
import Footer from "./footer/page";

//functional component
export default function Home() {
  const toobar:SxProps<Theme>={
    display:"flex",
    justifyContent:"center",
    gap:"20px",
    alignItems:"center"
  }
  //userouter is a hook
const navigate=useRouter()

  return (
    <>
    <AppBar position="sticky">
      <Toolbar sx={toobar}>
  <Link href={"/form"} passHref 
> <Typography sx={{color:"white",textDecoration:"none"}}> FORM</Typography> </Link>
      
      <Typography>ABOUT US</Typography>
      </Toolbar>
    </AppBar>
 <Box >
 <Typography
  variant="h3"
  >WELCOME every ONe</Typography>
  <Button onClick={()=>{navigate.push("/form")}} endIcon={<ArrowBackIcon></ArrowBackIcon>}>getStarted</Button>

 </Box>
 <Box height={"80vh"} display={"flex"} alignItems={"end"}  >
 <Footer></Footer>
 </Box>
    </>
  );
}
