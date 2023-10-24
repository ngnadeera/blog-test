import React, { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';
import useFetch from './Hooks/useFetch';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from './components/Footer';
import SignUp from './components/UserReg/SignUp';
import SignIn from './components/UserReg/SignIn';
import Header from './components/Header';
import { Banner } from './components/Home/Banner';
import axios from 'axios';
import { AuthContext } from './helpers/AuthContext';
import { UserProfile } from './pages/UserProfile';

export const PageRoutes = () => {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('accessToken')){
      axios.get(`http://${process.env.REACT_APP_API_HOST}:1337/api/users/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
      }).then((response) => {
        setAuthState(true);
    
        }).catch((error) => {
          if (error.response && error.response.status === 400) {
            setAuthState(false);
            console.error("Request failed with status code 400");
          } else {
            console.error("An error occurred:", error);
            setAuthState(false);
          }
        }) 
    } 
  }, [authState])



  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
      width: '100vw',  
    },
  };

  let {loading, data, error} = useFetch(`http://${process.env.REACT_APP_API_HOST}:1337/api/blogs?populate=*`);
  if (loading) return  <div style={styles.container}>
  <CircularProgress disableShrink />
</div> 
  if (error) return <p>error</p>

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState
      }}>

    <div>
        <Header/>
        <Banner/>
        <Routes>
          <Route path="/" exact element={<Home blogs={data? data : ""} />} />
          <Route path="/post/:id" exact element={<Posts blogs={data? data : ""} />} />
          <Route path="/SignUp" exact element={<SignUp />} />
          <Route path="/SignIn" exact element={<SignIn />} />
          <Route path="/Profile" exact element={authState ? <UserProfile/> : null}/>
          </Routes>
          <Footer/>
    </div>
    </AuthContext.Provider>
  )
}
