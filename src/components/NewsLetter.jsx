import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
   <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
  <div className='lg:col-span-2 my-4'>
    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips on how to optimize your workflow</h1>
    <p>Ask for a Demo</p>
  </div>
  <div className='my-4'>
    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
      <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter email' />
      <button className='bg-[#6939bb] w-[200px] rounded-md font-medium ml-4 my-6 px-6  mx-auto py-3 text-black'>Demo</button>
    </div>
    <p>We care about the protection of our data. Read our <span className='text-[#6939bb]'>Privacy Policy</span></p>
  </div>
   </div>
    </div>
  )
}

export default NewsLetter