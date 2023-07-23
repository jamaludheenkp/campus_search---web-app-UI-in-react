import React from 'react'
import './Testimonials.css'
import {FcPrevious, FcNext} from 'react-icons/fc'

import TestimonialCard from './TestimonialCard'



const Testimonials = () => {
  return (
    <>
       <section className='testimonials'>
        <div className='Container'>
            <h5> Testimonials </h5>
            <h2>
                Listen to our students,
                <br/>
                Not to us!
            </h2>
        </div>
        <div className='container-fluid'>
            <div className="testimonial-slider">
                <div className="tns-outer">
                    <div className="tns-controls" aria-label='Carousel Navigation' tabIndex={0}>
                        <button className='mx-3' aria-controls='prev' tabIndex={-1} >
                            <span className='arrow' style={{fontSize:'25px', fontWeight:'800'}}> <FcPrevious /> </span>
                        </button>
                        <button className='' aria-controls='next' tabIndex={1}>
                            <span className='arrow ' style={{fontSize:'25px', fontWeight:'800'}}> <FcNext /> </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-12'>
         <TestimonialCard />
        </div>
        </section>
    </>
  )
}

export default Testimonials