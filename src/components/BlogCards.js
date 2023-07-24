import React from 'react'
import './BlogCards.css'
import {VscArrowRight} from 'react-icons/vsc'



const Card = (props) => (
    <>
            <div className="card rounded-4 mt-5 border border-white">
            <img  src={ props.imgUrl } className='rounded-5 '
                width="100%" alt={ props.alt || 'Image' }/>
            <div className="card-content p-3">
                <h4 className='text-left'>{props.Title}</h4>
                {/* <p >{props.content}</p> */}
                <p >{props.link}<VscArrowRight /></p>
            </div>
            </div>
    </>
);




const BlogCardContainer = (props) => (
    <>
      <div className="Blogs-card-container">
        {
          props.cards.map((card) => (
            <Card 
            imgUrl={ card.img }
            Title= {card.title}
            content={card.content}
            link={card.link}
            />
            ))
          }
      </div>
  
    </>
      
  );

function blogCards() {

    const BlogCardData = [
        {
            id:1,
            img: "https://www.usnews.com/object/image/0000015b-b66f-d19d-a7db-bfff8c710000/170428-collegetour-stock.jpg?update-time=1536955480383&size=responsive640",
            title:"Choosing the Right Courses and Universities for Study Abroad",
            content:"Studying abroad is a once-in-a-lifetime opportunity to broaden your horizons, immerse yourself in a new culture, and gain an education that will shape your future. ",
            link: <a className='text-decoration-none' href='/'> Read more </a>
        },
        {
            id:2,
            img: "https://images.shiksha.ws/mediadata/images/articles/iStock-474306176.jpg",
            title:"Scholarships, Funding, Education Loan for International Students",
            content:"As education becomes increasingly globalized, more and more students are seeking opportunities to study abroad. However, one major challenge that students face is financing their studies in a foreign country",
            link: <a className='text-decoration-none' href='/'> Read more </a>
        },
        
    
    ]


  return (
    <>
        <div className='container-blogCard'>
            <BlogCardContainer cards={BlogCardData} />
        </div>
    </>
  )
}

export default blogCards

