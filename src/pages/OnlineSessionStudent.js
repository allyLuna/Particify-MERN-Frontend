import React from "react";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSelection } from "../hooks/useSelection";
import Dialog from '../components/Msgdlg';
import io from "socket.io-client";
import { useEffect } from "react";
import { useFacultySetting } from '../hooks/useFacultySetting'
import { useSession } from "../hooks/useSession";

const url = 'https://mernsample-tool.adaptable.app'

const OnlineSessionStudent = () => {
    var [Score, setScore ] = useState(2000)
    var [parAsk, setAsk ] = useState(0)
    var [parRec, setRec ] = useState(0)
    var [parGive, setGive ] = useState(0)

    const {room} = useSession()
    const {student} = useAuthContext()
    const {session} = useFacultySetting()
    const {selection, error} = useSelection();
    const [currScore, setCurrentScore] = useState()

    // for dialog titles
    var[dlgread, setDlg] = useState(0)
    


    const[rewards, setRewards] = useState('')
    const [showTaskDlg, setShowTaskDlg] = useState(false);
    var [dlgTitle, setdlgTitle] = useState('')
    const [selected, setSelected] = useState(null);
    const [idSelected, setidSelected] = useState('');
  //  const [idStud, setidStud] = useState('');
   // const [results, setResults] = useState([]);
    const [uresults, setuResults] = useState([]);
    const [sresults, setsResults] = useState([]);
    const [uresults2, setuResults2] = useState([]);
    const [sresults2, setsResults2] = useState([]);
    const [uresults3, setuResults3] = useState([]);
    const [sresults3, setsResults3] = useState([]);
  //  var theScores = [];


//-----------------ACTION BUTTONS-------------------------------

    //Ask
    const btnAsk = async (e) => {
        
        e.preventDefault()
        console.log(e.timeStamp, e.target.value);
        // input for selection
        await selection(student.username, e.timeStamp , e.target.value);
       
       
       // setShowTaskDlg(true);
        setScore(Score = Score + 100);
        setAsk(parAsk+1);
        //setdlgTitle(e.target.value)
        setidSelected("Askaquestion")
        setDlg(dlgread = 1);
        fetchFirst();
        updateScore();
        titleDlg(); updateFreq();
        socket.emit("send_message", room);
       // console.log({room})
        
    }
        
    //Recite  
    const btnRecite = async (e) =>  {
        e.preventDefault()
        console.log(e.timeStamp);
         // input for selection
        await selection(student.username,e.timeStamp , e.target.value)
        
        setDlg(dlgread = 2);
        //setShowTaskDlg(true);
        setdlgTitle(e.target.value)
        setScore(Score = Score + 500);
        setRec(parRec+1);
        setidSelected("Recite");
        fetchFirst();
        updateScore();
        titleDlg();updateFreq();
       socket.emit("send_message", room);
       
        
    }

    //Give Idea
    const btnGive = async (e) =>  {
        e.preventDefault()
        console.log(e.timeStamp);
         // input for selection
        await selection(student.username,e.timeStamp , e.target.value)
       
        setDlg(dlgread = 3);
        //setShowTaskDlg(true);
        setdlgTitle(e.target.value)
        setScore(Score = Score + 200);
        setGive(parGive+1);
        fetchFirst();
        updateScore();
        titleDlg(); updateFreq();
        setidSelected("Giveoutidea")
       socket.emit("send_message", room);
       
    };

    
//---------------------------END----------------------------


//--------------------FOR DIALOG BUTTONS--------------------

    function cancel() {
    console.log('Cancel');
    deleteSelection();
    setShowTaskDlg(false);
    //updateScore();
    setSelected();
    theReward()
    setdlgTitle("");
    setDlg(null);
    
   // getResults();
   // getLeaderboards();
    };

    const titleDlg = () =>{
        if(dlgread === 1)
        {setdlgTitle("Ask A Question")}
        else if (dlgread === 2)
        {setdlgTitle("Recite")}
        else if(dlgread === 3)
        {setdlgTitle("Give out Idea")}
    }

//-------------END---------------


//-----FOR STUDENT SELECTION--------
    const fetchFirst = async (e) => {
        const response = await fetch(url + '/api/students/selectedFirst')
        const data = await response.json()
         setSelected(data.student_uname)
        //setidStud(data.id)
       
         return data;
    };
//-------------END---------------



//-----FOR UPDATING SCORE, FREQUENCY IN DB: DELETING SELECTION, GETTING LEADERBOARD--------
    
    //score update
    const updateScore = async (e) => {
        
        const response = await fetch(url + '/api/students/updateScore/' + selected, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json',
                      'Authorization': `Bearer ${student.token}`},
            body:   JSON.stringify({score:Score})
            
        })
        
        const data = await response.json()
         
         return data;
    };

    //frequency update
    const updateFreq = async (e) => {
        
        const response = await fetch(url + '/api/students/updateParticipation/' + student.username, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json',
                      'Authorization': `Bearer ${student.token}`},
            body:   JSON.stringify({participationAsk:parAsk, participationRec:parRec,participationGive:parGive})
            
        })
        
        const data = await response.json()
        
         return data;
    };

    //for deletion 
    const deleteSelection = async (e) => {
        
        const response = await fetch(url + '/api/students/deleteSelection/' + idSelected, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json',
                      'Authorization': `Bearer ${student.token}`}
            
        })
        
        const data = await response.json()
         
         return data;
    };

    // for leaderboard array results
    const getResults = async (e) => {
        
       
            const response = await fetch(url + '/api/students/getResults')
            const data = await response.json()
          
          setuResults(data[0].username)
          setsResults(data[0].score)
          setuResults2(data[1].username)
          setsResults2(data[1].score)
          setuResults3(data[2].username)
          setsResults3(data[2].score)
            console.log(data)
             return data;
        
    };

    //get current score
    const getStudentScore = async (e) => {
        
        const response = await fetch(url + '/api/students/getScore/' + student.username)
        const data = await response.json()
        setCurrentScore(data[0].score)
        console.log(currScore)
        return data;
    };



    const theReward = async (e) => {
        
    const response = await fetch(url + '/api/faculty/getReward/' + session.class_Code)
    const data = await response.json()
    setRewards(data[0].class_Reward)
    console.log(data[0].class_Reward)
    return data;
};



