import "./logo.css"

const Logo = ({ padding , borderBottom}) => {

  const LogoStyle = { padding , borderBottom};
  return (
    <div className='logo-container' style={LogoStyle}>
        <div className="logo">
            <span className='partLogo'>A11Y</span>Mastery
        </div>
    </div>
  )
}

export default Logo
