import React, { useContext } from 'react';
import { booleanContext } from '../Context';

function Logout() {
    const{isLoggedIn, setIsLoggedIn} =useContext(booleanContext )

    setIsLoggedIn(false)
    localStorage.removeItem("Authorities");
    localStorage.removeItem("Refresh Token");
    localStorage.removeItem("Access Token");
  
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
  
    localStorage.removeItem("password");
    localStorage.removeItem("role");
    
      return (
          <>
        <div>You Have Successfuly been logged out</div>
        <a href='/'>Return Home</a>
        </>
      )
}

export default Logout;