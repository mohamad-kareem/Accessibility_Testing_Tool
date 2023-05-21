import "./circle.css"

const Circle = ({content, onClick}) => {
  return (
    <div className='circle' onClick={onClick}>
        <div className="circle-text">
        <p>{content}</p>
        </div>
     
    </div>
  )
}

export default Circle 
