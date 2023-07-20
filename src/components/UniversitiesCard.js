import React from 'react'
import "./UinversitiesCard.css"

import {CiLocationOn} from 'react-icons/ci'
import {RiGraduationCapLine} from 'react-icons/ri'
import {MdVerified} from 'react-icons/md'





const Card = (props) => (
    <div className="card rounded-3 border border-dark ">
      <img  src={ props.imgUrl } className='px-2 pt-2 rounded-5 '
        width="100%" height="200px" alt={ props.alt || 'Image' }/>
      <div className="card-content">
        <img src={props.logoUrl}
        alt={ props.alt || 'logo' }/>
        <h5 className='text-center m-3'>{props.Name}</h5>
        <hr />
        <p> <CiLocationOn/> Place : {props.place}</p>
        <p><RiGraduationCapLine/> Course Type : {props.Courses}</p>
        <p > Approval : {props.approval} <MdVerified/></p>
      </div>
    </div>
);



const UniversitiesCardContainer = (props) => (
  <>
    <div className="university-cards-container">
      {
        props.cards.map((card) => (
          <Card 
          imgUrl={ card.img } 
          logoUrl={card.logoUrl}
          Name={card.Name}
          place={card.place}
          Courses={card.Courses}
          approval={card.approval}
          />
          ))
        }
    </div>

  </>
    
);

function UniversitiesCard() {

    const UniversitiesCardsData = [
        {
          id: 1,
          img: "https://images.collegedunia.com/public/college_data/images/campusimage/145084853614371187318.jpg",
          logoUrl: "",
          Name: 'UNIVERSITY OF CALICUT',
          place: "Malappuram",
          Courses: "150+ UG & 65+ PG",
          approval: "Verified",
        },
        {
            id: 2,
            img:"https://new-mgu-s3.s3.ap-south-1.amazonaws.com/Events/1668441110173event256.jpg",
            logoUrl: "",
            Name: 'MAHATMA GANDHI UNIVERSITY',
            place: "Kottayam",
            Courses: "150+ UG & 65+ PG",
            approval: "Verified",
        },
        {
            id: 3,
            img: "https://exams.keralauniversity.ac.in/Images/Imagedisplay/uok6.jpg",
            logoUrl: "",
            Name: 'UNIVERSITY OF KERALA',
            place: "Trivandram",
            Courses: "150+ UG & 65+ PG",
            approval: "Verified",
        },
        {
            id: 4,
          img: 'https://www.kannuruniversity.ac.in/media/images/Library_Science_-_1.original.jpg',
          logoUrl: "",
          Name: 'KANNUR UNIVERSITY',
          place: "Kannur",
          Courses: "150+ UG & 65+ PG",
          approval: "Verified",
        },
        {
            id: 6,
          img: 'https://www.askiitians.com/blog/wp-content/uploads/2014/07/43-copy.jpg',
          logoUrl: "",
          Name: 'NATIONAL INSTITUTE OF TECHNOLOGY',
          place: "Calicut",
          Courses: "30+ UG & 15+ PG",
          approval: "Verified",
        },
        {
            id: 7,
          img: 'https://img.collegepravesh.com/2019/05/SOE-CUSAT.jpg',
          logoUrl: "",
          Name: 'COCHIN UNIVERSITY OF SCIENCE AND TECHNOLOGY',
          place: "Kochi",
          Courses: "30+ UG & 15+ PG",
          approval: "Verified",
        },
      ]

  return (
    <>
        <div className="container-card">
            <UniversitiesCardContainer cards={ UniversitiesCardsData } />
        </div>
    </>
  )
}

export default UniversitiesCard;

