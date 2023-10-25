
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
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar'; 
import MuiAlert from '@mui/material/Alert'; 
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

const defaultTheme = createTheme();

const validationSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
});



export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [ error, setError ] = useState('');
  const [success,setSuccess] = useState(false);
  const [open,setOpen] = useState(false);
  const [loading,setLoading] = useState(false);
  const [openSnaccer,setOpenSnaccer] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async(values) => {
      try {
        setLoading(true)
        await axios.post(`http://${process.env.REACT_APP_API_HOST}:1337/api/auth/forgot-password`, {
            email: values.email
        }).then((res) => {
            setSuccess(true)
            setOpenSnaccer(true)
            console.log('User received an email', res)
        }).catch((error) => {
            console.log('An error occurred:', error.response);
        }).finally(() => {
            setLoading(false);
        })

        
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
            <GppMaybeIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{fontWeight:'500'}}>
            Forgot Password
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}  sx={{mt: 2, mb: 2}}>

            <Grid item xs={12}>
                <Typography sx={{textAlign:'center'}}>
                Enter your email and we will send you a link to reset your password: 
                </Typography>
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
             
              <Grid item xs={12}>
               
              </Grid>
            </Grid>
            <button
              className='btn btn-signup'
              type="submit"
              disabled={success}
            >
              { loading ? "Sending..." : success ? "Link Sent" : "Send Link"}
              
            </button>
            {error != '' ? <p className='error' style={{fontSize:'14px', fontWeight:'500'}}>{error}</p> : ''}
            <Grid container justifyContent="flex-end">
              <Grid item sx={{mb:4}}>
                <Link href="/SignIn" variant="body2">
                  Back to Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>

      <Snackbar open={success} autoHideDuration={3000} onClose={() => setOpenSnaccer(false)}>
        <MuiAlert elevation={6} variant="filled" severity="success">
          Link has been sent to - {formik.values.email}!
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
