import React, {useState} from 'react';
import '../ComponentsCss/Auth.css'

const Auth = () => {
    const [toggleauth, setToggleauth] = useState(false)
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

     // auth toggle
    const signupForm = () => {
        setToggleauth(!toggleauth)
    }
    const signinForm = () => {
        setToggleauth(false)
    }
    // auth toggle ends here

    return (
        <div className={`body ${toggleauth ? 'activebody' : ''}`}>
            <div className="container_login">
                <div className="BlueBg">
                    <div className="box signin">
                        <h2>Already Have Account ?</h2>
                        <button className="signinBtn" onClick={signinForm}>Sign in</button>
                    </div>
                    <div className="box signup">
                        <h2>Don't Have Account ?</h2>
                        <button className="signupBtn" onClick={signupForm}>Sign up</button>
                    </div>

                </div>
                <div className={`formBx ${toggleauth ? 'activeform' : ''}`}>
                    <div className="form signinForm">
                        <form>
                            <h3>Sign In</h3>
                            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="submit" value="Login"  />
                            <a href="" className="forgot">Forgot password</a>
                        </form>
                    </div>
                    <div className="form signupForm">
                        <form>
                            <h3>Sign Up</h3>
                            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input className="submitBtn" type="submit" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;
