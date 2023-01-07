import { SessionContext } from '../context/SessionContext'
import { useContext } from 'react'

export const useFacultySetting = () => {
  const context = useContext(SessionContext)

  if (!context) {
    throw Error('useFacultySetting must be used inside an WorkoutsContextProvider')
  }

  return context
}