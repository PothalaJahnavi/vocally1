import React from 'react'
import Header from '../header/Header'
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import HeroLeft from '../heroleft/HeroLeft';
import Heroright from '../heroright/Heroright';
import Scroll from '../scroll/Scroll'
import './hero.css';
const Hero = () => {
  return (
    <div className='main'>
    <div className='for-hero'>
      <Header/>
       <div className='hero'>
       <div>
           <HeroLeft/>
       </div>
        <div>
          <Heroright/>
        </div>
       </div>
       <Scroll/>
    </div>
    </div>
  )
}

export default Hero


