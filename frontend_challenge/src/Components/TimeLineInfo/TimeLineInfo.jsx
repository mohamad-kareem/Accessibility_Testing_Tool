import "./timelineinfo.css"
const TimeLineInfo = ({ position, title, description, image, className }) => {
  return (
    <div className="timeline-wrapper">
        <div className={`timeline-container ${position} ${className}`}>
      <img src={image} alt="ordered number" />
            <div className="timeline-box">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default TimeLineInfo
