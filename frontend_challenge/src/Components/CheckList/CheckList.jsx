import "./checklist.css"

const CheckList = () => {
  return (
    <div className='checkbox-wrapper'>
        <div className="checkbox-container">
            <div className="checkbox-header">
                <h1>alt text</h1>
            </div>
            <div className="checkbox-row">
                <p>Is the image decorative?</p>
                <label >
                    <input type="checkbox"  />
                    <span></span>
                </label>
            </div>
           
        </div>
      
    </div>
  )
}

export default CheckList
