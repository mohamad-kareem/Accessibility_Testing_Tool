import React, {useState} from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import TopIdentifier from '../../Components/TopIdentifier/TopIdentifier'
import Circle from "../../Components/Circle/Circle"
import "./testpage.css"
import CheckList from '../../Components/CheckList/CheckList'
import { list1, list2, list3} from '../../Components/TextContent'
const TestPage = () => {

  const [selectedList, setSelectedList] = useState(null);

  const handleCircleClick = (list) => {
    setSelectedList(list);
  };

  return (
    <div className='test-wrapper'>
      <SideBar/>
      <div className="test-container">
        <TopIdentifier title="Test"/>
        <div className="buttom-section">
          <div className="test-choices">
              <div className="circles-container">
                  <Circle content="Image alternative text" onClick={() => handleCircleClick(list1)}/>
                  <Circle content="Check Headers" onClick={() => handleCircleClick(list2)}/>
                  <Circle content="Buttons and Links" onClick={() => handleCircleClick(list3)}/>
              </div>
              <div className="checkbox-test">
                {selectedList && (
                <CheckList title={selectedList.title} items={selectedList.items} />
                
              )}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestPage
