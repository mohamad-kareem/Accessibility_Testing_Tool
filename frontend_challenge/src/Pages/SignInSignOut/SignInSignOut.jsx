import "./signinsignout.css"
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent'
import Navbar from "../../Components/Navbar/Navbar"
const SignInSignOut = () => {
  return (
    <>
    <Navbar showLinks={false} buttonText="Home"/>
    <div className='wrapper'>
        <div className="greet-container">
            <h1>Welcome to the <br /> new Accessible Galaxy!</h1>
                <br />
            <div className='register-description'>
            <h4>Discover a world of accessibility and empower<br /> your digital creations.Join our vibrant community<br/> today to enhance usability, inclusivity, and user <br /> experience.</h4>
            </div>
        </div>
        <div className="container">
            <input type="checkbox" id="click" area-hidden="true" />
            <div className="signup">
                <form >
                    <label htmlFor="click" aria-hidden="true">Sign Up</label>
                    <input type="text" name="text" placeholder="User name" required="" />
                    <input type="email" name="email" placeholder="Email" required="" />
                    <input type="password" name="password" placeholder="password" required="" />
                    <div className="btn">
                        <ButtonComponent children="Sign Up" width="150px"/>
                    </div>
                </form>
            </div>
            <div className="login">
                <form>
                    <label htmlFor="click" aria-hidden="true">LogIn</label>
                    <input type="email" name="email" placeholder='Email' required="" />
                    <input type="password" name="password" placeholder="password" required=""/>
                    <div className="btn">
                        <ButtonComponent children="LogIn" width="150px" backgroundColor="black"color="white"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default SignInSignOut
