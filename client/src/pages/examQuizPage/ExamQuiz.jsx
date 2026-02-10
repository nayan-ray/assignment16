import React, { useContext, useEffect } from 'react'
import "../../assets/global.css"
import Header from '../../components/header/Header'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'
import Loader from '../../components/loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../../context/AuthenContex'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { examQuizApi } from '../../api/examQuizApi'
import { upsertItem } from '../../features/testQuiz/testQuizSlice'
import axios from 'axios'
import { hideLoader, showLoader } from '../../features/loader/loaderSlice'

const ExamQuiz = () => {
    const quizzes = useSelector((state) => state.examQuiz.examQuiz);
   const isLoading = useSelector((state) => state.loader.isLoading);
   const submitAnswer = useSelector((state)=> state.testQuiz.list);
   const dispatch = useDispatch();
   const { setStudent} = useContext(AuthContext);
   const navigate = useNavigate();
   const { unitName} = useParams();
   const {state} = useLocation();
   const unitId = state || null;
   
   console.log(submitAnswer);
   

 useEffect(()=>{
   
      examQuizApi(setStudent, navigate, unitId, unitName);
     
    
  }, [setStudent, navigate, unitId, unitName])


 
 


  const tickHandler = (e, item)=>{
         e.preventDefault();
         const parent = e.target.parentElement;
         const kids = parent.children;
         const kidsArray = [...kids]
         kidsArray.forEach((item)=>{
            item.classList.remove("tick");
            
         })
        e.target.classList.add("tick")
         
      dispatch(
      upsertItem({
        newItem: item,
        key: "quizId"
      })
    );
  }


  if(isLoading){
    return <Loader />
 }

const testSubmitHandler = async(e)=>{
  e.preventDefault();
 try {
     dispatch(showLoader())
     const response = await axios.post(`http://localhost:3000/api/v1/exam-quiz/submit`, {anserList : submitAnswer, unitId}, {
              headers : {
                 'Content-Type': 'application/json'
                },
              withCredentials : true
           })
           
         if(response.status === 200 && response.data.success){
             
             alert(`you have got ${response.data.payload.correct}/${response.data.payload.total}`);
             
             
             
         }
               
     } catch (error) {
         if(error.response?.status === 401){
             setStudent(null);
             removeStudentLocal();
             navigate('/login', {replace : true})
         }
      
         console.log(error.message);
         
        
     }finally{
         dispatch(hideLoader())
     }


}

  return (
    <div className='common-wrapper'>
       <Header />
       <BreadCrumb />
       
      <div>
            <h2 className='text-center mb-4'>Model Question</h2>
            <ul className="list-container">
              {
                quizzes.length > 0 && !isLoading && quizzes.map((quiz, index)=>(
                     <li className="numbering-gap" key={index}>
                      <div className="number-text">{index + 1}.</div>
                      <div className="body-content">
                        <p className="body-justify">{quiz.quizTitle}</p>
                        <div className="option-box">
                           <button className='option-item ' onClick={(e)=> tickHandler(e, {quizId : quiz._id, quizAnsIn : 0})}>A) {quiz.quizOptionA}</button>
                           <button className='option-item' onClick={(e)=> tickHandler(e, {quizId : quiz._id, quizAnsIn : 1})}>B) {quiz.quizOptionB}</button>
                           <button className='option-item' onClick={(e)=> tickHandler(e, {quizId : quiz._id, quizAnsIn : 2})}>C) {quiz.quizOptionC}</button>
                           <button className='option-item' onClick={(e)=> tickHandler(e, {quizId : quiz._id, quizAnsIn : 3})}>D) {quiz.quizOptionD}</button>
                        </div>
                       
                    </div>
               
              </li>
                ))
              }
              

                
        </ul>
         <button className='submit-btn' onClick={testSubmitHandler}>submit</button>
      </div> 

       <Footer />

    </div>
  )
}

export default ExamQuiz