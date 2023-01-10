import React from 'react'
import LaptopImg from '../images/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
  <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
  <img src={LaptopImg} alt="A laptop"  className='w-[500px] mx-auto my-4'/>
  <div className='flex flex-col justify-center'>
    <p className='text-[#6939bb] uppercase font-bold'>Data Analytics</p>
    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage data and other stuff</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repudiandae, corporis eligendi deleniti est sunt vel commodi inventore architecto dolore, nihil magnam perferendis dolor modi cumque odit repellat beatae praesentium.
    </p>
    <button className='text-[#6939bb] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>Get Started</button>

  </div>
  </div>
    </div>
  )
}

export default Analytics