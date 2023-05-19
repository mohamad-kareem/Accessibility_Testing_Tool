import "./buttoncomponent.css"

const ButtonComponent = ({color="green",size="1rem",width="80px",children,onClick}) => {
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
   <button className='button' style={styles} onClick={onClick}>{children}</button>
  );
};

export default ButtonComponent;
