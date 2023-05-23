import "./headerpage.css"
import InfoTable from '../../Components/InfoTable/InfoTable'
import SideBar from '../../Components/SideBar/SideBar'
import TopIdentifier from "../../Components/TopIdentifier/TopIdentifier"
import headpic from "../../assets/header-image.png"
import sad from "../../assets/tenor.gif"
import { headerPageInfo,SematicFail } from "../../Components/TextContent"
import failure from "../../assets/failed-pic.jpg"
import { useInView } from 'react-intersection-observer';
const HeadersPage = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  
  return (
    <div className='header-wrapper'>
        <SideBar/>
        <div className="header-container">
            <TopIdentifier title="Semantics"/>
            <div className="text-info-container">
                <div className="left-content">
                        <h1>{headerPageInfo.title}</h1>
                        <p dangerouslySetInnerHTML={{ __html: headerPageInfo.info }}></p>
                </div>
                <div className="right-pic">
                    <img src={headpic} alt="showing how headers must be displayed" />
                </div>
            </div>
            <div className="title-table">
              A Sequential Guide to Semantic Structure:
            </div>
            <InfoTable/>
            
            <div className={`failures-test-section ${inView ? 'visible' : ''}`} ref={ref}>
              <div className="fail-title">
                <img src={sad} alt="sad emoji"/>
               <h2>Incorect Semantics !!!</h2>
              </div>
              <div className="failures-test-container">
                <div className="failure-left">
                  <p>{SematicFail.info}</p>
                </div>
                <div className="failure-right">
                  <img src={failure} alt="failing the test" />
                </div>
              </div>
              
            </div>
       </div>
    </div>
  )
}

export default HeadersPage
