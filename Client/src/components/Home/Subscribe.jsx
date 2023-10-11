import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Checkbox } from '@mui/material';
import * as Yup from 'yup'; 
import { ErrorMessage, useFormik } from 'formik'; 

export const Subscribe = () => {


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [subscribed,setSubscribed] = useState(false);


  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    country: Yup.string().required('Country is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    agreeToPolicy: Yup.boolean().oneOf([true], 'You must agree to the policy'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      country: '',
      email: '',
      agreeToPolicy: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm(); 
      setSubscribed(true);
    },
  });

  return (
    <div className='subscribe'>
      <div className='subscribe-heading'>Be the first to know about the most trending discussions</div>
      <div className='subscribe-form'>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className='subscribe-form-feild-text'
            id="name"
            label="Name"
            variant="standard"
            fullWidth
            size='small'
            InputLabelProps={{ className: 'subscribe-form-field' }}
            inputProps={{ className: 'subscribe-form-field-input' }}
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
          className='subscribe-form-feild-text'
            id="country"
            label="Country"
            variant="standard"
            fullWidth
            size='small'
            InputLabelProps={{ className: 'subscribe-form-field' }}
            inputProps={{
              className: 'subscribe-form-field-input',
            }}
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          />
          <TextField
          className='subscribe-form-feild-text'
            id="email"
            label="Email"
            variant="standard"
            fullWidth
            size='small'
            InputLabelProps={{ className: 'subscribe-form-field' }}
            inputProps={{ className: 'subscribe-form-field-input' }}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
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
              id="agreeToPolicy"
              name="agreeToPolicy"
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
            <button type="submit" className='btn white' disabled={subscribed}>
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
