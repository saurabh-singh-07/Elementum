import { X } from 'lucide-react'
import React from 'react'

function Sidebar({toggleMenu, setToggleMenu}) {
  return (
    <div className={`fixed right-0 top-0 z-1 h-screen  bg-slate-300 py-22 px-10 font-semibold text-xl dark:bg-gray-700 dark:text-slate-50 transition-all duration-300
    ${toggleMenu ? "block" : "hidden"}`}>
        <div className='absolute top-2 right-5 '>
            <X onClick={()=>{setToggleMenu(!toggleMenu)}} className='w-10 h-10'/>
        </div>
      <ul className='flex flex-col gap-10'>
        <li className='text-style w-fit'>Home</li>
        <li className='text-style w-fit'>Studio</li>
        <li className='text-style w-fit'>Services</li>
        <li className='text-style w-fit'>Contact</li>
        <li className='text-style w-fit'>FAQ</li>
        <li className='text-style w-fit'>Privacy Policy</li>
        <li className='text-style w-fit'>Terms & Conditions</li>
      </ul>
    </div>
  )
}

export default Sidebar
