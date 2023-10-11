import React from 'react'
import image from "../../assets/Carousel/Img (3).jpg"
import { useNavigate } from 'react-router-dom'


export const Cards = ({title,imagesrc,postRoute}) => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate(postRoute);
  }
  return (
    <div className="card">
      <img src={imagesrc} alt="Card Image" loading='lazy'/>
      <p className="card-text">
        {title}
      </p>
    <div className='card-button-container'>
      <button className='btn cards-btn' onClick={handleclick}>Read More</button>
      </div>
    </div>
  )
}
