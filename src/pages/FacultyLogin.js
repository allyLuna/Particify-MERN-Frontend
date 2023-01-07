import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoginFaculty } from "../hooks/useLoginFaculty";
//import { useAuthContext } from "../hooks/useAuthContext"

const FacultyLogin = () => {
    const [username, setUsername ] = useState('')
    const [password, setPassword ] = useState('')
    const {loginFaculty, error, isLoading} = useLoginFaculty()
   

const handleSubmit = async (e) => {
    e.preventDefault()

    await loginFaculty (username, password)
    
}


    return(
        <><div className="body">
            <div className="center signup">
                <p className="welcome"> Sign in as Professor</p>
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
                        <Link to="/signup-faculty">Sign Up</Link>
                    
                        {error && <div className="error">{error}</div>}
                    </div>
                </form>
            </div>
        </div><script src="script.js"></script></>
    )

}

export default FacultyLogin;
