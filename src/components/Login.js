import React, {useState} from 'react'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import {Link} from "react-router-dom"


function Login() {

    const inputwidth={
        width:'350px',
        margin:'auto',
        paddingTop:'30px',
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

   
  return (
    <div  style={justify}  class="bg-indigo-600 grow h-full">
        <div class="bg-white w-fit h-full my-20" >

        <div>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>
        <div  className='formcontainer  flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
        <form class="space-y-6" action="#" method="POST">

        <div style={inputwidth}>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md  py-1.5 text-gray-900 bg-zinc-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>

           
        </div>
        <div style={inputwidth}>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Enter Password</label>
         
        </div>
        <div class="mt-2" style={pwddiv}>
          <input id="password" name="password" type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} autocomplete="current-password" required class="block w-full  border-black rounded-md  py-1.5 text-gray-900 bg-zinc-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          <span style={relative}>

          <button  onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash/> : <FaEye/>}
            
          </button>
          </span>
        </div>
      </div>
      </div>

      <div style={inputwidth}>
      <div  class="relative  inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
    <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
    <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
    </div>
    <label for="toggle" class=" mt-0.5 text-xs text-gray-700">Remember Me</label>

      </div>
      <div class="text-sm" style={inputwidth} >
            <a href="#" class="font-semibold flex justify-end text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
      <div style={inputwidth}>
       <Link to="/homescreen">
        <button type="submit" class="flex w-full  justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </Link>
        
      </div>
     

            </form>
        </div>
        </div>
    </div>
  )
}

export default Login




