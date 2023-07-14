import React from 'react'
import './TopCourses.css'
import {Container} from 'react-bootstrap'
import CourseCard from './CourseCard'



function TopCourses() {

  // const [showCourseCard, setShowCourseCard] = useState(false)

  return (
    <>
      <section className='top_courses '>
        <Container fluid className='Container'>
          <div className="row align-items-centre">
            <div className='col-12 col-md-12 col-lg-4'>
              <h1>
                Top <span className='text-primary'> Courses </span> <br />
                 in India
              </h1>
              <div className='d-md'> <br /></div>
            </div>
            <div className='col-12 col-md-12 col-lg-8 mx-0' style=       {{marginTop:"180px"}}>
                <ul className='nav nav-pills topCourseNav' role='tablist'>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" type="button" role="tab" > Information Technology</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link " type="button" role="tab" > Engineering </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" type="button" role="tab"> Business Management </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link " type="button" role="tab"> Health Care </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link " type="button" role="tab"> Arts & Litrature</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link " type="button" role="tab"> Law  </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link " type="button" role="tab"> Journalism </button>
                  </li>
                </ul>
              </div>
              {/* course card listing */}
              {<CourseCard />}
          </div>
        </Container>
      </section>
    </>
  )
}

export default TopCourses