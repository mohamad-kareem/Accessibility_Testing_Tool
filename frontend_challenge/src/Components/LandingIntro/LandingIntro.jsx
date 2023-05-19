import "./landingintro.css"
import Video from '../../assets/pexels-pressmaster-3130284-1280x720-30fps.mp4'
const LandingIntro = () => {
  return (
    <div className='intro-container'>
        <div className="intro-video">
            <div className="video">
                <video src={Video} autoPlay loop muted></video>
            </div>
        </div>
      
    </div>
  )
}

export default LandingIntro 

