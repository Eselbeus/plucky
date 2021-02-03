import React from 'react'
import logo from '../assets/Logo.jpg'
import vid1 from '../assets/VID-1.mp4'
import '../App.css';

function Home(){
  return(
    <div className='home'>
      <img src={logo} />
      <video controls="true" src={vid1} />
    </div>
  )
}

export default Home;
