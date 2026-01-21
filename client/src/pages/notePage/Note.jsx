import React from 'react'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import "../../assets/global.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./note.css"

const Note = () => {
  return (
    <div className="common-wrapper">
      <Header />
      <BreadCrumb />
      <div>
        <h2 className='text-center mb-4'>Notes</h2>
        <ul className="note-list">
           <li className="note-item">
            <div className='note-number'>1)</div>
            <div className='note-body'>
                <div className="body-top">What is the purpose of this note?</div> 
                <div className="body-bottom">Explanation : I know the purpose of this note. Lorem ipsum .</div>
            </div>
           </li>
            <li className="note-item">
            <div className='note-number'>2)</div>
            <div className='note-body'>
                <div className="body-top">What is the purpose of this note?</div> 
                <div className="body-bottom">Explanation : I know the purpose of this note. Lorem ipsum . Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nam explicabo id iste voluptatem quae inventore, laborum earum eaque molestiae ab repudiandae voluptatibus commodi. Deleniti mollitia sunt optio laudantium libero?</div>
            </div>
           </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Note