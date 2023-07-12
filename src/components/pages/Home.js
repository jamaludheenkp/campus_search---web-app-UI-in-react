import React from 'react'
import Banner from '../Banner.js'
import Services from '../Services.js'
import ExploreBox from '../ExploreBox.js'



function Home() {
  return (
    <>
      <section>
        <div >
        <Banner />
        </div>
      </section>
      <section>
        <div>
          <Services />
        </div>
        <div>
          <ExploreBox />
        </div>
      </section>
    </>
  )
}

export default Home