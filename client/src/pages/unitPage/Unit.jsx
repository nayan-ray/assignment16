import React, { useContext, useEffect } from 'react'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { unitApi } from '../../api/unitApi'
import Loader from '../../components/loader/Loader'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthenContex'
import { useSelector } from 'react-redux'


const Unit = () => {
   const subjects = useSelector((state) => state.unit.units);
   const isLoading = useSelector((state) => state.loader.isLoading);
   const {student, setStudent} = useContext(AuthContext)
 useEffect(()=>{
   
       unitApi(setStudent);
     
    
  }, [setStudent])


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