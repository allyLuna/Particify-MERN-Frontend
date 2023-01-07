import { useState } from "react";
import { useAuthContext} from './useAuthContext';

export const useSignup = () => {
    const [error, setError ] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (nameofStudent, username, email, password) => {
        setIsLoading(true)
        setError(null)
    
        const student = {nameofStudent, username, email, password}

        const response = await fetch('/api/students/signup-student', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(student),
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok)
        {
            // save the user to local storage
            localStorage.setItem('student', JSON.stringify(json))

            // update auth context
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}