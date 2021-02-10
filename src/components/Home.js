import React from 'react'
import logo from '../assets/Logo.jpg'
import vid1 from '../assets/VID-1.mp4'
import '../App.css';

function Home(){
  return(
    <div className='home'>
      <img className="logo" alt="logo" src={logo} />
      <div className="bio">
      <p>P. Lucky is a rapper and songwriter from Vienna, Austria. </p>
      <p>"I began rapping at the age of 31 and I wrote and recorded my first song in April, 2020. One of my favorite artists/musical influences is Travis Garland. In my free time I enjoy movies, hanging out with friends and going to the gym.

Every feeling and every emotion can be expressed through music; choose yours and feel it."</p>
      <p>-P.Lucky</p>
      </div>
      <video className="home-vid" controls="true" src={vid1} />
    </div>
  )
}

export default Home;
