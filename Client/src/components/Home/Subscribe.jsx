import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Checkbox, Snackbar  } from '@mui/material';
import * as Yup from 'yup';
import { ErrorMessage, useFormik } from 'formik';
import usePost from '../../Hooks/usePost';
import useFetch from '../../Hooks/useFetch';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';


export const Subscribe = () => {
  const post = usePost();

  //getting already existing email list

  const { loading: fetchLoading, error: fetchError, data: subscribers } = useFetch(
    'http://localhost:1337/api/subscribers'
  );

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailExistError,setEmailExistError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);


  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    country: Yup.string().required('Country is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    agreeToPolicy: Yup.boolean().oneOf([true], 'You must agree to the policy'),
  });

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    const emailExists = subscribers.data.some((subscriber) => subscriber.attributes.email === enteredEmail);
    if (emailExists) {
      setEmailExistError('You have already been subscribed!');
    } else {
      setEmailExistError('');
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      setError('');

      const response = await axios.post('http://localhost:1337/api/subscribers', { data: values });
      if (response.error) {
        setError(response.error);
      } else {
        setError('');
        setLoading(false);  
        setSnackbarOpen(true);
        formik.resetForm();

      }
    } catch (error) {
      setError('An error occurred while submitting the form.');
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      country: '',
      email: '',
      agreeToPolicy: false,
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className='subscribe'>
      <div className='subscribe-heading'>Be the first to know about the most trending discussions</div>
      <div className='subscribe-form'>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className='subscribe-form-feild-text'
            id='name'
            label='Name'
            variant='standard'
            fullWidth
            size='small'
            InputLabelProps={{ className: 'subscribe-form-field' }}
            inputProps={{ className: 'subscribe-form-field-input' }}
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            className='subscribe-form-feild-text'
            id='country'
            label='Country'
            variant='standard'
            fullWidth
            size='small'
            InputLabelProps={{ className: 'subscribe-form-field' }}
            inputProps={{
              className: 'subscribe-form-field-input',
            }}
            name='country'
            value={formik.values.country}
            onChange={formik.handleChange}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          />
          <TextField
            className='subscribe-form-feild-text'
            id='email'
            label='Email'
            variant='standard'
            fullWidth
            size='small'
            InputLabelProps={{ className: 'subscribe-form-field' }}
            inputProps={{ className: 'subscribe-form-field-input' }}
            name='email'
            value={formik.values.email}
            onChange={(e) => {
              formik.handleChange(e);
              handleEmailChange(e); 
            }}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={(formik.touched.email && formik.errors.email)} 
          />
        {emailExistError !== '' ? <div className='error email-exist-error'>{emailExistError}</div> : null}

          <div className='subscribe-privacy'>
            <Checkbox
              {...label}
              defaultChecked
              sx={{
                color: '#6a6a6aea',
                '&.Mui-checked': {
                  color: '#ebebeb',
                },
              }}
              id='agreeToPolicy'
              name='agreeToPolicy'
              checked={formik.values.agreeToPolicy}
              onChange={formik.handleChange}
              error={formik.touched.agreeToPolicy && Boolean(formik.errors.agreeToPolicy)}
            />
            <div className='subscribe-privacy-satatement'>I agree to the Paraqum privacy Policy</div>
          </div>
          {formik.errors.agreeToPolicy && formik.touched.agreeToPolicy ? (
            <div className='error'>{formik.errors.agreeToPolicy}</div>
          ) : null}
          <div className='subscribe-privacy-button'>
            {loading ? <CircularProgress size="small"/> :  <button type='submit' className='btn white' disabled={ emailExistError != ''}>
              Subscribe
            </button>}
          </div>
          {error && error !== '' ? <div className='error'>{error}</div> : null}
        </form>
      </div>

      <Snackbar sx={{color:'red'}} open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity='success' >
          {"You have successfully been subscribed!"}
        </Alert>
      </Snackbar>

    </div>
  );
};
