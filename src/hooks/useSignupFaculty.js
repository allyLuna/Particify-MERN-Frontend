import { useState } from "react";
import { useAuthContextFaculty} from './useAuthContextFaculty';

export const useSignupFaculty = () => {
    const [error, setError ] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContextFaculty()

    const url = "https://particify-backend.adaptable.app";
    const net = "https://merry-churros-dc63e3.netlify.app"
    const signupFaculty = async (nameofFaculty, username, email, password) => {
        setIsLoading(true)
        setError(null)
    
        const faculty = {nameofFaculty, username, email, password}

        const response = await fetch(url + '/api/faculty/signup-faculty', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
           'Access-Control-Allow-Origin' : net,
            'Access-Control-Allow-Credentials' : true
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

    return {signupFaculty, isLoading, error}
}