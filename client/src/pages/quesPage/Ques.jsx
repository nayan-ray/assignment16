import React, { useRef, useState } from 'react'
import "./ques.css"
import "../../assets/global.css"
import Header from '../../components/header/Header'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'
import Accordion from '../../components/accordian/Accordian'

const Ques = () => {
   

   const [openIndex, setOpenIndex] = useState(null);
  const boxRefs = useRef([]);

   const toggle = (index) => {
    const el = boxRefs.current[index];
    if (!el) return;

    const isOpen = openIndex === index;

    // update state
    setOpenIndex(isOpen ? null : index);

    // wait for React render
    requestAnimationFrame(() => {
      if (!el) return;

      if (!isOpen) {
        // OPEN
        el.style.maxHeight = el.scrollHeight + "px";
      } else {
        // CLOSE
        el.style.maxHeight = "0px";
      }

      // auto-scroll when opening
      if (!isOpen) {
        const rect = el.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (!isVisible) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    });
  };


const data = [
  {
    title: "Question 1: What is React?",
    content: (
      <>
        <p>React is a JavaScript library for building UIs.</p>
        <p>Created by Facebook.</p>
      </>
    )
  },
  {
    title: "Question 2: What is State?",
    content: (
      <>
        <p>State is mutable data in a component.</p>
        <p>It controls re-rendering.</p>
      </>
    )
  },
  {
    title: "Question 3: What is Props?",
    content: (
      <>
        <p>Props are inputs to components.</p>
        <p>They are read-only.</p>
      </>
    )
  }
];





   //   const openBox =(e)=>{
   //     const targetBox = e.target.nextElementSibling;
       
   //     const isChecked = targetBox.classList.contains("open");
   //     if(isChecked){
   //        targetBox.classList.remove("open");
   //        e.target.textContent = "show Answer";
          
   //     }else{
   //        targetBox.classList.add("open");
   //        e.target.textContent = "Hide Answer";
   //        const rect = targetBox.getBoundingClientRect();
   //        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
   //        if(!isVisible){
   //           targetBox.scrollIntoView({ behavior: "smooth", block: "center" });
   //        }
   //     } 
   // }

  return (
    <div className="common-wrapper">
         <Header />
          <BreadCrumb />
          {/* <div>
            <h2 className='text-center mb-4'>Model Question</h2>
            <ul className="list-container">
              {
                [0, 1, 2, 3, 4].map((_, index)=>(
                     <li className="numbering-gap" key={index}>
                      <div className="number-text">{index + 1}.</div>
                      <div className="body-content">
                    <p className="body-justify">This is the first model question. It contains a detailed explanation of the topic.</p>
                    <p className='body-justify'>A) What is the purpose of this question</p>
                     <p className='body-justify'>B) What is the purpose of this question</p>
                      <p className='body-justify'>C) What is the purpose of this question</p>
                      <div className='body-content'>
                         <button className="answer-text text-center" onClick={() => toggle(index)}> {openIndex === index ? "Hide Answer" : "Show Answer"}</button>
                       
                           <div
                             ref={(el) => (boxRefs.current[index] = el)}
                             className="answer-body"
                             style={{ maxHeight: "0px", overflow: "hidden", transition: "max-height 0.5s ease" }}
                             >
                            <p className='body-justify'>Answer A : The purpose of this question is to test your understanding of the topic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                            <p className='body-justify'>Answer B : The purpose of this question is to test your understanding of the topic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                            <p className='body-justify'>Answer C : The purpose of this question is to test your understanding of the topic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                          </div>
                       
                      </div>
                 </div>
               
              </li>
                ))
              }
              

                
        </ul>
      </div> */}
       <h2 className='text-center mb-4'>Model Question</h2>
         <Accordion items={data} 
           allowMultiple={true}  />
         <Footer />
    </div>
  )
}

export default Ques