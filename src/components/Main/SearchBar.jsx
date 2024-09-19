import React from 'react'
import { assets } from '../../assets/assets'

const SearchBar = () => {
  return (
    <div className='flex-col ml-44 pl-1 mt-24'>
        <div className='flex rounded-full px-5 py-3 bg-custom-divbg w-10/12'>
            <input type="text" name="" id="" placeholder='Enter a prompt here' className='w-11/12 bg-custom-divbg ml-2'/>
            <img src={assets.gallery_icon} alt="" className='ml-5 w-6 mx-2 m-2'/>
            <img src={assets.mic_icon} alt="" className='w-6 mx-2 m-2'/>
        </div>
        <div>
            <p className='text-xs pt-3 ml-32'>Gemini may display inaccurate info, including about people, so double-check its responses. <u>Your privacy & Gemini Apps</u></p>
        </div>
    </div>
  )
}

export default SearchBar