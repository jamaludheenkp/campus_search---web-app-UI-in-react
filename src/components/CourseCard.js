import React from 'react'
import './CourseCard.css'
import {RiGraduationCapLine , RiFilePaperLine} from 'react-icons/ri'
import {GiSandsOfTime } from 'react-icons/gi'
import {CiLocationOn} from 'react-icons/ci'




const Card = (props) => (
    <div className="card rounded-4 border border-dark ">
      <img src={ props.imgUrl } 
        alt={ props.alt || 'Image' }/>
      <div className="card-content">
        <h5>{ props.courseName }</h5>
        <br />
        <h6>{ props.university }</h6>
        <p>{props.fees}</p>
        <hr />
        <p> <RiGraduationCapLine/> {props.courseType}</p>
        <p><GiSandsOfTime /> {props.duration}</p>
        <p><RiFilePaperLine /> {props.intake}</p>
        <p><CiLocationOn /> {props.state}</p>
      </div>
    </div>
);



const CardContainer = (props) => (
  <>
    <div className="cards-container">
      {
        props.cards.map((card) => (
          <Card courseName={ card.courseName }
          university={ card.university }
          imgUrl={ card.imgUrl } 
          fees={card.fees} 
          courseType={card.courseType}
          duration={card.duration}
          intake={card.intake}
          state={card.state}/>
          ))
        }
    </div>

  </>
    
);


function CourseCardContainer() {

    const CourseCardsData = [
        {
          id: 1,
          courseName: 'Msc Data Analytics',
          university: 'UNIVERSITY OF CALICUT',
          imgUrl: '',
          fees: "Rs. 17,100 1st year ",
          courseType: "Course Type : Masters",
          duration: "Duration : 24 Months",
          intake : "Intake : june 2024",
          state : "State : Kerala "
        },
        {
          id: 2,
          courseName: 'Bsc Computer Science', 
          university: 'UNIVERSITY OF CALICUT', 
          imgUrl: '',
          fees: "Rs. 23,100 1st year ",
          courseType: "Course Type : Bachelors",
          duration: "Duration : 36 Months",
          intake : "Intake : june 2024",
          state : "State : Kerala "
        },
        {
          id: 3, 
          courseName: 'B.Tech. in Computer Science and Engineering', university: 'DTU - Delhi Technological University', 
          imgUrl: '',
          fees: "Rs. 19,100 1st year ",
          courseType: "Course Type : Bachelors",
          duration: "Duration : 48 Months",
          intake : "Intake : june 2024",
          state : "State : Delhi "
        },
        {id: 4, 
          courseName: 'Instrumentation & Electronics Engineering', 
          university: 'Manipal Institute of Technology', 
          imgUrl: '',
          fees: "Rs. 24,100 1st year ",
          courseType: "Course Type : Diploma",
          duration: "Duration : 12 Months",
          intake : "Intake : june 2024",
          state : "State : Karnataka "
        },
        {
          id: 5, 
          courseName: 'CSE in Blockchain Technology', 
          university: 'Chandigarh University (CU)', 
          imgUrl: '',
          fees: "Rs. 22,100 1st year ",
          courseType: "Course Type : Diploma",
          duration: "Duration : 24 Months",
          intake : "Intake : june 2024",
          state : "State : Chandigarh "
        },
        {
          id: 6, 
          courseName: 'B.Tech. in Information Technology', 
          university: 'KIIT School of Engineering', 
          imgUrl: '',
          fees: "Rs. 19,100 1st year ",
          courseType: "Course Type : Bachelors",
          duration: "Duration : 48 Months",
          intake : "Intake : june 2024",
          state : "State :  Odisha"
        },
        {
          id: 7, 
          courseName: 'B.Sc. in Computer Science (Cyber Security)', 
          university: 'SRM Institute of Science and Technology, Chennai', imgUrl: '',
          fees: "Rs. 19,900 1st year ",
          courseType: "Course Type : Bachelors",
          duration: "Duration : 36 Months",
          intake : "Intake : june 2024",
          state : "State :  Tamil Nadu"
        },
      ]

  return (
    <>
      <div className="container-card">
        <CardContainer cards={ CourseCardsData } />
      </div>
    </>
  )
}


export default CourseCardContainer;