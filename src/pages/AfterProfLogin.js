
import React from "react";
import { Link } from 'react-router-dom'


const AfterProfLogin = () => {
    

    return(
        
       
    <div className="body">
    <div className="center home">  
        <h2 className="welcome">What will you do? <br/></h2>
        
       <Link to="/fac-dash">     <button type="submit" disabled={true}>Check Class Participation</button></Link>
        <br/><br/><br/>
       
        <Link to="/faculty-home">     <button type="submit">Setup A Class</button></Link> 
        
    </div>
</div>
        
    )
}

export default AfterProfLogin;