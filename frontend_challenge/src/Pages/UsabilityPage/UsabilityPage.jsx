import "./usabilitypage.css"
import SideBar from '../../Components/SideBar/SideBar'
import TopIdentifier from "../../Components/TopIdentifier/TopIdentifier"
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import Table from "../../Components/Table/Table";
import video from "../../assets/Digital Accessibility.mp4"
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
                        <a href="https://yale.app.box.com/s/cy25dkx36cciftfq6039jn9yrlhz7gwd" title="Visit Yale slides and download them">Download the Keyboard Operability Developer Brown Bag slides</a>
                    </div>
                    <div className="chart1">
                        <CircularProgressbar
                            value={20}
                            text={"20%"}
                            strokeWidth={5}
                            styles={buildStyles({pathColor: "green",textColor: "black",})}/>
                            <div className="chart-title"><h6>% of Accessibility websites</h6></div>
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
                    <div className="video-usability">
                        <video src={video} controls title="General information about accessibility"></video>
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
