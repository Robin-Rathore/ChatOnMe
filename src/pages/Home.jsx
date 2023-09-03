import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Copyright from '../components/Copyright'

const Home = () => {
  return (
    <>
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
    <Copyright/>
    </>
  )
}

export default Home