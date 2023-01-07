import { Link } from 'react-router-dom';
import {useLogout} from '../hooks/useLogout'
import { useLogoutFaculty } from '../hooks/useLogoutFaculty';
import { useAuthContext } from '../hooks/useAuthContext';
import { useAuthContextFaculty } from '../hooks/useAuthContextFaculty';
import { useFacultySetting } from '../hooks/useFacultySetting';

const Navbar = () => {
  const {logout} = useLogout()
  const {logoutFaculty} = useLogoutFaculty()
  const {student} = useAuthContext()
  const {faculty} = useAuthContextFaculty()
  const {session} = useFacultySetting()

const handleClick = () => {
  if(student){logout()}

  if(faculty){logoutFaculty()}
}
    return (
    <div className="main">

    {!faculty && session && student && (
        <><Link to="/onlineSessionStudent">
        <h1>Ongoing Session</h1>
      </Link>
      <h2 id="username">{session.class_Code}</h2>
     
      <h2 id ="logout"><button onClick={handleClick}>Log Out</button></h2>
     
         
        </>
      )}

      {faculty && session && !student && (
        <><Link to="/onlineSession">
        <h1>Ongoing Session</h1>
      </Link>
     <h2 id="username">{session.class_Name}</h2>
     <h2 id ="logout"><button onClick={handleClick}>Log Out</button></h2>
        </>
      )}


      {faculty && !student && !session &&(
          <><Link to="/afterProfLogin">
            <h1>FACULTY DASHBOARD</h1>
          </Link>
          <h2 id="username">{faculty.username}</h2>
          <h2 id ="logout"><button onClick={handleClick}>Log Out</button></h2>
            </>
          )}
      

      {!student && !faculty && !session && (
            <div>
              <Link to ="/">
        <h1>Particify</h1>
        </Link>
            </div>
          )}
        {student && !faculty && !session &&(
          <><Link to="/afterLogin">
            <h1>Particify</h1>
          </Link>
          <h2 id="username">{student.username}</h2>
          <h2 id ="logout"><button onClick={handleClick}>Log Out</button></h2>
            </>
          )}

        
    </div>
    )
}
export default Navbar;
