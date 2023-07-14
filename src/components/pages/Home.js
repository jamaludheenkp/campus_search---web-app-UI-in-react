import React from 'react'
import Header from '../Header.js'
import Banner from '../Banner.js'
import Services from '../Services.js'
import ExploreBox from '../ExploreBox.js'
import TopCourses from '../TopCourses.js'




function Home() {
  return (
    <>
      <div className='bg-light'>
      <Header/>
      <Banner />
      <Services />
      <ExploreBox />
      <TopCourses />
      </div>
    </>
  )
}

export default Home