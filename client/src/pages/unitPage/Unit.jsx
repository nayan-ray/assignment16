import React from 'react'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

const Unit = () => {
  return (
    <div className='dashboard-container'>
      <div className="dashboard-wrapper">
          <Header />
          <div>
            <h2 className='text-center mb-4'>Units</h2>
            <ul className='text-center list'>
              <li className='py-2 item'>Set and Function</li>
              <li className='py-2 item'>Real Number</li>
              <li className='py-2 item'>Exponent</li>
            </ul>
          </div>
          <Footer />
      </div>
       
    </div>
  )
}

export default Unit