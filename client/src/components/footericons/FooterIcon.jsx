import React from 'react'
import './footerIcon.css'
import {BsYoutube} from "react-icons/bs"
import {FaLinkedinIn} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {BsTwitter}  from "react-icons/bs"
import {FiInstagram} from "react-icons/fi"
const FooterIcon = () => {
  return (
    <div className='for-icons'>
    <FaFacebookF color='white' className='indi-icons'/>
    <BsTwitter color='white' className='indi-icons'/>
    <BsYoutube size={15}color='white'className='indi-icons'/>
     <FaLinkedinIn color='white'className='indi-icons'/>
    <FiInstagram size={15}color='white'className='indi-icons'/>
    </div>
  )
}

export default FooterIcon
