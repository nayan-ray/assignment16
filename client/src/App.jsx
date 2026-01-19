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


function App() {
  

  return (
    <>
    
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/dashboard' element={<Dashboard />}/>
         <Route path='/dashboard/:subj' element={<Unit />}/>
         <Route path='/dashboard/:subjName/:unitName' element={<UnitDetails />}/>
         <Route path='/dashboard/:subjName/:unitName/note' element={<Note />}/>
         <Route path='/dashboard/:subjName/:unitName/question' element={<Ques />}/>
         <Route path='/dashboard/:subjName/:unitName/quiz' element={<Quiz />}/>
         <Route path='/dashboard/:subjName/:unitName/exam' element={<ExamQuiz />}/>
         <Route path='/result' element={<Result />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/register' element={<SignUp />}/>
         <Route path='/active-account' element={<ActiveAccount />}/>
         <Route path='*' element={<NoPageFound />}/>
      </Routes>
        
    </>
  )
}

export default App
