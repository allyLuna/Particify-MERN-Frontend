
import React from "react";
import { Link } from 'react-router-dom'


const AfterLogin = () => {
    

    return(
        
       
    <div className="body">
    <div className="center home">  
        <h2 className="welcome">What will you do? <br/></h2>
        
       <Link to="/stud-dash">     <button type="submit" disabled={true}>Check my Participation</button></Link>
        <br/><br/><br/>
       
        <Link to="/student-home">     <button type="submit">Join A Class</button></Link> 
        
    </div>
</div>
        
    )
}

export default AfterLogin;