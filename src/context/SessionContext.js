
import { createContext, useReducer, useEffect } from 'react'

export const SessionContext = createContext()

export const sessionReducer = (state, action) => {
  switch (action.type) {
    case 'ENTER_SESSION': 
      return {session: action.payload}
    case 'CLEAR_SESSION': 
      return   {session: null}
    default:
      return state
  }
}

export const SessionContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(sessionReducer, {
    session: null
})
  
  // to check the local storage if log in or not
  useEffect(() => {
      const session = JSON.parse(localStorage.getItem('session'))

      if(session){
          dispatch({type: 'ENTER_SESSION', payload: session})
      }
  }, [])

  console.log('SessionContext state: ', state)

  return(
      <SessionContext.Provider value ={{...state, dispatch}}>
          { children }

      </SessionContext.Provider>
  )
}
