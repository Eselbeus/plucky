import '../App.css';
import bench1 from '../assets/gallery/Bench-1.jpg'
import bench2 from '../assets/gallery/Bench-2.jpg'
import bwS from '../assets/gallery/BW-sitting.jpg'
import car from '../assets/gallery/Car-1.jpg'
import face1 from '../assets/gallery/Face-1.jpg'
import face2 from '../assets/gallery/Face-2.jpg'
import lightS from '../assets/gallery/Light-sitting.jpg'
import sittingC from '../assets/gallery/Sitting-color.jpg'
import squattingW from '../assets/gallery/Squatting-wall.jpg'
import standingC from '../assets/gallery/Standing-car.jpg'
import standingW from '../assets/gallery/Standing-wall.jpg'
import pMas from '../assets/gallery/P-maserati.jpg'
import pMas1 from '../assets/gallery/Patrice-Maserati1.jpg'
import pMas2 from '../assets/gallery/Patrice-Maserati2.jpg'
import pMas3 from '../assets/gallery/Patrice-Maserati3.jpg'
import pMas4 from '../assets/gallery/Patrice-Maserati4.jpg'

function Media(){
  return(
    <div>
      <div className="photo-container">
        <img className="photos" alt="" src={bench1}/>
        <img className="photos" alt="" src={bwS}/>
        <img className="photos" alt="" src={car}/>
        <img className="photos" alt="" src={pMas}/>
        <img className="photos" alt="" src={face1}/>
        <img className="photos" alt="" src={bench2}/>
        <img className="photos" alt="" src={pMas1}/>
        <img className="photos" alt="" src={face2}/>
        <img className="photos" alt="" src={lightS}/>
        <img className="photos" alt="" src={pMas2}/>
        <img className="photos" alt="" src={sittingC}/>
        <img className="photos" alt="" src={squattingW}/>
        <img className="photos" alt="" src={pMas3}/>
        <img className="photos" alt="" src={standingC}/>
        <img className="photos" alt="" src={standingW}/>
        <img className="photos" alt="" src={pMas4}/>
      </div>
    </div>
  )
}

export default Media;
