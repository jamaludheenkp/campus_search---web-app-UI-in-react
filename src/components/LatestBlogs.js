import React from 'react';
import './LatestBlogs.css';
import { Button } from 'react-bootstrap';
import BlogCards from './BlogCards'


function LatestBlogs() {
  return (
    <>
        <section className='latestBlogs'>
            <div className="container ">
                <div className='d-flex flex-column justify-content-center flex-sm-row justify-content-sm-between'>
                    <h2>
                        Read our
                        <span> Latest Blogs </span>
                    </h2>
                </div>
                    <div className='d-flex'>
                    <Button className="btnLink ms-auto">Explore Blogs</Button>
                    </div>
                <div className="card-blog">
                    <BlogCards />
                </div>
            </div>
        </section>
    </>
  )
}

export default LatestBlogs