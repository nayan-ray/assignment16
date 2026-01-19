import React from 'react'
import Header from '../../components/header/Header'
import "./dashboard.css"
import Footer from '../../components/footer/Footer'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="dashboard-wrapper">
          <Header />
          <div>
            <h2 className='text-center'>Subjects</h2>
            <ul className='text-center list'>
              <li className='py-2 item'>math</li>
              <li className='py-2 item'>science</li>
              <li className='py-2 item'>english</li>
            </ul>
          </div>
          <Footer />
      </div>
       
    </div>
    
  )
}

export default Dashboard