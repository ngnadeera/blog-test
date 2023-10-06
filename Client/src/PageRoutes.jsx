import React from 'react'
import { Route, Routes } from "react-router-dom";
import NavBar from './components/Home/NavBar';
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';
import useFetch from './Hooks/useFetch';
import CircularProgress from '@mui/material/CircularProgress';
import { AllPosts } from './pages/AllPosts';
import Footer from './components/Footer';
import SignUp from './components/UserReg/SignUp';
import SignIn from './components/UserReg/SignIn';

export const PageRoutes = () => {
 
  
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
      width: '100vw',  
    },
  };

  let {loading, data, error} = useFetch('http://localhost:1337/api/blogs?populate=*');
  if (loading) return  <div style={styles.container}>
  <CircularProgress disableShrink />
</div> 
  if (error) return <p>error</p>

  return (
    <div>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home blogs={data? data : ""} />} />
          <Route path="/post/:id" exact element={<Posts blogs={data? data : ""} />} />
          <Route path="/AllPosts" exact element={<AllPosts blogs={data? data : ""} />} />
          <Route path="/SignUp" exact element={<SignUp />} />
          <Route path="/SignIn" exact element={<SignIn />} />
          </Routes>
          <Footer/>
    </div>
  )
}
