import "./usabilitypage.css"
import SideBar from '../../Components/SideBar/SideBar'
import TopIdentifier from "../../Components/TopIdentifier/TopIdentifier"
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Table from "../../Components/Table/Table";
import video from "../../assets/Digital Accessibility.mp4"
import info from "../../icons/information.png"
import {UsabilityText} from "../../Components/TextContent"
const UsabilityPage = () => {
  return (
    <div className='usability-wrapper'>
        <SideBar/>
        <div className="usability-container">
            <TopIdentifier title="Usability & Web Accessibility "/>
            <div className="buttom-section">

                <div className="first-layer">
                    <div className="header-h1">
                        <h1>{UsabilityText.title}</h1>
                        <a href={UsabilityText.href} title="Visit Yale slides and download them">{UsabilityText.link}</a>
                    </div>
                    <div className="chart1">
                        <CircularProgressbar
                            value={20}
                            text={"20%"}
                            strokeWidth={5}
                            styles={buildStyles({pathColor: "green",textColor: "black",})}/>
                            <div className="chart-title"><h6>{UsabilityText.chartTitle}</h6></div>
                    </div>     
                </div>
                
                <br />
                <div className="mid-section">

                    <h2>{UsabilityText.title2}</h2>
                    <p dangerouslySetInnerHTML={{ __html: UsabilityText.par1 }}></p>

                    <ul>
                        <li>{UsabilityText.list1}</li>
                        <li>{UsabilityText.list2}</li>
                        <li>{UsabilityText.list3}</li>
                        <li>{UsabilityText.list4}</li>
                    </ul><br />

                    <p dangerouslySetInnerHTML={{ __html: UsabilityText.par2 }}></p><br />
                    <div className="video-container">
                        <div className="video-usability">
                            <video src={video} controls title="General information about accessibility"></video>
                        </div>
                        <div className="video-info">
                            <p><FontAwesomeIcon icon={faCircleInfo} /> {UsabilityText.info}</p>
                        </div>
                    </div>
                 

                        <div className="table-container1">
                            <h2>{UsabilityText.tableTitle}</h2>
                            <Table/>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UsabilityPage
