
import React from "react";

import { useState } from "react";

const FacultyDash = () => {
    const theScores = [];
    const theUsernames =[];
    const theAsk = [];
    const theRec = [];
    const theGive =[];
    const [uresults, setuResults] = useState([]);
// for getting average score
const getDash = async (e) => {
      
    const response = await fetch('/api/faculty/facdash')
    const data = await response.json()
 
    // get all scores
    const getRating = () => {
           return data
      }

    var i;
    const ratingScores = getRating()
   

    for(i=0; i< ratingScores.length; i++)
    {
        setuResults(ratingScores[i].score)
        theScores[i] = ratingScores[i].score;
        theUsernames[i] = ratingScores[i].username;
        theAsk[i] = ratingScores[i].participationAsk;
        theRec[i] = ratingScores[i].participationRec;
        theGive[i] = ratingScores[i].participationGive;

        return //uresults[i], theScores[i], theAsk[i], theGive[i], theRec[i], theUsernames[i];
    }
    
   // const addScores = theScores.reduce(reducer, 0);
  
    //const averageScores = addScores / ratingScores.length;
   
    //setAveScores(aveScore = averageScores)
    console.log(uresults[0])
   
    
    ;
};




    // to get the dashboard
    getDash();

    return(
        
       
        <div class="center3 dashboard">
        <table>
            <thead>
                <tr id ="label">
                    <td>Class Name</td>
                    <td>
                        Student Name
                    </td>
                    <td>
                        Score
                    </td>
                   
                    <td>
                        Ask
                    </td>
                    <td>
                        Recite
                    </td>
                    <td>
                        Give
                    </td>
                </tr>
            </thead>
            <tbody>
               <tr>
                    <td ></td>
                    <td ><p></p></td>
                    <td></td>   
                    <td></td>                   
                    <td></td>  
                    <td></td>                                   
                </tr>               
                <tr>
                    <td ></td>
                    <td><p></p></td>
                    <td></td> 
                    <td></td>                   
                    <td></td>       
                    <td></td>                                 
                </tr>               
                <tr>
                    <td></td>
                    <td><p></p></td>
                    <td></td>    
                    <td></td>                   
                    <td></td>       
                    <td></td>                           
                </tr> 
                
            </tbody>
        </table>
    </div>
    )
}

export default FacultyDash;