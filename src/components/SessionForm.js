import { useState } from "react"
import { useFacultySetting } from "../hooks/useFacultySetting"
import { useAuthContextFaculty } from '../hooks/useAuthContextFaculty'

const SessionForm = () => {
  const { dispatch } = useFacultySetting()
  const { faculty } = useAuthContextFaculty()

  const [class_Name, setClassName] = useState('')
  const [class_Code, setClassCode] = useState('')
  const [class_Reward, setClassReward] = useState('')
  const [error, setError] = useState(null)

  const url = "https://particify-backend.adaptable.app";
  const net = "https://brilliant-fairy-52e9de.netlify.app"
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!faculty) {
      setError('You must be logged in')
      return
    }

    const session = {class_Name, class_Code, class_Reward}

    const response = await fetch(url + '/api/faculty/faculty-home', {
        method: 'POST',
        body: JSON.stringify(session),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${faculty.token}`,
          'Access-Control-Allow-Origin' : net,
          'Access-Control-Allow-Credentials' : true
        }
      })
      const json = await response.json()

    if (!response.ok) {
      setError(json.error)

    }
    if (response.ok) {
        setClassName('')
        setClassCode('')
        setClassReward('')
        setError(null)
        dispatch({type: 'CREATE_SESSION', payload: json})
        
        localStorage.setItem('session', JSON.stringify(json))

        // update auth context
        dispatch({type: 'ENTER_SESSION', payload: json})
          
    }
  }

  return(
    <>
    <div className="center setting">
            <h1 id="bye"> Setting Up A Class </h1>
            <form method="post">
                <div className="text_field">
                    <input type="text" id="className" required
                    onChange ={(e) => setClassName(e.target.value)}
                    value = {class_Name}
                    />
                        <span></span>
                        <label>Class</label>
                </div>
                <div className="text_field">
                    <input type="text" id="code" required
                      onChange ={(e) => setClassCode(e.target.value)}
                      value = {class_Code}
                    />
                        <span></span>
                        <label>Code</label>
                    </div>
                <div className="text_field">
                    <input type="text" id="reward" required
                      onChange ={(e) => setClassReward(e.target.value)}
                      value = {class_Reward}
                    />
                        <span></span>
                        <label>Reward</label>
                    </div>

             <input type="submit" value="Start session" id="startSesh" onClick={handleSubmit}/>

                    <div className="signup_link">
                    {error && <div className="error">{error}</div>}
                    </div>
                </form>
        </div><script src="script.js"></script></>
)


}

export default SessionForm;