import { AuthContextFaculty } from "../context/AuthContextFaculty";
import { useContext } from "react";

export const useAuthContextFaculty = () => {
    const context = useContext(AuthContextFaculty)

    if (!context){
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }

    return context
}