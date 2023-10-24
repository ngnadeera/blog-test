import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { Topics } from "../Home/Topics";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Snackbar from '@mui/material/Snackbar'; 
import MuiAlert from '@mui/material/Alert'; 


export const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [success,setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false)

  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    country: yup.string().required("Country is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    // password: yup.string().required('Password is required'),
    // confirmPassword: yup
    //   .string()
    //   .oneOf([yup.ref('password'), null], 'Passwords must match')
    //   .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      country: "",
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const data = {
          username: values.username,
          country: values.country,
          email: values.email,
        };

        const res = await axios.put(
          `http://${process.env.REACT_APP_API_HOST}:1337/api/users/${user.id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );

        setSuccess(true);
      } catch (error) {
        setError(error.response.data.error.message);
        setErrorMessage(true);
      }
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`http://${process.env.REACT_APP_API_HOST}:1337/api/users/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  useEffect(() => {
    if (user) {
      formik.setValues({
        ...formik.values,
        username: "" || user.username,
        country: "" || user.country,
        email: "" || user.email,
      });
    }
  }, [user]);

  return (
    <div className="profile boxstyle">
      <form onSubmit={formik.handleSubmit} className="profile-form">
        <Container fluid>
          <Row>
            <Col>
              <TextField
                sx={{ marginBottom: "10px" }}
                autoComplete="given-name"
                name="username"
                fullWidth
                id="username"
                label="Username"
                autoFocus
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
            </Col>

            <Col>
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
            </Col>
          </Row>

          <Row>
            <Col md={6}>
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
            </Col>
            
          </Row>

          <Row>
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
          </Row>

          <button
            style={{ width: "fit-content", padding: "10px" }}
            className="btn btn-signup"
            type="submit"
          >
            save
          </button>

        </Container>
      </form>

      <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)}>
        <MuiAlert elevation={6} variant="filled" severity="success">
          Your information has been changed!
        </MuiAlert>
      </Snackbar>

      <Snackbar open={errorMessage} autoHideDuration={4000} onClose={() =>  setErrorMessage(false)}>
        <MuiAlert elevation={6} variant="filled" severity="error">
          {error}
        </MuiAlert>
      </Snackbar>


    </div>
  );
};
