import '../App.css';
import ig from '../assets/ig-icon-white.webp'
import yt from '../assets/yt-icon-white.webp'
import sp from '../assets/sp-icon-white.webp'
import it from '../assets/itunes-icon-white.webp'
import sc from '../assets/soundcloud-icon-white.webp'

function Footer(){
  return(
    <div className="footer">
      <h1>Contact</h1>
      <p>For booking contact: <a href="mailto:p.luckyinfo@gmail.com">p.luckyinfo@gmail.com</a></p>
      <span className="social-icons">
        <a href="https://www.instagram.com/p.lucky__official"><img src={ig}/></a>
        <a href="https://www.youtube.com/channel/UCee6mxIZsuwynoxdpuZa8zg"><img src={yt}/></a>
        <a href="https://open.spotify.com/artist/2LBJr3uzzw5jg2ngbh2PpC"><img src={sp}/></a>
        <a href="https://music.apple.com/us/artist/p-lucky/1512324079"><img src={it}/></a>
        <a href="https://soundcloud.com/user-771075733"><img src={sc}/></a>
      </span>
      <p></p>
      <a href='http://www.freevisitorcounters.com' className="counter-text">freecounter</a> <script type='text/javascript' src='https://www.freevisitorcounters.com/auth.php?id=7a38c9e853c4900287d6182e453819c4e6933356'></script>
<script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/786538/t/5"></script>
      <p>2021</p>
    </div>
  )
}

export default Footer;
