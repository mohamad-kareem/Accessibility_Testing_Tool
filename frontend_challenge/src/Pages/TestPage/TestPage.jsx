import "./test.css"
import TopIdentifier from '../../Components/TopIdentifier/TopIdentifier'
import SideBar from '../../Components/SideBar/SideBar'
import failImage from "../../assets/failImage.jpg"
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent"
const TestPage = () => {
  return (
    <div className='test-page-wrapper'>
      <SideBar/>
      <div className="test-page-container">
       <TopIdentifier title="Evaluation/Test"/>

        <div className="buttom-test-section">
          <h1>Accessibility Tests</h1>
          <div className="intro-test">
            <div className="welcome">
              <p>Welcome to our Testing Accessibility Tool, designed to ensure inclusivity and equal access for all users. </p>
              <p>Your website will be tested through out our advanced algorthims and <br /> Artificial intellegence tools:</p>
              <ul>
                <li>analyze the color contrast ratios of text and background elements on your web pages to ensure they meet the WCAG standards.</li>
                <br />
                <li>scanning for common accessibility issues such as missing alternative text for images, improper heading structure, form validation errors, and more.</li>
                <br />
                <li> evaluate the keyboard accessibility of your website by navigating through various pages and interactions using only the keyboard.</li>
                <br />
                <li>Check that link text provides clear and concise information about the destination or action it represents. </li>
              </ul>
            </div>
            <div className="test-image">
             <img src={failImage} alt="pic showing failer and success road" />
            </div>
          </div>
          <div className="actual-test">
           <h2>Enter Your web URL:</h2>
           <div className="url-box">
            <input type="text" placeholder="https://github.com/mohamad-kareem/CodeJunction" />
            <ButtonComponent children="Test" width="150px"/>
           </div>
          </div>
        </div>

      </div>
     
        
        
      
    </div>
  )
}

export default TestPage
