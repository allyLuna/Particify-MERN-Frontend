import { useState } from "react";
import { useAuthContextFaculty} from './useAuthContextFaculty';

export const useSignupFaculty = () => {
    const [error, setError ] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContextFaculty()

    const signupFaculty = async (nameofFaculty, username, email, password) => {
        setIsLoading(true)
        setError(null)
    
        const faculty = {nameofFaculty, username, email, password}

        const response = await fetch('/api/faculty/signup-faculty', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
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