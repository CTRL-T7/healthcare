import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import "./style.css"
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';


function sendEmail(e){
  e.preventDefault();
  emailjs.sendForm('health care', 'template_2756m5j', '#incident-mgt', '0UHfwqtAlRvowPagM')
  .then((result)=> {
    console.log(result.text);
  }, (error) =>{
    console.log(error.text);
  
  })
}

function incidentmgt() {
  return (
    <div>
        <div className='top'>
            <h1 class='font-semibold'>Create Incident</h1>
            <Link to ="/homescreen">

            <AiOutlineClose size={24}/>
            </Link>

        </div>
        <form class="space-y-6 mt-10 " className='form' action="#" method="POST" id="incident-mgt" onSubmit={sendEmail}>

<div class="mb-2.5 mt-12" >
<label for="date" class="block text-sm font-medium leading-6 text-gray-900">Date</label>
<div class="mt-2">
  <input id="date" name="date" type="date" autocomplete="date" required class="block px-3 w-full bg-zinc-300 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>

   
</div>
<div class="mb-2.5 mt-8">
<div class="flex items-center justify-between">
  <label for="staff" class="block text-sm font-medium leading-6 text-gray-900">Support Staff</label>
 
</div>
<div class="mt-2" >
  <input id="staff" name="staff" type='multitext' required class="block w-full px-3 bg-zinc-300 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  
</div>
</div>

<div class="mb-2.5 mt-8">
<div class="flex items-center justify-between">
  <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Description Of the Incident</label>
 
</div>
<div class="mt-2" >
  <textarea id="description" name="description" type='multitext' required class="block w-full px-3 bg-zinc-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  
</div>
</div>

<div class="mb-2.5 mt-8">
<div class="flex items-center justify-between">
  <label for="concequences" class="block text-sm font-medium leading-6 text-gray-900">Concequences</label>
 
</div>
<div class="mt-2" >
  <textarea id="concequences" name="concequences" type='multitext' required class="block w-full px-3 bg-zinc-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  
</div>
</div>

<div class="mb-2.5 mt-8" >
<div  class="flex items-center justify-between">
  <label for="action" class="block text-sm font-medium leading-6 text-gray-900">Action Taken</label>
 
</div>
<div class="mt-2" >
  <textarea id="action" name="action" type='multitext' required class="block w-full px-3 bg-zinc-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  
</div>
</div>


<div class="mb-2.5 mt-12" >
<label for="date" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
<div class="mt-2">
  <input id="email" name="email" type="email" autocomplete="email" required class="block px-3 w-full bg-zinc-300 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>

   
</div>
</div>
</div>





<div class="mb-10 mt-8">

<button type="submit" class="flex w-full  justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>


</div>


    </form>
    </div>
  )
}

export default incidentmgt