import "./buttoncomponent.css"

const ButtonComponent = ({backgroundColor="green",size="1rem",width="80px",children,onClick,color}) => {
  
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };
  
  const styles = {
    color:color,
    backgroundColor: backgroundColor,
    fontSize: size,
    borderRadius: '13px',
    padding: '5px',
    outline: 'none',
    border: '1px solid white',
    width: width,
    cursor: 'pointer' ,
  }

  return (
   <button className='button' onKeyDown={handleKeyDown} tabIndex="0" style={styles} onClick={onClick}>{children}</button>
  );
};

export default ButtonComponent;
