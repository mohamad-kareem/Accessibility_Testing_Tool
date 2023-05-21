import "./checklist.css"

const CheckList = ({ title, items }) => {
  return (
    <div className='checkbox-wrapper'>
        <div className="checkbox-container">
            <div className="checkbox-header">
                <h1>{title}</h1>
            </div>
            {items.map((item, index) => (
            <div className="checkbox-row" key={index}>
                <p>{item.label}</p>
                <label >
                    <input type="checkbox"  />
                    <span></span>
                </label>
            </div>
             ))}
        </div>
      
    </div>
  )
}

export default CheckList
