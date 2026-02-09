import React, { useContext, useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./unitDetails.css"
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import { useSelector } from 'react-redux'
import { AuthContext } from '../../context/AuthenContex'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import { unitDetailsApi } from '../../api/unitDetailsApi'
import slugify from 'slugify'

const UnitDetails = () => {
   const unitDetails = useSelector((state) => state.unitDetail.unitDetails);
   const isLoading = useSelector((state) => state.loader.isLoading);
   const { setStudent} = useContext(AuthContext);
   const navigate = useNavigate();
   const {subjName, unitName} = useParams();
   const {state} = useLocation();
   const unitId = state || null;
   
   
   

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
               {unitDetails[0]?.notes[0]?.totalNotes > 0 && (
                  <li className='py-2 item'>
                     <Link to={`/dashboard/${slugify(subjName)}/${slugify(unitName)}/note`}>
                       <div className="details-wrapper">
                          <span className="unit-title">Note</span>
                          <span className='total-number'>{unitDetails[0].notes[0].totalNotes}</span>
                       </div>
                     </Link>
                     
                  </li>
               )}

              
               {unitDetails[0]?.questions[0]?.totalQuestions > 0 && (
                  <li className='py-2 item'>
                    <Link to={`/dashboard/${slugify(subjName)}/${slugify(unitName)}/question`}>
                       <div className="details-wrapper">
                        <span className="unit-title">Question</span>
                        <span className='total-number'>{unitDetails[0].questions[0].totalQuestions}</span>
                       </div>
                     </Link>
                  </li>
               )}

             {unitDetails[0]?.quizzes[0]?.totalQuizzes > 0 && (
                  <li className='py-2 item'>
                     <Link to={`/dashboard/${slugify(subjName)}/${slugify(unitName)}/quiz`}>
                        <div className="details-wrapper">
                          <span className="unit-title">Quiz</span>
                          <span className='total-number'>{unitDetails[0].quizzes[0].totalQuizzes}</span>
                        </div>
                     </Link>
                  </li>
               )}
            </ul>
          </div>
          <Footer />
      </div>
       
    </div>
  )
}

export default UnitDetails