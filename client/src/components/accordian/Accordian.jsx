import React, { useState } from "react";
import "./accordian.css";
import "../../assets/global.css"

const Accordion = ({ items, allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) => {
      if (allowMultiple) {
        // multi-open mode
        return prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index];
      } else {
        // single-open mode
        return prev[0] === index ? [] : [index];
      }
    });
  };

  return (
    <div className="list-container">


      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
         <>
          <li className="numbering-gap" key={index}>
            <div className="number-text" >
                {index + 1}
            </div>
            <div className="body-content">
                      <p className="body-justify">This is the first model question. It contains a detailed explanation of the topic.</p>
                      <p className='body-justify'>A) What is the purpose of this question</p>
                      <p className='body-justify'>B) What is the purpose of this question</p>
                      <p className='body-justify'>C) What is the purpose of this question</p>
                      
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
              <div className="accordion-content">
                           <p className='body-justify'>Answer A : The purpose of this question is to test your understanding of the topic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                            <p className='body-justify'>Answer B : The purpose of this question is to test your understanding of the topic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                            <p className='body-justify'>Answer C : The purpose of this question is to test your understanding of the topic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
              </div>
            </div>

          </div>

             </div>
           </li>
         </>

          
        );
      })}
    </div>
  );
};

export default Accordion;
