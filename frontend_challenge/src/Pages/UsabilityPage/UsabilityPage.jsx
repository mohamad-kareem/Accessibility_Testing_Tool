import "./usabilitypage.css"
import SideBar from '../../Components/SideBar/SideBar'
import TopIdentifier from "../../Components/TopIdentifier/TopIdentifier"

const UsabilityPage = () => {
  return (
    <div className='usability-wrapper'>
        <SideBar/>
        <div className="usability-container">
            <TopIdentifier title="Usability & Web Accessibility "/>
            <div className="buttom-section">
                <div className="header">
                    <h1>Focus and Keyboard operability</h1>
                    <a href="https://yale.app.box.com/s/cy25dkx36cciftfq6039jn9yrlhz7gwd" title="Visit Yale slides and download them">Download the Keyboard Operability Developer Brown Bag slides</a>
                </div>
                <div className="mid-section">
                    <h2>Users Who Do Not Use a Mouse</h2>
                </div>
              
            </div>
        </div>
      
    </div>
  )
}

export default UsabilityPage
