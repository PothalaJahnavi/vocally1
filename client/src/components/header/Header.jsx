import React from 'react'
import './header.css'
import {BsTelephoneFill} from "react-icons/bs"
import {MdMarkEmailUnread} from 'react-icons/md'
const Header = () => {
  return (
    <div className='for-header'>
       <div className='nav'>
           <div className='nav-brand'>
            Penauto
           </div>
           <div className='nav-bar'>
           <BsTelephoneFill/>&nbsp;<li>+7695864558</li>
           <MdMarkEmailUnread size={20}/>&nbsp;<li>service@openauto.ca</li>
            <button className='download-button'>Download the mobile app</button>
           </div>
        </div>
    </div>
  )
}

export default Header
