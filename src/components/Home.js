import React from 'react'
import logo from '../assets/Logo.jpg'
import vid1 from '../assets/VID-1.mp4'
import ig from '../assets/ig-icon.png'
import yt from '../assets/yt-icon.png'
import sp from '../assets/spotify-icon.png'
import it from '../assets/itunes-icon-white.webp'
import sc from '../assets/soundcloud-icon-t.png'
import '../App.css';

function Home(){
  return(
    <div className='home'>
      <img className="logo" alt="logo" src={logo} />
      <div className="bio">
      <p>Follow on</p>
      <span className="social-icons">
        <a href="https://www.instagram.com/p.lucky__official"><img className="social-icon" src={ig} alt="instagram"/></a>
        <a href="https://www.youtube.com/channel/UCee6mxIZsuwynoxdpuZa8zg"><img className="social-icon" src={yt} alt="youtube"/></a>
        <a href="https://open.spotify.com/artist/2LBJr3uzzw5jg2ngbh2PpC"><img className="social-icon" src={sp} alt="spotify"/></a>
        <a href="https://music.apple.com/us/artist/p-lucky/1512324079"><img className="social-icon" src={it} alt="apple music"/></a>
        <a href="https://soundcloud.com/user-771075733"><img className="social-icon" src={sc} alt="soundcloud"/></a>
      </span>
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
