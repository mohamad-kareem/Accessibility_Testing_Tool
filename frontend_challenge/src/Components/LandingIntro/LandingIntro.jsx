import "./landingintro.css"
import { intro } from "../TextContent";
import Video from '../../assets/pexels-pressmaster-3130284-1280x720-30fps.mp4'
import ButtonComponent from "../ButtonComponent/ButtonComponent"
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
const LandingIntro = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/checklist');
  };
  const [refH1, reachH1] = useInView({
    triggerOnce: true,
  });
  const [refP, reachP] = useInView({
    triggerOnce: true,
  });


  return (
    <div className='intro-container'>
        <div className="intro-video">
            <div className="video">
                <video src={Video} autoPlay loop muted></video>
            </div>
        </div>
        <div className="intro-content">
        <h1 ref={refH1} className={`intro-heading ${reachH1 ? 'show' : ''}`}>{intro.intro1}<br></br>{intro.intro2} <span><ButtonComponent children='Get Started' width="120px" onClick={handleButtonClick}/></span></h1>
        <p ref={refP} className={`intro-description ${reachP ? 'show' : ''}`}>"{intro.intro3}
          <br/>{intro.intro4}"</p>
        </div>
      
    </div>
  )
}

export default LandingIntro 

