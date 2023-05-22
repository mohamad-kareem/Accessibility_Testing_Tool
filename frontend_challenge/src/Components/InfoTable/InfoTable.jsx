import "./infotable.css"
import { useState } from "react";
import { tab1,tab2,tab3 } from "../TextContent";
const InfoTable = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
  <div className="table-container">
    <div className="section-tabs">
        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Step One</button>
        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Step Two</button>
        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Step Three</button>
    </div>
    <div className="table-content">
        <div  className={toggleState === 1 ? "content  active-content" : "content"}>
            <h2>{tab1.title}</h2>
            <ul>
              <li>{tab1.info1}</li><br />
              <li>{tab1.info2}</li>
            </ul>
        </div>
        <div  className={toggleState === 2 ? "content  active-content" : "content"}>
            <h2>{tab2.title}</h2>
            <ul>
              <li>{tab2.info1}</li><br />
              <li>{tab2.info2}</li>
            </ul>
        </div>
        <div  className={toggleState === 3 ? "content  active-content" : "content"}>
            <h2>{tab3.title}</h2>
            <ul>
              <li>{tab3.info1}</li> <br />
              <li>{tab3.info2}</li>
             </ul>
        </div>
    </div>
    
  </div>
  )
}

export default InfoTable
