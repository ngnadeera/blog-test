import React, { useContext } from 'react';
import { AuthContext } from '../../helpers/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Logout() {
  const { setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setAuthState(false);
    navigate('/');
  }

  return(handleLogout)

}

export default Logout; // Export the Logout component
