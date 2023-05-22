import "./signinsignout.css"
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent'
const SignInSignOut = () => {
  return (
    <div className='wrapper'>
        <input type="checkbox" id="click" area-hidden="true" />
        <div className="signup">
            <form >
                <label htmlFor="click" aria-hidden="true">Sign Up</label>
                <input type="text" name="text" placeholder="User name" required="" />
                <input type="email" name="email" placeholder="Email" required="" />
                <input type="password" name="password" placeholder="password" required="" />
                <ButtonComponent children="Sign Up"/>
            </form>
        </div>
        <div className="login">
            <form>
                <label htmlFor="click" aria-hidden="true">LogIn</label>
                <input type="email" name="email" placeholder='Email' required="" />
                <input type="password" name="password" placeholder="password" required=""/>
                <ButtonComponent children="LogIn"/>
            </form>
        </div>
    </div>
  )
}

export default SignInSignOut
