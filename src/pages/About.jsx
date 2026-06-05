import { ArrowRight } from 'lucide-react'
import React from 'react'

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-around min-h-150 h-full pt-4 pb-20 w-full dark:bg-slate-800/90 dark:text-slate-200/70'>
      <div className='md:w-[60%] mt-10 px-10'>
        <h2 className='text-[40px] font-bold md:texl-6xl py-3 dark:text-slate-50'>Tomorrow should be better than today</h2>
        <p className='py-2 text-sm md:text-[16px]'>We are a team of strategists, designers, communicators, researchers.</p>
        <p className='text-sm md:text-[16px]'>Togeather, we belive that progress only happens when you refuse to play things safe.</p>
        <button className=' flex justify-center my-5 items-center dark:text-white'>Read more <ArrowRight/></button>
      </div>
      <div className='md:w-[40%] max-w-100 w-80  mx-4 '>
        <img className='rounded-full ' src="https://thumbs.dreamstime.com/b/young-business-people-meeting-office-teamwork-group-success-corporate-discussion-having-concept-266017781.jpg" alt="" />
      </div>
    </div>
  )
}

export default About
