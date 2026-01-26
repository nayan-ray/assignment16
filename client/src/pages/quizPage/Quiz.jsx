import React, { useState } from 'react'
import "../../assets/global.css"
import "./quiz.css"
import Header from '../../components/header/Header'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'

const Quiz = () => {
const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) => {
    
        return prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index];
      
    });
  };


  return (
    <div className='common-wrapper'>
       <Header />
       <BreadCrumb />
       
      <div>
            <h2 className='text-center mb-4'>Quiz</h2>
            <ul className="list-container">
              {
                [0, 1, 2, 3, 4].map((_, index)=>{
                   const isOpen = openIndexes.includes(index);
                  return  <li className="numbering-gap" key={index}>
                      <div className="number-text">{index + 1}.</div>
                      <div className="body-content">
                        <p className="body-justify">This is the first model question. It contains a detailed explanation of the topic.</p>
                        <div className="option-box">
                           <button className='option-item '>A) What is the purpose of this question</button>
                           <button className='option-item'>B) What is the purpose of this question</button>
                           <button className='option-item'>C) What is the purpose of this question</button>
                           <button className='option-item'>D) What is the purpose of this question</button>
                        </div>
                         <div className="body-content">
            
            {/* Header */}
            <button
              className={`accordion-header  ${isOpen ? "active" : ""}`}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span>Answer</span>
              
            </button>

            {/* Body */}
            <div
              className="accordion-body"
              style={{
                maxHeight: isOpen ? "1500px" : "0px",
                overflow: "hidden", transition: "max-height 0.5s ease" 
              }}
            >
              <div className="accordion-content text-center font-weight-bold">
                          A
              </div>
            </div>

          </div>

           
      </div>
               
              </li>
                })
              }
              

                
        </ul>
      </div> 

       <Footer />

    </div>
  )
}
export default Quiz;