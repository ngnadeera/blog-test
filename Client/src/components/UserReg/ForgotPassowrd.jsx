import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Await } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function ForgotPasswordDialog() {
  const [open, setOpen] = useState(false);
  const [sendRestLink,setSendResetLink] = useState(false);
  const [loading,setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {

    setOpen(false);
    setSendResetLink(false);
  };

  const handleReset = async () => {
    setLoading(true);
    await axios.post(`http://${process.env.REACT_APP_API_HOST}:1337/api/auth/forgot-password`, {
        email: "nadeeragayantha@gmail.com"
    }).then((res) => {
        console.log('User received an email', res)
    }).catch((error) => {
        console.log('An error occurred:', error.response);
    }).finally(() => {
        setLoading(false);
    })
    setSendResetLink(true);
  };

  return (
    <div>
      <p className='forgot-password-btn' onClick={handleClickOpen}>
        Forgot Password?
      </p>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="forgot-password-dialog-title"
        open={open}
        style={{overflow:'scroll'}}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="forgot-password-dialog-title">
          Forgot Password
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers style={{display:'scroll'}}>
          <Typography gutterBottom>
            {!sendRestLink ?  "Enter your email address to receive a password reset link." : "Resent Link has been sent"}
          </Typography>
          {/* Add form elements for the user to enter their email */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {!sendRestLink ? "Cancel" : "Ok"}
          </Button>
          {!sendRestLink && <Button onClick={handleReset}>
             {loading ? "Sending..." : "Send Reset Link"}
          </Button>}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
