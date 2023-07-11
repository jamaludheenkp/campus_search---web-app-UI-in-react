import React from 'react'
import { Button } from 'react-bootstrap'
import './CoursesButton.css'

function CoursesButton() {
  return (
    <>
      <div className='raw'>
        <Button className='btn-course '>Information Technology </Button>
        <Button className='btn-course px-4'> Engineering </Button>
        <Button className='btn-course'> Business Management </Button>
        <Button className='btn-course'> Banking and Finance </Button>
        <Button className='btn-course px-4'> Law </Button>
        <Button className='btn-course px-4'> Health Care </Button>
        <Button className='btn-course'> Arts & Literature </Button>
        <Button className='btn-course px-4'> Journalism </Button>
        <Button className='btn-course '> Sports & Nutrition </Button>
      </div>
    </>
  )
}

export default CoursesButton