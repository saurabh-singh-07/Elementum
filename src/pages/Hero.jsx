import React from 'react'

function Hero() {
  return (
    <div>
      <div className='text-center flex flex-col gap-y-4 justify-center px-3 md:px-5 h-screen bg-slate-200/70 dark:bg-gray-900/90 dark:text-slate-200/80 w-full'>
        <h1 className='text-5xl font-semibold md:text-6xl dark:text-slate-100 pt-6 px-5'>
            The thinkers and doers were changing the status Quo with
        </h1>
        <p >
            We are a team if strategists, disgners communications, researchers, Togeather, we belive that progress only hghappens when you refuse to play things safe.
        </p>
        <div className='flex mt-6 justify-between'>
            <div className='w-25 h-25'>
                <img className=" rounded-full" src="https://tse3.mm.bing.net/th/id/OIP.7K6e07UeiPE6XyIUIJQl4QHaHa?pid=Api&P=0&h=180" alt="" />
            </div>
            <div className='w-25 h-25 -ml-8 mt-10 '>
                <img className='rounded-full' src="https://tse2.mm.bing.net/th/id/OIP.ZfCjqZ7otziW37dQVBZIZwHaHa?pid=Api&P=0&h=180" alt="" />
            </div>
            <div className='w-25 h-25'>
                <img className='rounded-full' src="https://tse4.mm.bing.net/th/id/OIP.F7fXBEboYtwkLnLg331u5AHaHa?pid=Api&P=0&h=180" alt="" />
            </div>
            <div className='w-25 h-25 -ml-8 mt-10 '>
                <img className='rounded-full ' src="https://img.freepik.com/premium-photo/passport-photo-portrait-young-man-white-background_1028938-330516.jpg?w=2000" alt="" />
            </div>
            <div className='w-25 h-25 -mt-4'>
                <img className='rounded-full' src="https://tse3.mm.bing.net/th/id/OIP.6mw_-ia2QxiE6bquvkd5TgHaHa?pid=Api&P=0&h=180" alt="" />
            </div>
            <div className='w-25 h-25 -ml-5 mt-6 '>
                <img className='rounded-full' src="https://tse3.mm.bing.net/th/id/OIP.7K6e07UeiPE6XyIUIJQl4QHaHa?pid=Api&P=0&h=180" alt="" />
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Hero
