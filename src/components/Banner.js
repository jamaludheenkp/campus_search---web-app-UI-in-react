import React from 'react'
import './Banner.css'
import { Button, Container} from 'react-bootstrap'
import img_log from '../img/img-admin.jpg'
import {BiSolidDownArrow} from 'react-icons/bi'
import CoursesButton from './CoursesButton'
import WhiteBanner from './WhiteBanner'






function Banner() {
  return (
    <div className='banner pt-5'>
      <Container fluid>
        <div>
          <h1 className='heading pt-5'>
          Powering Your Study Abroad Journey With Us </h1>
        </div>
        <div className="row pt-3">
          <div className='search-div'>
            <div className='img-admin'>
            <img src={img_log} alt="image_state" width="50px" className='rounded-5 '/>
            <span className='text-white p-1' style={{cursor:'pointer'}}> <BiSolidDownArrow/> </span>
            </div>
            <input type="search" className='search-input text-white' placeholder='Search for Universities and Courses' aria-label="Search" 
            />
            <Button type='search' className='btn btn-warning rounded-5 btn-lg px-4'> Search </Button>
          </div>
        </div>
          <div>
            <CoursesButton />
          </div>
          <div>
            <WhiteBanner />
          </div>
        </Container>
    </div>
  )
}

export default Banner
