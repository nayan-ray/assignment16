import React, { useState } from 'react'
import "./ques.css"
import "../../assets/global.css"
import Header from '../../components/header/Header'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'

const Ques = () => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  return (
    <div className="common-wrapper">
         <Header />
          <BreadCrumb />
          <div>
            <h2 className='text-center mb-4'>Model Question</h2>
            <ul className="list-container">
               <li className="numbering-gap">
                 <div className="number-text">1.</div>
                 <div className="body-content">
                    <p className="body-justify">This is the first model question. It contains a detailed explanation of the topic.</p>
                    <p className='body-justify'>A) What is the purpose of this question</p>
                     <p className='body-justify'>B) What is the purpose of this question</p>
                      <p className='body-justify'>C) What is the purpose of this question</p>
                      <div className='body-content'>
                         <div className="answer-text text-center" onClick={() => setIsAnswerVisible(!isAnswerVisible)}>{isAnswerVisible ? "Hide Answer" : "Show Answer"}</div>
                        {isAnswerVisible && (
                           <div className="answer-body">
                            <p className='body-justify'>Answer A : The purpose of this question is to test your understanding of the topic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                            <p className='body-justify'>Answer B : The purpose of this question is to test your understanding of the topic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                            <p className='body-justify'>Answer C : The purpose of this question is to test your understanding of the topic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                         </div>
                        )}
                      </div>
                 </div>
               
              </li>

               <li className="numbering-gap">
                 <div className="number-text">1.</div>
                 <div className="body-content">
                    <p className="body-justify">This is the first model question. It contains a detailed explanation of the topic.</p>
                    <p className='body-justify'>A) What is the purpose of this question</p>
                     <p className='body-justify'>B) What is the purpose of this question</p>
                      <p className='body-justify'>C) What is the purpose of this question</p>
                      <div className='body-content'>
                         <div className="answer-text text-center" onClick={() => setIsAnswerVisible(!isAnswerVisible)}>{isAnswerVisible ? "Hide Answer" : "Show Answer"}</div>
                        {isAnswerVisible && (
                           <div className="answer-body">
                            <p className='body-justify'>Answer A : The purpose of this question is to test your understanding of the topic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                            <p className='body-justify'>Answer B : The purpose of this question is to test your understanding of the topic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                            <p className='body-justify'>Answer C : The purpose of this question is to test your understanding of the topic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                         </div>
                        )}
                      </div>
                 </div>
               
              </li>
        </ul>
      </div>
          <Footer />
    </div>
  )
}

export default Ques