import React,{useState, useEffect} from 'react'
import {AiOutlineClose} from "react-icons/ai"
import "./style.css"
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import axios from 'axios';



function sendEmail(e){
  e.preventDefault();
  emailjs.sendForm('health care', 'template_2756m5j', '#incident-mgt', '0UHfwqtAlRvowPagM')
  .then((result)=> {
    console.log(result.text);
    Swal.fire(
      'Successful',
      'Your report has been sent to the relevant parties.',
      'success'
    )
  }, (error) =>{
    console.log(error.text);
    Swal.fire(
      'Error',
      'Your report was not successfully sent. please tryy again later.',
      'error'
    )
  
  })
} 



 
  

function Incidentmgt({userId}) {

  const [File, setFile] = useState(null);

  const [email, setEmail] = useState('');
  const [inputs, setInputs] = useState([{value:''}])

  function handleChange(event){
    setFile(URL.createObjectURL(event.target.files[0]));
  }

  const handleAddInput = ()=> {
    setInputs([...inputs,{value:''}]);
  };

  const handleInputChange =(index,event)=>{
    const newInputs = [...inputs];
    newInputs[index].value =event.target.value;
    setInputs(newInputs);
  };


  useEffect(()=>{
  
    const fetchUser = async (userId) =>{
      try{
        const response = await axios.get('https://dev-np1mr2qs4kiwvivc.us.auth0.com/api/v2/users/${id}',{headers:{Authorization:'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhHdU44NUd1Y2hDYnZ2bDVYQi1UNiJ9',},
      });
      setEmail(response.data.email);
      }catch (error){
        console.log(error);
      }
    }
  
    fetchUser();
   }, [userId]);
  
  return (
    <div>
        <div className='top'>
            <h1 class='font-semibold'>Incident Report</h1>
            <Link to ="/homescreen">

            <AiOutlineClose size={24}/>
            </Link>

        </div>
        <form class="space-y-6 mt-10 " className='form' action="#" method="POST" id="incident-mgt" onSubmit={sendEmail}>
        
        <div class="mb-2.5 mt-8">
<div class="flex items-center justify-between">
  <label for="reporter" class="block text-sm font-medium leading-6 text-gray-900"> Name of Person Reporting</label>
 
</div>
<div class="mt-2" >
  <input id="reporter" name="reporter" type='multitext' required class="block w-full px-3 bg-zinc-300 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  
</div>
</div>

<div class="mb-2.5 mt-8">
<div class="flex items-center justify-between">
  <label for="role" class="block text-sm font-medium leading-6 text-gray-900">Role Of Person Reporting</label>
 
</div>
<div class="mt-2" >
  <select id="role" name="role" required class="block w-full px-3 bg-zinc-300 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
    <option value='staff-member'> Staff Member</option>
    <option value='manager'>Manager</option>
    <option value='debuty-manager'>Deputy Manager</option>
    </select>
  
</div>
</div>

<div class="mb-2.5 mt-12" >
<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email Of Person Reporting</label>
<div class="mt-2">
  <input id="email" name="email"  type="email" autocomplete="email" required class="block px-3 w-full bg-zinc-300 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>

   
</div>
</div>

<div class="mb-2.5 mt-8">
<div class="flex items-center justify-between">
  <label for="reportee" class="block text-sm font-medium leading-6 text-gray-900"> Name of Person Involved</label>
 
</div>
<div class="mt-2" >
  <input id="reportee" name="reportee" type='multitext' required class="block w-full px-3 bg-zinc-300 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  
</div>
</div>

<div class="mb-2.5 mt-8">
<div class="flex items-center justify-between">
  <label for="incident-type" class="block text-sm font-medium leading-6 text-gray-900">Type of Incident</label>
 
</div>
<div class="mt-2" >
  <select id="incident-type" name="incident-type"  required class="block w-full px-3 bg-zinc-300 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
    <option value='assualt'>Assualt</option>
    <option value='theft'> Theft</option>
    <option value='vandalisim'>Vandalism</option>
    <option value='harassment'>Harassment</option>
    <option value='other'>Other</option>
    </select>
  
</div>
</div>



<div class="mb-2.5 mt-12" >
<label for="date" class="block text-sm font-medium leading-6 text-gray-900">Date & Time of Incident</label>
<div class="mt-2">
  <input id="date" name="date" type="date" autocomplete="date" required class="block px-3 w-full bg-zinc-300 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  <input id="date" name="time" type="time" autocomplete="time" required class="block px-3 w-full bg-zinc-300 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>


   
</div>
<div class="mb-2.5 mt-8">
<div class="flex items-center justify-between">
  <label for="staff" class="block text-sm font-medium leading-6 text-gray-900">Staff On Duty</label>
 
</div>
<div class="mt-2" >
  <input id="staff" name="staff" type='multitext' required class="block w-full px-3 bg-zinc-300 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  
</div>
</div>


<div class="mb-2.5 mt-8">
<div class="flex items-center justify-between">
  <label for="witness" class="block text-sm font-medium leading-6 text-gray-900">Witness</label>
 
</div>
<div class="mt-2" >
  <input id="witness" name="witness"  class="block w-full px-3 bg-zinc-300 rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  
</div>
</div>



<div class="mb-2.5 mt-8" >
<div  class="flex items-center justify-between">
  <label for="action" class="block text-sm font-medium leading-6 text-gray-900">What Led Up To The Incident</label>
 
</div>
<div class="mt-2" >
  <textarea id="action" name="action" type='multitext' required class="block w-full px-3 bg-zinc-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  
</div>
</div>

<div class="mb-2.5 mt-8">
<div class="flex items-center justify-between">
  <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Narrate Incident</label>
 
</div>
<div class="mt-2" >
  <textarea id="description" name="description" type='multitext' required class="block w-full px-3 bg-zinc-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  
</div>
</div>


<div class="mb-2.5 mt-8">
<div class="flex items-center justify-between">
  <label for="outcome" class="block text-sm font-medium leading-6 text-gray-900">Outcome</label>
 
</div>
<div class="mt-2" >
  <textarea id="outcome" name="outcome" type='multitext' required class="block w-full px-3 bg-zinc-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  
</div>
</div>

<div class="mb-2.5 mt-8" >
<div  class="flex items-center justify-between">
  <label for="action" class="block text-sm font-medium leading-6 text-gray-900">Follow-up Actions</label>
 
</div>
<div class="mt-2" >
  <textarea id="action" name="action" type='multitext' required class="block w-full px-3 bg-zinc-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  
</div>
</div>

<div class="mb-2.5 mt-8">
<div class="flex items-center justify-between">
  <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Unit manager</label>
 
</div>
<div class="mt-2" >
  <input id="description" name="description" type='multitext' required class="block w-full px-3 bg-zinc-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  
</div>
</div>

<div class="mb-2.5 mt-8">
<div class="flex items-center justify-between">
  <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Unit address</label>
 
</div>
<div class="mt-2" >
  <input id="description" name="description" type='multitext' required class="block w-full px-3 bg-zinc-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  
</div>
</div>
<div class="mb-2.5 mt-8">
<div class="flex items-center justify-between">
  <label for="concequences" class="block text-sm font-medium leading-6 text-gray-900">Upload Image</label>
 
</div>
<div class="mt-2" >
  <input id="img" name="img" type='file' onChange={handleChange}  class="block w-full px-3 bg-zinc-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  {File && <img src={File} alt='preview'/>}
</div>
</div>
</div>

{inputs.map((input,index)=>(


  
  <div>

  <div class="flex items-center justify-between">
    <label for="additional-email" class="block text-sm font-medium leading-6 text-gray-900">Additional email</label>
  
  </div>
    <input
    key={index}
    id='additional-email'
    name='additional-email'
    value={input.value}
    type='email'
    onChange={(event) =>handleInputChange(index,event)}
    class="block w-full px-3 bg-zinc-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
))}
<div class="mb-10 mt-8">

<button type='button' class="flex w-32  justify-center rounded-md bg-[#1e1e58] px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleAddInput}>Add email</button>
</div>





<div class="mb-10 mt-8">

<button type="submit" class="flex w-full  justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit report</button>


</div>


    </form>
    </div>
  )
}

export default Incidentmgt