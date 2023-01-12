import { useState } from "react";
import { useAuthContext} from './useAuthContext';

export const useLogin = () => {
    const [error, setError ] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const url = "https://particify-backend.adaptable.app";
    const net = "https://merry-churros-dc63e3.netlify.app"
    const login = async (username, password) => {
        setIsLoading(true)
        setError(null)
    
        const student = {username, password}

        const response = await fetch(url + '/api/students/login-student', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : net ,
            'Access-Control-Allow-Credentials' : true},
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

    return {login, isLoading, error}
}