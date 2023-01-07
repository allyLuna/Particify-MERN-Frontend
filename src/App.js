import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import { useAuthContextFaculty } from './hooks/useAuthContextFaculty';
import { useFacultySetting } from './hooks/useFacultySetting';
// pages and components
import Home from './pages/Home'
import StudentLogin from './pages/StudentLogin';
import StudentSignUp from './pages/StudentSignUp';
import StudentHome from './pages/StudentHome';

import FacultyHome from './pages/FacultyHome';
import FacultyLogin from './pages/FacultyLogin';
import FacultySignUp from './pages/FacultySignup';

import OnlineSession from './pages/OnlineSession';
import OnlineSessionStudent from './pages/OnlineSessionStudent';

import AfterLogin from './pages/AfterLogin';
import StudentDash from './pages/StudentDash';
import AfterProfLogin from './pages/AfterProfLogin';
import FacultyDash from './pages/FacultyDash';

import Navbar from './components/Navbar'



function App() {
    const {student} = useAuthContext()
    const {faculty} = useAuthContextFaculty()
    const {session} = useFacultySetting()
  return (
    <div className="App">
      <BrowserRouter>
  <Navbar></Navbar>
      <div className="pages">
        <Routes>
          <Route path="/" element = {<Home />}/>

          <Route path="/login-student" element =  {!student ? <StudentLogin />  : <Navigate to = "/afterLogin"/>  }/>
          <Route path="/signup-student" element = {!student ? <StudentSignUp /> : <Navigate to = "/afterLogin"/>  }/>

          <Route path="/afterLogin" element = {<AfterLogin />}/>
          <Route path="/stud-dash" element = { <StudentDash /> }/>

          <Route path="/afterProfLogin" element = {<AfterProfLogin />}/>
          <Route path="/fac-dash" element = { <FacultyDash /> }/>

          <Route path="/student-home" element =   {!session ? <StudentHome />   : <Navigate to = "/onlineSessionStudent"/> }/>
          <Route path="/onlineSessionStudent" element =  {session? <OnlineSessionStudent />: <Navigate to ="/"/>}/>
          
          <Route path="/login-faculty" element =  {!faculty ? <FacultyLogin />  : <Navigate to = "/afterProfLogin"/>  }/>
          <Route path="/signup-faculty" element = {!faculty ? <FacultySignUp /> : <Navigate to = "/afterProfLogin"/>  }/>
         if({!faculty})
           { <Route path="/faculty-home" element =  {!session  ?   <FacultyHome />   : <Navigate to = "/onlineSession"/> }/>}
          <Route path="/onlineSession" element =  {session ? <OnlineSession />: <Navigate to ="/"/>}/>
          

        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
