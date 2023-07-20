import React from 'react'
import './TopUniversities.css'
import { Container } from 'react-bootstrap'
import UniversitiesCard from './UniversitiesCard'



function TopUniversities() {
  return (
    <>
        <section className='top_universities'>
        <Container fluid className='Container'>
          <div className="row align-items-centre">
            <div className='col-12 col-md-12 col-lg-5'>
              <h1>
                Top <span className='text-primary'> Universities </span> <br />
                 in India
              </h1>
              <div className='d-md'> <br /></div>
            </div>
            <div className='col-12 col-md-12 col-lg-7 mx-0' style=       {{marginTop:"180px"}}>
                <ul className='nav nav-pills topUniversityNav' role='tablist'>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" type="button" role="tab" > Kerala</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link " type="button" role="tab" > Tamil Nadu </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" type="button" role="tab"> Karnataka</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link " type="button" role="tab"> Telengana </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link " type="button" role="tab"> Madhya Predhesh</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link " type="button" role="tab"> Panjab </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link " type="button" role="tab"> Delhi </button>
                  </li>
                </ul>
              </div>
              {/* university card listing */}
              <UniversitiesCard />
          </div>
        </Container>
        </section>
    </>
  )
}

export default TopUniversities