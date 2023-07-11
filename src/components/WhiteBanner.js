import React from 'react'
import './WhiteBanner.css'
import w_poster from '../img/WhiteBanner.jpg'



function WhiteBanner() {
  return (
    <>
    <div className='row w_Banner col-md-6'>
        <img src={w_poster} className='w-b' alt="WhiteBannerImage" />
    </div>
    </>
  )
}

export default WhiteBanner