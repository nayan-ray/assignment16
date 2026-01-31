import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./unitDetails.css"
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'

const UnitDetails = () => {
   return (
    <div className='dashboard-container'>
      <div className="dashboard-wrapper">
          <Header/>
          <BreadCrumb />
          <div>
            <h2 className='text-center mb-4'>Unit Details</h2>
            <ul className='text-center list'>
              <li className='py-2 item'>
                 <div className="details-wrapper">
                    <span className="unit-title">note</span>
                    <span className='total-number'>20</span>
                 </div>
              </li>
              
              <li className='py-2 item'>
                 <div className="details-wrapper">
                    <span className="unit-title">note</span>
                    <span className='total-number'>20</span>
                 </div>
              </li>

              <li className='py-2 item'>
                 <div className="details-wrapper">
                    <span className="unit-title">note</span>
                    <span className='total-number'>20</span>
                 </div>
              </li>

            </ul>
          </div>
          <Footer />
      </div>
       
    </div>
  )
}

export default UnitDetails