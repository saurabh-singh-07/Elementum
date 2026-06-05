import React, { useEffect, useState } from 'react'
import {Menu, Sun, Moon, Cross, CrossIcon, ClosedCaption, X} from "lucide-react"
function Header({toggleMenu, setToggleMenu}) {
    const [darkmode, setDarkmode] = useState(()=>{
      return localStorage.getItem('theme') === "dark"
    });
    useEffect(() =>{
      if(darkmode){
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }else{
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    },[darkmode])
  return (
    <div className='flex justify-between items-center relative z-10 px-10 h-15 py-2 dark:text-slate-50 bg-slate-100 transition-all duration-200 dark:bg-gray-900 shadow-xl'>
      <div className='text-2xl font-bold '>
        <span>Elementum</span>
      </div>
      <ul className=' hidden md:flex text-sm font-medium gap-8 dark:text-slate-200'>
        <li className='text-style'>Home</li>
        <li className='text-style'>Studio</li>
        <li className='text-style'>Services</li>
        <li className='text-style'>Contact</li>
        <li className='text-style'>FAQa</li>
      </ul>
      <div className='flex gap-4'>
        <button 
        onClick={()=>{setDarkmode(!darkmode)}}>
          {darkmode 
          ? <Sun/> 
          : <Moon/>}
          </button>
          <button className=' transition-all duration-300' onClick={()=>{setToggleMenu(!toggleMenu)}}>
            {
              toggleMenu ? 
              <X/> : <Menu/>
            }
          </button> 
      </div>
      
    </div>
  )
}

export default Header
