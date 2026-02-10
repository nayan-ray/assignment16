import React, { useContext, useEffect } from 'react'
import "../../assets/global.css"
import Header from '../../components/header/Header'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'
import Loader from '../../components/loader/Loader'
import { useSelector } from 'react-redux'
import { AuthContext } from '../../context/AuthenContex'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { examQuizApi } from '../../api/examQuizApi'

const ExamQuiz = () => {
     const quizzes = useSelector((state) => state.examQuiz.examQuiz);
   const isLoading = useSelector((state) => state.loader.isLoading);
   const { setStudent} = useContext(AuthContext);
   const navigate = useNavigate();
   const { unitName} = useParams();
   const {state} = useLocation();
   const unitId = state || null;
   

 useEffect(()=>{
   
      examQuizApi(setStudent, navigate, unitId, unitName);
     
    
  }, [setStudent, navigate, unitId, unitName])


 console.log(quizzes);
 


  const tickHandler = (e)=>{
         e.preventDefault();
         const parent = e.target.parentElement;
         const kids = parent.children;
         const kidsArray = [...kids]
         kidsArray.forEach((item)=>{
            item.classList.remove("tick");
            
         })
        e.target.classList.add("tick")
         

  }


  if(isLoading){
    return <Loader />
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
                           <button className='option-item ' onClick={(e)=> tickHandler(e)}>A) {quiz.quizOptionA}</button>
                           <button className='option-item' onClick={(e)=> tickHandler(e)}>B) {quiz.quizOptionB}</button>
                           <button className='option-item' onClick={(e)=> tickHandler(e)}>C) {quiz.quizOptionC}</button>
                           <button className='option-item' onClick={(e)=> tickHandler(e)}>D) {quiz.quizOptionD}</button>
                        </div>
                       
                    </div>
               
              </li>
                ))
              }
              

                
        </ul>
         <button className='submit-btn'>submit</button>
      </div> 

       <Footer />

    </div>
  )
}

export default ExamQuiz