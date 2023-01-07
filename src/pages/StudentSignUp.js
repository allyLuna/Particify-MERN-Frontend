import { useState } from "react";
import {useSignup} from '../hooks/useSignup';
import {Link} from 'react-router-dom'
const StudentSignUp = () => {
    const [nameofStudent, setName ] = useState('')
    const [username, setUserName ] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [confirmpassword, setconfirmPassword ] = useState('')
    const {signup, error, isLoading} = useSignup()

const handleSubmit = async (e) => {
    e.preventDefault()
   
    await signup(nameofStudent, username, email, password)
}

    return(
        <div className="center signup">
        <h1 id= "bye"> Sign Up as Student</h1>
            <form method="post" onSubmit={handleSubmit}>
                <div className="text_field">
                    <input type="text" required
                    onChange ={(e) => setName(e.target.value)}
                    value = {nameofStudent}
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
              
                
                <div className="signup_link"> Have an account? <Link to="/login-student">Sign In</Link>
                </div>

                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )

}

export default StudentSignUp;
