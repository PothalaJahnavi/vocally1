import React from 'react'
import './footer.css'
import FooterIcon from '../footericons/FooterIcon'
import {BsTelephoneFill} from "react-icons/bs"
import {MdMarkEmailUnread} from 'react-icons/md'
const Footer = () => {
  return (
    <div className='footer' id='foot'>
      <div className='nav'>
           <div className='nav-brand' style={{marginLeft:"5%",marginTop:"1%"}}>
            Penauto
           </div>
           <ul className='nav-bar'>
           <BsTelephoneFill size={30}/>&nbsp;<li>+7695864558</li>
           <MdMarkEmailUnread size={30}/>&nbsp;<li>service@openauto.ca</li>
           </ul>
        </div>
        <div className='for-foot-icons'>
          <div style={{marginLeft:"5%"}}>
          Open Auto@ all rights reserved
          </div>
          <div className='last-icons'>
          <FooterIcon/>
          </div>
        </div>
    </div>
  )
}

export default Footer
