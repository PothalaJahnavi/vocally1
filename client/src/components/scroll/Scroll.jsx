import React from 'react'
import FooterIcon from '../footericons/FooterIcon';
import {AiFillDownCircle} from "react-icons/ai"
import './scroll.css'
const Scroll = () => {
  return (
    <div className='for-scroll'>
      <div className='scroll-icon'>
      <a href="#foot" ><AiFillDownCircle color='white' size={30} className="scroll-icon"/></a>
      </div>
      <div className='head-icons'>
      <FooterIcon/>
      </div>
    </div>
  )
}

export default Scroll
