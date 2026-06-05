import { ArrowRight } from 'lucide-react'
import React from 'react'

function Details() {
  return (
    <div>
      <div className='flex items-center w-full h-200 flex-col md:flex-row py-8 px-6 bg-gray-200/80 dark:bg-slate-950/80'>
        <div className=' m-5'>
            <img className='rounded-full max-w-100 h-80 w-80 object-cover' src="https://static.vecteezy.com/system/resources/previews/032/168/361/large_2x/corporate-office-discussion-teamwork-administration-team-brainstorming-meeting-businessmen-group-laptop-indoors-top-cooperation-business-view-photo.jpg" alt="" />
        </div>
        <div>
            <h2 className='text-5xl font-semibold py-4 px-2 dark:text-slate-50'>
                See how we can help you progress
            </h2>
            <p className='py-2 text-slate-200/90'>
                We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
            </p>
            <button className='text-style flex py-3 gap-4 items-center dark:text-white'>Read more <ArrowRight/></button>
        </div>
        
      </div>
    </div>
  )
}

export default Details
