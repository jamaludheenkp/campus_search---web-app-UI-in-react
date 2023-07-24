import React from 'react'
import './TestimonialCard.css'




const Card = (props) => (
                <div className='tns-card'>   
                    <div className="card ">
                        <div className="row g-0">
                            <div className="col-12">
                                <div className="card-body">
                                    <p className="card-text p-3">{props.content}</p>
                                    <br/>
                                    <br/>
                                    <div className='row ' >
                                    <div className='col-md-8 mt-3 ms-auto'>
                                        <h6 className='text-white fs-5 fw-bold'>{props.Name}</h6>
                                        <small className='text-white'>{props.course}</small>
                                        <br/>
                                        <small className='text-white'>{props.university}</small>
                                    </div>
                                    <div className='col-md-3 ms-auto'>
                                        <img src={props.imgUrl} className="img-fluid  rounded-circle"  alt="student" style={{ width:"300px"}}/>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
);




const TestimonialCardContainer = (props) => (
    <>
      <div className="testimonial-cards-container">
        {
          props.cards.map((card) => (
            <Card 
            imgUrl={ card.img }
            content={card.content}
            Name={card.Name}
            course={card.course}
            university={card.university}
            />
            ))
          }
      </div>
  
    </>
      
  );

function TestimonialCard() {

    const TestimonialCardData =[
        {
            id:1,
            img:"https://www.gbmv.in/images/m-principal.jpg",
            content:"Campus search was an excellent resource for me in finding my dream course and university. Their counselling and mentorship program helped me make an informed decision, and the pre-departure assistance was exceptional. Thanks to Campus Search team.",
            Name:"Saige Fuentes.",
            course: "CSE in Blockchain Technology",
            university:"Chandigarh University (CU) "
        },
        {
            id:2,
            img:"https://www.gbmv.in/images/m-principal.jpg",
            content:"Campus search was an excellent resource for me in finding my dream course and university. Their counselling and mentorship program helped me make an informed decision, and the pre-departure assistance was exceptional. Thanks to Campus Search team.",
            Name:"Bowen Higgins",
            course:"Msc Data Analytics",
            university: "DTU - Delhi Technological University"
        },
        {
            id:3,
            img:"https://www.gbmv.in/images/m-principal.jpg",
            content:"Campus search was an excellent resource for me in finding my dream course and university. Their counselling and mentorship program helped me make an informed decision, and the pre-departure assistance was exceptional. Thanks to Campus Search team.",
            Name:"Leighton Kramer",
            course:"Instrumentation & Electronics Engineering",
            university: "Manipal Institute of Technology",
        },
        {
            id:4,
            img:"https://www.gbmv.in/images/m-principal.jpg",
            content:"Campus search was an excellent resource for me in finding my dream course and university. Their counselling and mentorship program helped me make an informed decision, and the pre-departure assistance was exceptional. Thanks to Campus Search team.",
            Name:"Leighton Kramer",
            course:"Instrumentation & Electronics Engineering",
            university: "Manipal Institute of Technology",
        }
    ] 

    
  return (
    <div>
        <div className='container-card'>
            <TestimonialCardContainer cards={ TestimonialCardData } />
        </div>
    </div>
  )
}

export default TestimonialCard;



