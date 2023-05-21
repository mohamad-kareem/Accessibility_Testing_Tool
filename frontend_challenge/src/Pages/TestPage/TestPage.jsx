import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import TopIdentifier from '../../Components/TopIdentifier/TopIdentifier'
import Circle from "../../Components/Circle/Circle"
import "./testpage.css"
import CheckList from '../../Components/CheckList/CheckList'
import { list1 } from '../../Components/TextContent'
const TestPage = () => {
  return (
    <div className='test-wrapper'>
      <SideBar/>
      <div className="test-container">
        <TopIdentifier title="Test"/>
        <div className="buttom-section">
          <div className="test-choices">
              <div className="circles-container">
                  <Circle content="Image alternative text"/>
                  <Circle content="Check Headers"/>
                  <Circle content="Buttons and Links"/>
              </div>
              <div className="checkbox-test">
                <CheckList title="Image alternative text" items={list1}/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestPage
