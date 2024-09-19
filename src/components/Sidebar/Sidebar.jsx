import React from 'react'
import {assets} from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='min-h-screen inline-flex flex-col justify-between bg-custom-bg px-4 '>
      <div className='block ml-2 mt-5 flex-col'>
        <img src={assets.menu_icon} alt="" className='w-5'/>
        <div className='mt-16 -ml-2 inline-flex items-center gap-3 px-3 py-2 rounded-full bg-custom-btn cursor-pointer'>
          <img src={assets.plus_icon} alt="" className='w-4'/>
          <p className='px-3 text-sm text-[#9a9da2]'>New chat</p>
        </div>
        <div className='mt-1 flex-col items-center gap-3 py-2'>
          <p className='mt-3 mb-5'>Recent</p>
          <div className='flex items-start gap-3 py-2 text-sm hover:bg-custom-hover hover:rounded-full cursor-pointer'>
            <img src={assets.message_icon} alt="" className='w-5 ml-1'/>
            <p>Why I'm fucin' doing this? ...</p>
          </div>
        </div>
      </div>


      <div className='flex-col mb-5'>
        <div className='flex items-start gap-5 py-2  hover:bg-custom-hover hover:rounded-full cursor-pointer'>
          <img src={assets.question_icon} alt="" className='w-5 mt-0.5 ml-3'/>
          <p>Help</p>
        </div>
        <div className='flex items-start gap-5 py-2 hover:bg-custom-hover hover:rounded-full cursor-pointer'>
          <img src={assets.history_icon} alt="" className='w-5 mt-0.5 ml-3'/>
          <p>Activity</p>
        </div>
        <div className='flex items-start gap-5 py-2 hover:bg-custom-hover hover:rounded-full cursor-pointer'>
          <img src={assets.setting_icon} alt="" className='w-5 mt-0.5 ml-3'/>
          <p>Settings</p>
        </div>
        <div className='text-xs mt-10'>
          <p>Kolkata,West Bengal, India</p>
          <p>From your IP address Update your current location</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar