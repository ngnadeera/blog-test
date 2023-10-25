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

const defaultTheme = createTheme();

const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  country: yup.string().required('Country is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});


export default function SignUp() {
  const navigate = useNavigate();
  const [ error, setError ] = useState('');
  const [success,setSuccess] = useState(false);
  const [open,setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      country: '',
      email: '',
      password: '',
      confirmPassword: '',
      allowExtraEmails: false,
    },
    validationSchema,
    onSubmit: async(values) => {
      try {
        const data = {
          username: values.username,
          country: values.country,
          email: values.email,
          password: values.password,
        };
        const res = await axios.post(`http://${process.env.REACT_APP_API_HOST}:1337/api/auth/local/register`, values);
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{fontWeight:'500'}}>
            Sign up
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}  sx={{mt: 2, mb: 2}}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={formik.touched.username && Boolean(formik.errors.username)}
                  helperText={formik.touched.username && formik.errors.username}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  error={formik.touched.country && Boolean(formik.errors.country)}
                  helperText={formik.touched.country && formik.errors.country}
                />
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
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
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
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="allowExtraEmails"
                      color="primary"
                      checked={formik.values.allowExtraEmails}
                      onChange={formik.handleChange}
                    />
                  }
                  label="I want to receive blog article updates via email."
                />
              </Grid>
            </Grid>
            <button
              className='btn btn-signup'
              type="submit"
            >
              Sign Up
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
          You have successfully signed up!
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
