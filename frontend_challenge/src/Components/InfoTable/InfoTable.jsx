import "./infotable.css"
import { useState } from "react";

const InfoTable = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
  <div className="table-container">
    <div className="section-tabs">
        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>1</button>
        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>2</button>
        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>3</button>
    </div>
    <div className="table-content">
        <div className="inner-section">
            <h2></h2>
            <p></p>
        </div>
        <div className="section-two">
            <h2></h2>
            <p></p>
        </div>
        <div className="section-three">
            <h2></h2>
            <p></p>
        </div>
    </div>
    
  </div>
  )
}

export default InfoTable
