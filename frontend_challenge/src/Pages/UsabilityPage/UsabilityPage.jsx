import "./usabilitypage.css"
import SideBar from '../../Components/SideBar/SideBar'
import TopIdentifier from "../../Components/TopIdentifier/TopIdentifier"
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import Table from "../../Components/Table/Table";

const UsabilityPage = () => {
  return (
    <div className='usability-wrapper'>
        <SideBar/>
        <div className="usability-container">
            <TopIdentifier title="Usability & Web Accessibility "/>
            <div className="buttom-section">
                <div className="first-layer">
                    <div className="header-h1">
                        <h1>Focus and Keyboard operability</h1>
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
                    <h2>Users Who Do Not Use a Mouse</h2>
                    <p>Many computer users do not use a mouse, trackpad, or other <br /> pointing device when interacting with web pages, either due <br /> to preference or to impairment.<br /><br /> A user may not use a mouse because that user:</p>
                    <ul>
                        <li>is blind;</li>
                        <li>has low enough vision such that they have difficulty following a mouse;</li>
                        <li>has a motor impairment that prevents their using a mouse;</li>
                        <li>prefers to use a keyboard to complete certain tasks, such as filling out a form.</li>
                    </ul>
                        <div className="table-container1">
                            <h2>Requirements</h2>
                         <Table/>
                        </div>
                    
                </div>
              
            </div>
        </div>
      
    </div>
  )
}

export default UsabilityPage
