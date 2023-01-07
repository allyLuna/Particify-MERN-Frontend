import { useAuthContext } from "./useAuthContext"
import { useFacultySetting } from "./useFacultySetting"
export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const {dispatch: sessionDispatch} = useFacultySetting()
    const logout = () => {
        // remove user from storage
        localStorage.removeItem('student')
        localStorage.removeItem('session')
        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        sessionDispatch({type: 'CLEAR_SESSION', payload:null})
    }
    return {logout}

}