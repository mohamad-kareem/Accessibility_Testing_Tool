import "./Test.Component.jsx"
import fail from "../../icons/fail.png"
import pass from "../../icons/pass.png"
const TestComponent = () => {
  return (
    <div className='test-wrapper'>
      <div className="test-container">
      <table className="table">
      <thead>
        <tr>
          <th>Test</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>color contrast</td>
          <td><img src={fail} alt="result failed" /></td>
        </tr>
        <tr>
          <td>keyboard accessibility</td>
          <td><img src={pass} alt="result passed" /></td>
        </tr>
        <tr>
          <td>buttons and links</td>
          <td><img src={pass} alt="result passed" /></td>
        </tr>
        <tr>
          <td>Descriptive heading</td>
          <td><img src={fail} alt="result failed" /></td>
        </tr>
      </tbody>
    </table>
      </div>
    </div>
  )
}

export default TestComponent
