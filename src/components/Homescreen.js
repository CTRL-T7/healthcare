import React,{useState} from 'react'
import face from '../assets/images/face.jpg'
import Hamburger from 'hamburger-react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiMessageDetail, BiBuildingHouse} from 'react-icons/bi'
import {TbHeartRateMonitor} from 'react-icons/tb'
import {MdGroups2} from "react-icons/md"
import {BsCardChecklist} from "react-icons/bs"
import {FaUser} from "react-icons/fa"
import {GoNote} from 'react-icons/go'
import {GrFormAdd} from 'react-icons/gr'
import "./style.css"
import {Link, NavLink} from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import Select from 'react-select'

function Homescreen() {

    const avatar ={
        width: '45px',
        hieght:'45px',
        borderRadius:'50%',

    };
    const header ={
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding: '20px 25px',
       
       
    };

    const menuitemdiv={
        display:'flex',
        alignItems:'center',
        justifyContent:'left',
        alignContent:'center',
        gap:'25px',
        padding:'10px',
        cursor:'pointer',
        
    };

   

    const menucontainer={
            padding:'20px'
    }

    const sectiontitle ={
        fontSize:'12px',
        color:'#c5c6d0',
        padding:'15px 0px'
    }

    const dropdown={
       
        top:'100%',
        left:'0px',
        display:'flex',
        flexDirection:'column',
        padding:8,
        margin:0,
        width:'100%',
        listStyle:'none',
        backgroundColor:'#fff',
        border:'1px solid #ccc',
        borderRadius:'8px'
    }
    const [isOpen, setOpen] = useState(false)
    const [selectOpen, setSelectOpen] = useState(false)
    const [selectInter, setSelectInter] = useState(false)

    const toggleDrawer = () => {
        setOpen((prevState) => !prevState)
    }
    const { loginWithRedirect } = useAuth0();
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    const DrawerItem =({path, label, Icon}) =>(
        <NavLink
        
       
        to={path}
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#1560bd" : "black",
          };
        }}
      >
          
              <div className='menuitemdiv'>
                {<Icon size={20}/>}  
                    <h1>{label}</h1> 

                   

                </div>
                
         </NavLink>
    )
    
  return (
    <div >
        
        <nav style ={header} >
        <Hamburger toggled={isOpen} toggle={setOpen} size={20}  onClick={toggleDrawer}/>
            <h1 class='decoration-8 text-indigo-600 text-lg font-bold'>We Care Home</h1>
            <img src={face} alt= 'avatar'  style={avatar}/>
        </nav>
        <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
                enableOverlay={false}
            >
                <div style={menucontainer} className='menucontainer'>
              <DrawerItem path={'/homescreen'} label={'Dashboard'} Icon={AiOutlineHome}/>
                    <h1 style={sectiontitle}>YP SUPPORT</h1>

                   
                   <div>
          
          <div className='menuitemdiv' onMouseEnter={()=>setSelectInter(true)}
            onMouseLeave ={()=> setSelectInter(false)} style={{display:'block'}}
            onClick={()=>  setSelectInter(!selectInter)}
            >
            <div style={{display:'flex', gap:25,}}>
                
            {<BiMessageDetail size={20}/>}  
                <h1>Interactions</h1> 
            </div>



               <div>
                
               </div>
                {selectInter && (
                    <ul style={dropdown} className='dropdown' >
                        <li>Independent living</li>
                        <li>Resilence and Motivation</li>
                        <li>Physical or Mental Health</li>
                        <li>Others</li>
                    </ul>
                )}
            </div>
            
     </div>
                     <DrawerItem path={'/incidentmgt'} label={'Incident Mgt'} Icon={TbHeartRateMonitor}  />
                     
                     <div>
          
              <div className='menuitemdiv' onMouseEnter={()=>setSelectOpen(true)}
                onMouseLeave ={()=> setSelectOpen(false)} style={{display:'block'}}
                onClick={()=>  setSelectOpen(!selectOpen)}
                >
                <div style={{display:'flex', gap:25,}}>
                    
                {<GoNote size={20}/>}  
                    <h1>Key Work Sessions</h1> 
                </div>



                   <div>
                    
                   </div>
                    {selectOpen && (
                        <ul style={dropdown} className='dropdown' >
                            <li>Independent living Skills</li>
                            <li>Finance and budgeting</li>
                            <li>Education EMployment and Training(EET)</li>
                            <li>Physical and Mental Health</li>
                        </ul>
                    )}
                </div>
                
         </div>
                  
                    
                    
                    <h1 style={sectiontitle}>INDUCTION</h1>
                    
                    <DrawerItem path={'/'} label={'Soft Handbook'} Icon={GrFormAdd}/>
                    <DrawerItem path={'/'} label={'Sign Off Sheet'} Icon={BiBuildingHouse}/>
                    <DrawerItem path={'/'} label={'Policy'} Icon={BiMessageDetail}/>
                  

                    <h1 style={sectiontitle}>PERSONAL DEVELOPMENT</h1>

                    
                    <DrawerItem path={'/'} label={'Training Hub'} Icon={GrFormAdd}/>

                    <h1 style={sectiontitle}>YOUNG PEOPLE</h1>
                </div>
            </Drawer>

            <div className='homecontent'>
                <div className='contentitems'>
                    <h1 className='firstitem'>Young People</h1>
                    <MdGroups2 size={50} color='#78e07a' className='firsticon'/>
                </div>

                <div className='contentitems'>
                    <h1 className='seconditem'>Staff Development</h1>
                    <MdGroups2 size={50} color='#3c1361' className='secondicon'/>
                </div>

                <div className='contentitems'>
                    <h1 className='thirditem'>Attendance</h1>
                    <BsCardChecklist size={50} color='#484948' className='thirdicon'/>
                </div>

                <div className='contentitems'>
                    <h1 className='fourthitem'>Profile</h1>
                    <FaUser size={45} color='#e5de00' className='fourthicon'/>
                </div>
            </div>
    </div>
  )
}

export default Homescreen

