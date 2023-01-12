import { useState } from "react";
import { useFacultySetting } from "./useFacultySetting";
//import io from "socket.io-client";
//import { useEffect } from "react";
//import { useAuthContext } from "../hooks/useAuthContext";

export const useSession = () => {
    const [error, setError ] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useFacultySetting()
   // const {student} = useAuthContext()
   
   const url = "https://particify-backend.adaptable.app";

    //const socket = io.connect("http://localhost:4001");
   // const [room, setRoom] = useState("")
   //var room = {};

    const enterSession = async (class_Code) => {
        setIsLoading(true)
        setError(null)
    
        const session = {class_Code}
         room = {class_Code}
        const response = await fetch(url + '/api/students/student-home', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : 'https://particify.netlify.app',
                        'Access-Control-Allow-Credentials' : true},
            body: JSON.stringify(session),
            
        })
        const json = await response.json()
      
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok)
        {
            // save the user to local storage
            localStorage.setItem('session', JSON.stringify(json))

            // update auth context
            dispatch({type: 'ENTER_SESSION', payload: json})
            
            //if (room !== "") {
             //   socket.emit("join_room", session);
            //}

            setIsLoading(false)


        }
    }
   

    return {enterSession, isLoading, error, room}
}