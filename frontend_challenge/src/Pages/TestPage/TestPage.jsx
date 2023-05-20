import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import TopIdentifier from '../../Components/TopIdentifier/TopIdentifier'
import Circle from "../../Components/Circle/Circle"
import "./testpage.css"
const TestPage = () => {
  return (
    <div className='test-wrapper'>
      <SideBar/>
      <div className="test-container">
        <TopIdentifier title="Test"/>
        <div className="buttom-section">
          <div className="test-choices">
              <div className="circles-container">
                  <Circle/>
                  <Circle/>
                  <Circle/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestPage
