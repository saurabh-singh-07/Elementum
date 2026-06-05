import React from 'react'

function Footer() {
  return (
    <div className='p-5 md:p-10 lg:p-15 flex flex-col md:gap-y-8 lg:gap-y-10 bg-emerald-200/20 dark:bg-gray-95gi0/90'>
        <div className='w-full flex justify-center items-center text-center flex-col dark:text-slate-100'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl'>Subscribe to <br /> out newsletter</h1>
            <p className='py-2 dark:text-slate-200/70'>to make your stay special and even more memorable.</p>
            <button 
            className='py-2 px-3 rounded-2xl bg-gray-900 hover:bg-slate-300 hover:text-slate-900 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-900/80 dark:hover:text-slate-100 transition-all duration-200 font-semibold text-white flex text-center items-center mt-3 mb-15 '>
                Subscribe Now
            </button>
        </div>
        <hr/>
        <div className='md:flex justify-between px-5 lg:px-10 dark:text-slate-100'>
            <div>
                <h2 className='text-2xl lg:text-3xl font-bold my-5 pt-5'>Company</h2>
                <ul className='text-sm md:text-md flex items-center flex-col gap-y-4 md:gap-y-6 dark:text-slate-300/90'>
                    <li className='text-style'>Home</li>
                    <li className='text-style'>Studio</li>
                    <li className='text-style'>Service</li>
                    <li className='text-style'>Blog</li>
                </ul>
            </div>
            <div>
                <h2 className='text-2xl lg:text-3xl font-bold my-5 pt-5'>Terms & Policies</h2>
                <ul className='text-sm md:text-md flex items-center flex-col gap-y-4 md:gap-y-6 dark:text-slate-300/90'>
                    <li className='text-style'>Privac Policy</li>
                    <li className='text-style'>Terms & Conditions</li>
                    <li className='text-style'>Explore</li>
                    <li className='text-style'>Accesibility</li>
                </ul>
            </div>
            <div>
                <h2 className='text-2xl lg:text-3xl font-bold my-5 pt-5'>Follow Us</h2>
                <ul className='text-sm md:text-md flex items-center flex-col gap-y-4 md:gap-y-6 dark:text-slate-300/90'>
                    <li className='text-style'>Instagram</li>
                    <li className='text-style'>Linkedin</li>
                    <li className='text-style'>Youtube</li>
                    <li className='text-style'>Twitter</li>
                </ul>
            </div>
            <div>
                <h2 className='text-2xl lg:text-3xl font-bold my-5 pt-5'>Terms & Policies</h2>
                <ul className='text-sm md:text-md flex items-center flex-col gap-y-4 md:gap-y-6 dark:text-slate-300/90'>
                    <li>1498w Fluton ste,<br /> STE 2D Chicgo, IL 63867.</li>
                    <li>(123) 456789000</li>
                    <li className='text-style'>info@elementum.com</li>
                </ul>
            </div>
        </div>
        <div className='flex justify-center my-8 font-semibold dark:text-slate-100'>
            <p>2023 Elementum. All rights reserved</p>
        </div>
    </div>
    
  )
}

export default Footer
