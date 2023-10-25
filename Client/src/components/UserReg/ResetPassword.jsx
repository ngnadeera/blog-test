import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar'; 
import MuiAlert from '@mui/material/Alert'; 
import LockResetIcon from '@mui/icons-material/LockReset';
import { useLocation } from "react-router-dom";

const defaultTheme = createTheme();

const validationSchema = yup.object({
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});



export const ResetPassword = () => {
    const navigate = useNavigate();
    const [ error, setError ] = useState('');
    const [success,setSuccess] = useState(false);
    const [open,setOpen] = useState(false);
    const [code,setCode] = useState('');
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const codeParam = searchParams.get("code").toString();
        if (codeParam) {
            setCode(codeParam);
        }
    }, [location.search]);

    console.log("code",code)
    const formik = useFormik({
      initialValues: {
        password: '',
        confirmPassword: '',
      },
      validationSchema,
      onSubmit: async(values) => {
        try {
          const data = {
            code: code,
            password: values.password,
            passwordConfirmation: values.password,
          };
          const res = await axios.post(`http://${process.env.REACT_APP_API_HOST}:1337/api/auth/reset-password`, data);
          setSuccess(true);
          setTimeout(() => navigate('/SignIn'), 2000);
          
        } catch (error) {
          if (error.response) {
            if (error.response.status === 400) {
              setError(error.response.data.error.message);
              setOpen(true);
  
            }
          } else {
            console.error('Request error:', error);
            setError(error.response.data.error.message);
            setOpen(true);
          }
        }
      },
    });
  
    return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#0d2841' }}>
              <LockResetIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{fontWeight:'500'}}>
              Reset Password
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}  sx={{mt: 2, mb: 2}}>

              <Grid item xs={12}>
                <Typography sx={{textAlign:'center'}}>
                Please enter your new password here, and make sure to use it during your next sign-in.
                </Typography>
              </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="password"
                    label="New Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="confirmPassword"
                    label="Confirm New Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                  />
                </Grid>
            
              </Grid>
              <button
                className='btn btn-signup'
                type="submit"
              >
                Reset
              </button>
              {error != '' ? <p className='error' style={{fontSize:'14px', fontWeight:'500'}}>{error}</p> : ''}
              <Grid container justifyContent="flex-end">
                <Grid item sx={{mb:4}}>
                  <Link href="/SignIn" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
  
        <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)}>
          <MuiAlert elevation={6} variant="filled" severity="success">
            Your Password has been Reset!
          </MuiAlert>
        </Snackbar>
  
        {/* Error Snackbar */}
        <Snackbar open={open} autoHideDuration={4000} onClose={() =>  setOpen(false)}>
          <MuiAlert elevation={6} variant="filled" severity="error">
            {error}
          </MuiAlert>
        </Snackbar>
  
      </ThemeProvider>
    );
}
