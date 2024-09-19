import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Main/Header'
import Body from './components/Main/Body'
import SearchBar from './components/Main/SearchBar'

function App() {

  return (
  
      <div className='flex'>
        <div>
          <Sidebar/>
        </div>
          <div className='flex-1 min-h-screen relative'>
           <Header/>
           <Body/>
           <SearchBar/>
          </div>
      </div>
    
  )
}

export default App
