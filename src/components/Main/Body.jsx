import React from 'react'
import { assets } from '../../assets/assets'

const Body = () => {
  return (
    <div className='flex-col '>
        <div className='ml-48 text-5xl py-12'>
            <h1 style={{
                'display' : 'block',
                'width': '600px',
                'background': 'linear-gradient(16deg,#4b90ff,#ff5546)',
               '-webkit-text-fill-color': 'transparent',
                '-webkit-background-clip': 'text',
            }}
            className='font-semibold'>Hello, Sunit</h1>
            <h1 className='text-[#c4c7c5] font-semibold pt-3'>How can I help you today?</h1>
        </div>
        <div className='flex justify-center gap-3 mt-5 pt-10'>
            <div className='bg-custom-divbg w-52 h-52 rounded-2xl flex-col content-between p-5  hover:bg-custom-hover cursor-pointer'>
                <p>Provide questions to help me prepare for an interview</p>
                <img src={assets.code_icon} alt="" className='w-10 mt-14 ml-32 p-1 bg-white rounded-full '/>
            </div>
            <div className='bg-custom-divbg w-52 h-52 rounded-2xl flex-col content-between p-5  hover:bg-custom-hover cursor-pointer'>
                <p>Recommend new types of water sports, including pros & cons</p>
                <img src={assets.compass_icon} alt="" className='w-10 mt-14 ml-32 p-1 bg-white rounded-full'/>
            </div>
            <div className='bg-custom-divbg w-52 h-52 rounded-2xl flex-col content-between p-5  hover:bg-custom-hover cursor-pointer'>
                <p>Generate unit tests for the following C# function</p>
                <img src={assets.code_icon} alt="" className='w-10 mt-14 ml-32 p-1 bg-white rounded-full'/>
            </div>
            <div className='bg-custom-divbg w-52 h-52 rounded-2xl flex-col content-between p-5  hover:bg-custom-hover cursor-pointer'>
                <p>Help me incorporate more plant-based options in my diet</p>
                <img src={assets.compass_icon} alt="" className='w-10 mt-14 ml-32 p-1 bg-white rounded-full'/>
            </div>
        </div>

    </div>
  )
}

export default Body