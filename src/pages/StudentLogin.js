import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
//import { useAuthContext } from "../hooks/useAuthContext"

const StudentLogin = () => {
    const [username, setUsername ] = useState('')
    const [password, setPassword ] = useState('')
    const {login, error, isLoading} = useLogin()
    //const {student} = useAuthContext()

    /*const handleClick = () => {
        <Link to="/student-home"/>
    }*/

const handleSubmit = async (e) => {
    e.preventDefault()

    await login (username, password)
    
}


    return(
        <><div className="body">
            <div className="center signup">
                <p className="welcome"> Sign in as Student</p>
                <form method="post" onSubmit={handleSubmit}>

                    <div className="text_field">
                        <input type="text" required name="username" id="user"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username} />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className="text_field">
                        <input type="password" required name="pass" id="pass"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} />
                        <label>Password</label>
                    </div>


                    <input type="submit" value="Sign in" id="submit" disabled={isLoading}/>

                    <div className="signup_link"> Don't have an account? 
                        <Link to="/signup-student">Sign Up</Link>
                    
                        {error && <div className="error">{error}</div>}
                    </div>
                </form>
            </div>
        </div><script src="script.js"></script></>
    )

}

export default StudentLogin;
