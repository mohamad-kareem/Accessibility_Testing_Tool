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
        <div className="intro-content">
        <h1>Website<br></br>Optimization</h1>
        <p>"Ensure your website's accessibility with
          <br/> our comprehensive testing tool ."</p>
        </div>
      
    </div>
  )
}

export default LandingIntro 

