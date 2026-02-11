import React, { useContext, useEffect } from 'react'
import "../../assets/global.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { useSelector } from 'react-redux'
import { AuthContext } from '../../context/AuthenContex'
import { useNavigate } from 'react-router-dom'
import { resultApi } from '../../api/resultApi'
import Loader from '../../components/loader/Loader'

const Result = () => {
   
   const result = useSelector((state) => state.result.result);
   const isLoading = useSelector((state) => state.loader.isLoading);
   const { setStudent} = useContext(AuthContext);
   const navigate = useNavigate();
   console.log(result);
   

 useEffect(()=>{
   
      resultApi(setStudent, navigate);
     
    
  }, [setStudent, navigate, ])


 if(isLoading){
    return <Loader />
 }
  
  return (
    <div className='dashboard-container'>
       <div className="dashboard-wrapper">
           <Header />
             <div>
                <h2 className='text-center mb-4'>Your Results</h2>
                 <ul className='text-center list'>
                    <li className='py-2 item'>                  
                       <div className="details-wrapper">
                          <span className="unit-title">Note</span>
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

export default Result