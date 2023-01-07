import {createContext, useReducer, useEffect} from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return {student: action.payload}
        case 'LOGOUT':
            return {student: null}
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        student: null
    })
    
    // to check the local storage if log in or not
    useEffect(() => {
        const student = JSON.parse(localStorage.getItem('student'))

        if(student){
            dispatch({type: 'LOGIN', payload: student})
        }
    }, [])

    console.log('AuthContext state: ', state)

    return(
        <AuthContext.Provider value ={{...state, dispatch}}>
            { children }

        </AuthContext.Provider>
    )
}