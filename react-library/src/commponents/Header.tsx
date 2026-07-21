 import {Link,Outlet}from "react-router-dom"
 import { useContext } from "react"
 import { UserContext } from "../Context/userContext"
import { useNavigate } from "react-router-dom"
import AdbIcon from '@mui/icons-material/Adb';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import manager from "./Manager"

 const Header=()=>{
    const nav=useNavigate()
  const {user,setUser}=useContext(UserContext)
    return(
        <>
 
        <AppBar sx={{width:"2000px",height:"80px",textAlign:"center",backgroundColor:" rgb(97, 148, 168);"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <AdbIcon  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}/>
          <Typography
          variant="h4"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              fontSize:'25px'
             
            }}
          >
            welcome to library
          </Typography>
           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' ,fontSize:'25px'} }}>
      <Button sx={{my:2,color:'green',display:'block',fontSize:'25px'}}>{!user&&<Link to={"SignUp"}>הרשמה</Link>}</Button>
             <Button  sx={{ my: 2, color: 'green', display: 'block',fontSize:'25px' }}>{!user&&<Link to={"Login"}>כניסה </Link>}</Button>
             <Button  sx={{ my: 2, color: 'white', display: 'block'}}>{user&&<Link to={"BookDisplay"}>תצוגת ספרים</Link>}</Button>
      <Button  sx={{ my: 2, color: 'white', display: 'block' }}>{user?.status&&user&&<Link to={"Lend"}>ההשאלות שלי</Link>}</Button>
       {/* {user&&user?.status&&<Link to={"addBook"}>הוספת ספר</Link>} */}
            {/* <Button  sx={{ my: 2, color: 'white', display: 'block' }}>{!user?.status&&<Link to={"AddBook"}>תפריט ניהול</Link>}</Button> */}
               <Button  sx={{ my: 2, color: 'white', display: 'block' }}>{user&& (!user?.status )&&<Link to={"addBook"}>הוספת ספר</Link>}</Button>
      {/* <Outlet/> */}
      </Box>
         </Toolbar>
      </Container>
    </AppBar>

   
    </>
    )
 }
 export default Header
