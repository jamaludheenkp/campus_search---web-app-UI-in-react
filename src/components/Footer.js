import React from 'react'
import './Footer.css'
import {BsInstagram, BsFacebook, BsWhatsapp, BsTwitter} from 'react-icons/bs'

import logo_white from '../img/logo_white.png'

function Footer() {
  return (
    <>
        <section className='footer'>
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className='logo-bg'>
                        <img src={logo_white} alt="logo_image" width="300px"/>
                    <div className='sb_footer-links_div'>
                        <h4 className='mt-5'>Follow Us</h4>
                        <div className='socialMedia'>
                            <p> <BsInstagram/> </p>
                            <p> <BsFacebook/> </p>
                            <p> <BsWhatsapp/> </p>
                            <p> <BsTwitter/> </p>
                        </div>
                    </div>
                    </div>
                    <div className="sb_footer-links_div">
                        <div className="sb_footer-heading">
                            <h4>Quick Links</h4>
                        </div>
                        <a href="/">
                            <p>Home</p>
                        </a>
                        <a href="/courses">
                            <p>Courses</p>
                        </a>
                        <a href="/universities">
                            <p>Universities</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                    <div className="sb_footer-heading">
                        <h4>Company</h4>
                    </div>
                        <a href="/about">
                            <p>About Us</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                        <a href="/blogs">
                            <p>Blogs</p>
                        </a>
                        <a href="/faq">
                            <p>FAQ</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                    <div className="sb_footer-heading">
                        <h4>States</h4>
                    </div>
                        <a href="/#">
                            <p>Kerala</p>
                        </a>
                        <a href="/#">
                            <p>Tamil Nadu</p>
                        </a>
                        <a href="/#">
                            <p>Karnataka</p>
                        </a>
                        <a href="/#">
                            <p>New Delhi</p>
                        </a>
                    </div>
                    
                </div>
                <hr />
                <div className='sb_footer-below'>
                    <div className="sb_footer-copyright">
                        <p>
                            ©️ {new Date().getFullYear()} Campus Search. All right reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="/terms"> <div><p> Terms of Use </p></div></a>
                        <a href="/privacy"> <div><p> Privacy Policy </p></div> </a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer