import React from 'react'
import './FaqAccordion.css'
import { Accordion } from 'react-bootstrap';



function FaqAccordion() {
  return (
    <div>
        <Accordion defaultActiveKey={0} className=' p-3'>
            <Accordion.Item eventKey={0} className='item'>
                <Accordion.Header> What is Campus search ?</Accordion.Header>
                <Accordion.Body>
                Campus search is a study abroad platform that helps students to find and apply to universities. It provides a range of services including course selection, university search, admission process and career mentorship. The platform uses artificial intelligence technology to assist students in finding the right course and top universities in their desired study destination.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={1} className='item'>
                <Accordion.Header> How does Campus search works ?</Accordion.Header>
                <Accordion.Body>
                Campus search study abroad app works by helping students find courses and universities, assisting with the offer letter process, guiding them through the abroad admission and university application process, providing visa and pre-departure support, and offering career mentorship. To know more, sign up at Campus search and see how it works.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={2} className='item'>
                <Accordion.Header> Can Campus search help me to apply to any university of my choice? </Accordion.Header>
                <Accordion.Body>
                Yes, Campus search can help you apply to any university of your choice. The platform offers access to a wide range of universities and courses, with over 200+ universities and more than 50,000 courses to choose from. It uses AI technology to assist students in finding the right course and top universities in their desired study abroad destination. This means you can find and apply to the university that best suits your needs and preferences.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
  )
}

export default FaqAccordion;