import { useState } from "react";
import { useSession } from "../hooks/useSession";


const StudentHome = () => {
    const [class_Code, setClassCode] = useState(null)
    const {enterSession, error, isLoading} = useSession()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
   
        await enterSession(class_Code)
        
    }

    
    
    return(
        <>
       <div className="body">
                <div className="center code">
                    <h1 className="welcome">Enter Code</h1>
                    <form method="post" id="form_id" name="myform" onSubmit={handleSubmit}>
                        <div className="text_field">
                            <input type="password" name="code" id="code" required
                           onChange={(e) => setClassCode(e.target.value)}
                           value={class_Code} />
                            </div>
                        <input type="submit" value="START!" id="submit" disabled = {isLoading} />
                        {error && <div className="error">{error}</div>}
                        <div className="signup_link">
                        </div>
                       
                    </form>
                </div>
                
            </div><script src="script.js"></script></>
    )
}

export default StudentHome;
