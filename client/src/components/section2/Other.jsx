import React from 'react'
import second from '../../images/second.png'
import './other.css'
const Other = () => {
  return (
    <div className='others'>
    <div className='for-others'>
      <div className='others-left'>
      <img src={second} alt="" className='other-image'/>
      </div>
      <div className='others-right'>
        <h1>Focused On <br />  Time Saving</h1>
        <p className='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <button className='other-button'>Download the mobile app</button>
      </div>
    </div>
    </div>
  )
}

export default Other
