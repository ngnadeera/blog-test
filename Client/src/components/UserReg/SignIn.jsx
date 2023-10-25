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
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../helpers/AuthContext';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar'; 
import MuiAlert from '@mui/material/Alert'; 

const defaultTheme = createTheme();

const validationSchema = yup.object({
  identifier: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required'),
});

export default function SignIn() {
  const navigate = useNavigate();
  const [error,setError] = useState('');
  const { setAuthState  } = useContext(AuthContext);
  const [ open,setOpen ] = useState(false);
  const [ errorOpen,setErrorOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      identifier: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      
      try {
        const res = await axios.post(`http://${process.env.REACT_APP_API_HOST}:1337/api/auth/local`, values);
      
        if (res.data) {
          localStorage.setItem("accessToken", res.data.jwt);
          setAuthState(true);
          setError('');
          if (sessionStorage.getItem("currentUrl")){
            setOpen(true)
             navigate(`${sessionStorage.getItem("currentUrl")}`)
            sessionStorage.removeItem("currentUrl")
          } else {
            setOpen(true)
            setTimeout(() => {navigate('/')}, 1500);
          }
         
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 400) {
            setError(error.response.data.error.message);
            setErrorOpen(true)
          }
        } else {
          console.error('Request error:', error);
        }
      }
      
      
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{mb:5}}>
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{fontWeight:'500'}}>
            Sign in
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              margin="normal"
              fullWidth
              id="identifier"
              name="identifier"
              label="Email Address"
              autoComplete="email"
              autoFocus
              value={formik.values.identifier}
              onChange={formik.handleChange}
              error={formik.touched.identifier && Boolean(formik.errors.identifier)}
              helperText={formik.touched.identifier && formik.errors.identifier}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              sx={{mb:3}}
            />
            <button
              className='btn btn-signup'
              type="submit"
            >
              Sign In
            </button>
            <p className='error'>{error ? error : ''}</p>
            <Grid container>
              <Grid item xs>
              <Link href="/ForgotPassword" variant="body2" style={{fontWeight:'500'}}>
                  {"Forgot Password"}
                </Link>
              </Grid>
              <Grid >
                <Link href="/SignUp" variant="body2" style={{fontWeight:'500'}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>



      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <MuiAlert elevation={6} variant="filled" severity="success">
          You have successfully logged in!
        </MuiAlert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar open={errorOpen} autoHideDuration={4000} onClose={() =>  setErrorOpen(false)}>
        <MuiAlert elevation={6} variant="filled" severity="error">
          {error}
        </MuiAlert>
      </Snackbar>

    </ThemeProvider>
  );
}
