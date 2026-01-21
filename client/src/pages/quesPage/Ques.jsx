import React from 'react'
import "./ques.css"
import "../../assets/global.css"
import Header from '../../components/header/Header'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'

const Ques = () => {
  return (
    <div className="common-wrapper">
         <Header />
          <BreadCrumb />
          <div>
        <h2 className='text-center mb-4'>Model Question</h2>
        <ul className="ques-list">
           <li className="ques-item">
               <div className="ques-body"></div>
               
           </li>
        </ul>
      </div>
          <Footer />
    </div>
  )
}

export default Ques