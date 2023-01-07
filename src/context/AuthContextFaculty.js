import {createContext, useReducer, useEffect} from 'react'

export const AuthContextFaculty = createContext()

export const authFacultyReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN-FACULTY':
            return {faculty: action.payload}
        case 'LOGOUT-FACULTY':
            return {faculty: null}
        default:
            return state
    }
}

export const AuthContextFacultyProvider = ({children}) => {
    const [state, dispatch] = useReducer(authFacultyReducer, {
        faculty: null
    })
    
    // to check the local storage if log in or not
    useEffect(() => {
        const faculty = JSON.parse(localStorage.getItem('faculty'))

        if(faculty){
            dispatch({type: 'LOGIN-FACULTY', payload: faculty})
        }
    }, [])

    console.log('AuthContextFaculty state: ', state)

    return(
        <AuthContextFaculty.Provider value ={{...state, dispatch}}>
            { children }

        </AuthContextFaculty.Provider>
    )
}