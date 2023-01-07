import { useAuthContextFaculty } from "./useAuthContextFaculty"
import { useFacultySetting } from "./useFacultySetting"

export const useLogoutFaculty = () => {
    const {dispatch} = useAuthContextFaculty()
    const {dispatch: sessionDispatch} = useFacultySetting()

    const logoutFaculty = () => {
        // remove user from storage
        localStorage.removeItem('faculty')
        localStorage.removeItem('session')
        // dispatch logout action
        dispatch({type: 'LOGOUT-FACULTY'})
        sessionDispatch({type: 'CLEAR_SESSION', payload:null})
    }
    return {logoutFaculty}

}