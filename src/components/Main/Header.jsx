import React from 'react'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='flex mt-5 px-8 items-center justify-between min-h-3 '>
        <div>
            <h2 className='text-xl'>Gemini</h2>
        </div>
        <div className='flex gap-6'>
                <div className='flex gap-2 rounded-xl bg-custom-tryadv px-4 py-2 cursor-pointer border-none'>
                  <img src={assets.gemini_icon} alt="" className='w-5'/>
                  <h2 className='text-sm'>Try Gemini Advanced</h2>
                </div>
                <img src={assets.code_icon} alt="" className='w-8' />
            
                <img src={assets.user_icon} alt="" className='w-8 h-8 rounded-full cursor-pointer'/>
            
        </div>
    </div>
  )
}

export default Header