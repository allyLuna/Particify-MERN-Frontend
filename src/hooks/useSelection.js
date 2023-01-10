import { useState } from "react";
import { useAuthContext} from './useAuthContext';

export const useSelection = () => {
    const [error, setError ] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {student} = useAuthContext()

    const url = "https://particify-backend.adaptable.app";

    const selection = async (student_uname, eventTimestamp, objectName) => {
        setIsLoading(true)
        setError(null)
       
        if (!student) {
            setError('You must be logged in')
            return
          }
        const selectionDts = {student_uname, eventTimestamp, objectName}

        const response = await fetch(url + '/api/students/createSelection', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                      'Authorization': `Bearer ${student.token}`,
                      //'Access-Control-Allow-Origin' : 'https://particify.netlify.app',
                      //'Access-Control-Allow-Credentials' : true},
        },
             mode: "no-cors",
            body: JSON.parse(selectionDts)
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok)
        {
            setIsLoading(false)
        }
    }

    return {selection, isLoading, error}
}