//-------------END-----------------------------


//-------------SERVER CONNECTION---------------
    
   
    //const socket = io.connect("https://particify-backend.adaptable.app:80");
    
    const socket = io.connect('https://mernsample-tool.adaptable.app/',
        { //cors:{origin: "https://enchanting-madeleine-c3ff07.netlify.app"} ,
         transports: ['websocket','polling'],
         upgrade:false})
    // kay useeffect dapat ung paghcnage ng leaderboards
    useEffect(() => {
        socket.on("receive_message", () => {
           fetchFirst();
           getStudentScore();
           getResults();
           setShowTaskDlg(true);	
           
    });
    }, [])

    
//-------------END------------------------------
    

    return(
        <><>
        
        <div class="body dark">
            <div className="center2 recite">
            <h2 className="score" id="currentScore">{student.username}: {currScore}</h2>
            <br /><br /><br />
                <input type="submit" id="btnAsk" value="Ask a question" onClick={btnAsk} /><br /><br /><br />
                <input type="submit" id="btnRecite" value="Recite" onClick={btnRecite} /><br /><br /><br />
                <input type="submit" id="btnGive" value="Give out idea" onClick={btnGive} /><br /><br /><br />
               
                <br /><br /><br /><br /><br />
                <h2 className="reward" id="currentScore"> Reward for Today: <br />{rewards}</h2>
                <Dialog 
                show = {showTaskDlg} 
                cancel= {cancel}  
                title ={dlgTitle}
                description= {selected}
                />
                
              
            </div>
            <div className="center bulletin" id="bulletin">
                <h1>Chosen Student for Recitation</h1>
               
                <div className="signup_link">
                </div>
            </div>
        </div><div className="center3 leaderboard">
                <table id="myTable">
                    <thead>
                        <tr id="label">
                            <td>Rank</td>
                            <td>
                                Player
                            </td>
                            <td>
                                Score
                            </td>

                        </tr>
                    </thead>
                    <tbody>
                        <tr id="winner">
                            <td>1</td>
                            <td><h6>{uresults}</h6></td>
                            <td><h6>{sresults}</h6></td>
                        </tr>
                        <tr id="runner-up">
                            <td>2</td>
                            <td><h6>{uresults2}</h6></td>
                            <td><h6>{sresults2}</h6></td>
                        </tr>
                        <tr id="second-runner-up">
                            <td>3</td>
                            <td><h6>{uresults3}</h6></td>
                            <td><h6>{sresults3}</h6></td>
                        </tr>

                    </tbody>
                </table>
                <div className="signup_link">
                    {error && <div className="error">{error}</div>}
                    </div>
               
            </div></></>
        
    )
}

export default OnlineSessionStudent;