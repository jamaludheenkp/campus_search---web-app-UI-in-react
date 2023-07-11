import React from 'react'
import './Services.css'
import { Container } from 'react-bootstrap'
import c_icon from '../img/campus_icon.png'


function Services() {
  return (
    <>
      <Container fluid>
        <div>
            <div>
                <h1 className='service-head'> 
                    How <span className='text-primary fw-bold'> Campus Search </span> Works
                </h1> 
            </div>
            <div className='service_icon'>
                 <img src={c_icon} width="200px" alt='campus logo' />
            </div>
            <div className='service_para'>
                <p className='s_para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est odio, dolorem culpa earum aliquid, a illum asperiores quae officia explicabo laudantium, tempora expedita deleniti debitis nemo ex ratione cumque repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum provident nobis vitae ex commodi, hic at illum cupiditate eveniet esse nihil ratione saepe, accusamus blanditiis iusto adipisci explicabo velit sequi.</p>
            </div>
        </div>
      </Container>
    </>
  )
}

export default Services