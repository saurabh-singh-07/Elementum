import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import React from 'react'

function Services() {
  return (
    <div className='dark:bg-gray-900/90 bg-gray-100 dark:text-slate-200/70 flex px-10 flex-col h-full w-full pt-5 md:pt-15'>
        <div>
            <h2 className='text-6xl md:text-7xl font-bold px-5 mt-20 dark:text-slate-50'>
                What we can <br />offer you
            </h2>
        </div>
        <div className='py-10'>
            <hr />
            <div className='py-8 flex flex-col md:flex-row gap-y-4 justify-between px-10'>
                <p>Office of multiple interest content </p>
                <h3 className='text-4xl font-semibold dark:text-slate-100'>Colaborative & partnership</h3>
                <button><ArrowRightIcon/></button>
            </div>
            <hr />
            <div className='py-8 flex flex-col md:flex-row gap-y-4 justify-between px-10'>
                <p>THe hanger US Air force digital experimental</p>
                <h3 className='text-4xl font-semibold dark:text-slate-100'>We talk about our weight</h3>
                <button><ArrowRightIcon/></button>
            </div>
            <hr />
            <div className='py-8 flex flex-col md:flex-row gap-y-4 justify-between px-10'>
                <p>Delta faucet content, social, digital</p>
                <h3 className='text-4xl font-semibold dark:text-slate-100'>Piloting digital confidence</h3>
                <button><ArrowRightIcon/></button>
            </div>
        </div>
    </div>
  )
}

export default Services
