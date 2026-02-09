import React, { useContext, useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./unitDetails.css"
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import { useSelector } from 'react-redux'
import { AuthContext } from '../../context/AuthenContex'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import { unitDetailsApi } from '../../api/unitDetailsApi'

const UnitDetails = () => {
   const unitDetails = useSelector((state) => state.unitDetail.unitDetails);
   const isLoading = useSelector((state) => state.loader.isLoading);
   const { setStudent} = useContext(AuthContext);
   const navigate = useNavigate();
   const {subjName, unitName} = useParams();
   const {state} = useLocation();
   const unitId = state || null;
   
   console.log(unitDetails);
   

 useEffect(()=>{
   
      unitDetailsApi(setStudent, navigate, unitId, unitName);
     
    
  }, [setStudent, navigate, unitId, unitName])


 if(isLoading){
    return <Loader />
 }

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