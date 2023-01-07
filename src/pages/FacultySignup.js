import { useState } from "react";
import {useSignupFaculty} from '../hooks/useSignupFaculty';
import {Link} from 'react-router-dom'

const FacultySignUp = () => {
    const [nameofFaculty, setName ] = useState('')
    const [username, setUserName ] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [confirmpassword, setconfirmPassword ] = useState('')
    const {signupFaculty, error, isLoading} = useSignupFaculty()

const handleSubmit = async (e) => {
    e.preventDefault()
   
    await signupFaculty(nameofFaculty, username, email, password)
}

    return(
        <div className="center signup">
        <h1 id="bye"> Sign Up as Professor</h1>
            <form method="post" onSubmit={handleSubmit}>
                <div className="text_field">
                    <input type="text" required
                    onChange ={(e) => setName(e.target.value)}
                    value = {nameofFaculty}
                    />
                    <span></span>
                    <label>Name</label>
                </div>
                <div className="text_field">
                    <input type="text" required
                    onChange ={(e) => setUserName(e.target.value)}
                    value = {username}
                    />
                    <span></span>
                    <label>Username</label>
                </div>
                <div className="text_field">
                    <input type="text" required
                    onChange ={(e) => setEmail(e.target.value)}
                    value = {email}
                    />
                    <span></span>
                    <label>E-mail</label>
                </div>
                <div className="text_field">
                    <input type="password" required
                    onChange ={(e) => setPassword(e.target.value)}
                    value = {password}
                    />
                    <label>Password</label>
                </div>
              
                <div className="text_field">
                    <input type="password" required
                    onChange ={(e) => setconfirmPassword(e.target.value)}
                    value = {confirmpassword}
                    />
                    <label>Confirm Password</label>
                </div>

                <input type="submit" value="Sign Up" disabled={isLoading}></input>
              
                
                <div className="signup_link"> Have an account? <Link to="/login-faculty">Sign In</Link>
                </div>

                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )

}

export default FacultySignUp;
