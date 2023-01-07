
import React from "react";
import { Link } from 'react-router-dom'


const Home = () => {
    

    return(
        
       
    <div className="body">
    <div className="center home">  
        <h2 className="welcome">Hello! What are you? <br/></h2>
        
       <Link to="/login-student">     <button type="submit">Student</button></Link>
        <br/><br/><br/>
       
        <Link to="/login-faculty">     <button type="submit">Professor</button></Link> 
        
    </div>
</div>
        
    )
}

export default Home;