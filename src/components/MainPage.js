import axios from '../api/axios'
import React, {useEffect, useState, useContext, useRef} from 'react'
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { booleanContext } from '../Context';
import Home from './Home';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import PublishComponent from './PublishComponent';

const CHECK_LOGIN_URL = '/user/auth/token/refresh';

function MainPage(props) {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const{isLoggedIn, setIsLoggedIn} =useContext(booleanContext)
    const refresh = {headers :{
        'Content-Type' : 'application/json',
        AUTHORIZATION : 'Bearer ' +localStorage.getItem("Refresh Token")
        
            }}




//     const checkLoggedIn = async (e) => {
      
//         try{
          
//             const response = await axios.get(CHECK_LOGIN_URL, refresh);
//            setIsLoggedIn(true)
//         setEmail(localStorage.getItem("email"))
       
            



//         }catch (err) {
//             console.log(err);
//         }
// }

// useEffect(() => {

//             checkLoggedIn()
          
// }, [])


    return (
      <>
      <Routes>

     {/* {isLoggedIn ? <Route path="/" element={<Home />} />:  <Route path="/" element={<Login />} />} */}
    {/* <a href='/publish'>Publish</a> */}
     </Routes>
     <Home />
     <PublishComponent />
      </>
    );
}

export default MainPage;