import React from 'react'
import Header from '../Header.js'
import Banner from '../Banner.js'
import Services from '../Services.js'
import ExploreBox from '../ExploreBox.js'
import TopCourses from '../TopCourses.js'
import TopUniversities from '../TopUniversities.js'
import Testimonials from '../Testimonials.js'
import LatestBlogs from '../LatestBlogs.js'
import ExpertAdvice from '../ExpertAdvice.js'




function Home() {
  return (
    <>
      <div className='bg-light'>
        <Header/>
        <Banner />
        <Services />
        <ExploreBox />
        <TopCourses />
        <TopUniversities />
        <Testimonials />
        <LatestBlogs />
        <ExpertAdvice />
      </div>
    </>
  )
}

export default Home