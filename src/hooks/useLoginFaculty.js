import { useState } from "react";
import { useAuthContextFaculty } from './useAuthContextFaculty';

export const useLoginFaculty = () => {
    const [error, setError ] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContextFaculty()

    const url = "https://particify-backend.adaptable.app";

    const loginFaculty = async (username, password) => {
        setIsLoading(true)
        setError(null)
    
        const faculty = {username, password}

        const response = await fetch(url + '/api/faculty/login-faculty', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
          //  'Access-Control-Allow-Origin' : 'https://particify.netlify.app',
          //  'Access-Control-Allow-Credentials' : true,},
        },
            body: JSON.stringify(faculty),
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok)
        {
            // save the user to local storage
            localStorage.setItem('faculty', JSON.stringify(json))

            // update auth context
            dispatch({type: 'LOGIN-FACULTY', payload: json})
            setIsLoading(false)
        }
    }

    return {loginFaculty, isLoading, error}
}