import React from 'react'
import slugify from 'slugify'
import Header from '../../components/header/Header'
import "./dashboard.css"
import Footer from '../../components/footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { dashboardApi } from '../../api/dashboard'
import { useSelector } from 'react-redux'
import Loader from '../../components/loader/Loader'

const Dashboard = () => {
   const subjects = useSelector((state) => state.dashboard.subjects);
   const isLoading = useSelector((state) => state.loader.isLoading);
   const navigate = useNavigate();
  useEffect(()=>{
   
       dashboardApi();
     
    
  }, [])
 if(isLoading){
    return <Loader />
 }

  return (
    <div className='dashboard-container'>
      <div className="dashboard-wrapper">
          <Header />
          <div>
            <h2 className='text-center'>Subjects</h2>
            <ul className='text-center list'>
              {subjects.length > 0 && !isLoading && subjects.map((subject)=>{
                  return <li key={subject._id} className='py-2 item'><Link to={`/dashboard/${slugify(subject.subjName, {lower : true})}`}>{subject.subjName}</Link></li>
              })}
             
            </ul>
          </div>
          <Footer />
      </div>
       
    </div>
    
  )
}

export default Dashboard