import React from 'react'
import { Button } from 'react-bootstrap'
import './CoursesButton.css'

function CoursesButton() {
  return (
    <>
      <div className='raw btn_course'>
        <Button className='btn btn-course px-3'>Information Technology </Button>
        <Button className='btn btn-course px-4'> Engineering </Button>
        <Button className='btn btn-course px-3'> Business Management </Button>
        <Button className='btn btn-course px-3'> Banking and Finance </Button>
        <Button className='btn btn-course px-4'> Law </Button>
        <Button className='btn btn-course px-4'> Health Care </Button>
        <Button className='btn btn-course px-3'> Arts & Literature </Button>
        <Button className='btn btn-course px-4'> Journalism </Button>
        <Button className='btn btn-course px-3'> Sports & Nutrition </Button>
      </div>
    </>
  )
}

export default CoursesButton