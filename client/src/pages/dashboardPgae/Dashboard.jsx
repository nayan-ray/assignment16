import React, { useContext } from 'react'
import slugify from 'slugify'
import Header from '../../components/header/Header'
import "./dashboard.css"
import Footer from '../../components/footer/Footer'
import { Link, Navigate} from 'react-router-dom'
import { useEffect } from 'react'
import { dashboardApi } from '../../api/dashboard'
import { useSelector } from 'react-redux'
import Loader from '../../components/loader/Loader'
import { AuthContext } from '../../context/AuthenContex'

const Dashboard = () => {
   const subjects = useSelector((state) => state.dashboard.subjects);
   const isLoading = useSelector((state) => state.loader.isLoading);
  const {student, setStudent} = useContext(AuthContext)

  useEffect(()=>{
   
       dashboardApi(setStudent);
     
    
  }, [])


 if(isLoading){
    return <Loader />
 }
 
 if(!student){
    return <Navigate to={'/login'} replace/>

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