import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/homePage/Home';
import Dashboard from './pages/dashboardPgae/Dashboard';
import Unit from "./pages/unitPage/Unit"
import UnitDetails from "./pages/unitDetailsPage/UnitDetails"
import Note from "./pages/notePage/Note"
import Ques from "./pages/quesPage/Ques"
import Quiz from "./pages/quizPage/Quiz"
import ExamQuiz from "./pages/examQuizPage/ExamQuiz"
import Result from "./pages/resultPage/Result"
import Login from "./pages/loginPage/Login"
import SignUp from "./pages/signUpPage/SignUp"
import ActiveAccount from "./pages/activeAccountPage/ActiveAccount"
import NoPageFound from './pages/noPage/NoPageFound';
import Profile from './pages/profilePage/Profile';
import TakeEmail from './pages/takeEmailPage/TakeEmail';
import ResetPassword from './pages/ResetPasswordPage/ResetPassword';
import { useEffect, useState } from 'react';
import { getStudentLocal } from './helper/auth';


function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false)
      useEffect(()=>{
          const student = getStudentLocal();
          if(student ){
             setIsLoggedIn(true)
          }else{
            setIsLoggedIn(false)
          }
      }, [])

  return (
    <>
    
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/dashboard' element={isLoggedIn ?  <Dashboard /> : <Login/>}/>
         <Route path='/dashboard/:subj' element={<Unit />}/>
         <Route path='/dashboard/:subjName/:unitName' element={isLoggedIn ? <UnitDetails /> : <Login/>}/>
         <Route path='/dashboard/:subjName/:unitName/note' element={isLoggedIn ? <Note /> : <Login/>}/>
         <Route path='/dashboard/:subjName/:unitName/question' element={isLoggedIn ? <Ques /> : <Login/>}/>
         <Route path='/dashboard/:subjName/:unitName/quiz' element={isLoggedIn ? <Quiz /> : <Login/>}/>
         <Route path='/dashboard/:subjName/:unitName/exam' element={isLoggedIn ? <ExamQuiz /> : <Login/>}/>
         <Route path='/profile' element={isLoggedIn ?  <Profile /> : <Login/>}/>
         <Route path='/check-email' element={<TakeEmail />}/>
         <Route path='/reset-password/:token' element={<ResetPassword />}/>
         <Route path='/result' element={isLoggedIn ? <Result /> : <Login/>}/>
         <Route path='/login' element={isLoggedIn ? <Home />: <Login />}/>
         <Route path='/register' element={isLoggedIn ? <Home /> : <SignUp />}/>
         <Route path='/active-account/:token' element={<ActiveAccount />}/>
         <Route path='*' element={<NoPageFound />}/>
      </Routes>
        
    </>
  )
}

export default App
