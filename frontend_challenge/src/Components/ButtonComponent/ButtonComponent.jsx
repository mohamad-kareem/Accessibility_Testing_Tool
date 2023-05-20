import "./buttoncomponent.css"

const ButtonComponent = ({color="green",size="1rem",width="80px",children,onClick}) => {
  
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };
  
  const styles = {
    backgroundColor: color,
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
