import React from 'react'
import "../../assets/global.css"
import Header from '../../components/header/Header'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'

const ExamQuiz = () => {
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
  return (
    <div className='common-wrapper'>
       <Header />
       <BreadCrumb />
       
      <div>
            <h2 className='text-center mb-4'>Model Question</h2>
            <ul className="list-container">
              {
                [0, 1, 2, 3, 4].map((_, index)=>(
                     <li className="numbering-gap" key={index}>
                      <div className="number-text">{index + 1}.</div>
                      <div className="body-content">
                        <p className="body-justify">This is the first model question. It contains a detailed explanation of the topic.</p>
                        <div className="option-box">
                           <button className='option-item ' onClick={(e)=> tickHandler(e)}>A) What is the purpose of this question</button>
                           <button className='option-item' onClick={(e)=> tickHandler(e)}>B) What is the purpose of this question</button>
                           <button className='option-item' onClick={(e)=> tickHandler(e)}>C) What is the purpose of this question</button>
                           <button className='option-item' onClick={(e)=> tickHandler(e)}>D) What is the purpose of this question</button>
                        </div>
                       
                    </div>
               
              </li>
                ))
              }
              

                
        </ul>
      </div> 

       <Footer />

    </div>
  )
}

export default ExamQuiz