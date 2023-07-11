import React from 'react'
import Banner from '../Banner.js'
import Services from '../Services.js'


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
      </section>
    </>
  )
}

export default Home