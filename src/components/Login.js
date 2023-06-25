import React, {useState} from 'react'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import {Link} from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";

function Login() {

    const inputwidth={
        display:'block',
        width:'180px',
        margin:' 0 auto',
        paddingTop:'40px',
        paddingBottom:'50px'
    }

    const pwddiv={
        display:'flex',
        alignItems:'center'
    }

    const relative={
        position:'relative',
        right:30,
    }

    const justify={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4b0082',
        hieght:'100vh',
        
    }

   

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange =(event)=>{
        setPassword(event.target.value);
    };

    const { loginWithRedirect } = useAuth0();
   
  return (
    <div  style={justify}  class="bg-indigo-600 grow h-screen">
        <div class="bg-white w-fit h-150 my-20" >

        <div>
        <h2 class="mt-10 p-10 text-center text-1x2 font-bold leading-9 tracking-tight text-gray-900">Welcome To Health Care App</h2>
        </div>
        
        <div style={inputwidth}>
       <button onClick={()=>loginWithRedirect()}>
        <button type="submit" class="flex w-44 justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get Started</button>
        </button>
        
      </div>
        </div>
    </div>
  )
}

export default Login




