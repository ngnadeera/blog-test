import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export const LogInRequest = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentURL = location.pathname;

  return (
    <div style={{display:'flex', gap:6, alignItems:'center'}}>
        <p>Please get logged in to add a comment <Button  onClick={() => {sessionStorage.setItem("currentUrl",currentURL); navigate('/SignIn')}}>LogIn</Button> </p>
        <p> | </p>
        <p>Don't have an account <Button onClick={() => {navigate('/SignUp')}}>SignUp</Button> </p>
    </div>
  )
}
