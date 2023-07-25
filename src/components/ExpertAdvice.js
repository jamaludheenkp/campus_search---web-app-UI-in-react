import React from 'react'
import "./ExpertAdvice.css"
import { Button } from 'react-bootstrap'
import {LiaLongArrowAltRightSolid} from 'react-icons/lia'

import FaqAccordion from './FaqAccordion'



function ExpertAdvice() {
  return (
    <>
        <section className='expertAdvice'>
            <div className='container'>
                <div className='row '>
                    <div className='col-12 col-lg-6'>
                        <div className='box-cell box-1'>
                            <h2 className='title-Faq1'>
                            Need an
                            <span className='text-primary'> Expert Advice? </span>
                            </h2>
                            <p> Get our experts to answer your questions within 24 Hrs.</p>
                            <div>
                                <Button className="btn btn-primary text-white fs-5 px-3 rounded-3 mb-5"> Let's Talk <LiaLongArrowAltRightSolid /> </Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h2 className='title-Faq2'>
                            Frequently Asked 
                            <span className='text-primary'> Questions! </span>
                        </h2>
                        <div>
                            <FaqAccordion />
                        </div>
                        <Button className='bg-white text-black px-3 mt-3'>View all  <span className='px-1'> <LiaLongArrowAltRightSolid /> </span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ExpertAdvice