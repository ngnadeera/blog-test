import React from "react";
import image from "../../assets/Carousel/Img (2).jpg";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Avatar from "@mui/material/Avatar";
import author from "../../assets/leader.png"
import { useNavigate } from "react-router-dom";
import DateDisplay from "./DateDisplay ";

export const MainCard = ({blog}) => {

  const content = blog;
  const navigate = useNavigate();


  const handleClick = () => {
    navigate(`/post/${content.id}`);
  }

  return (
    <div className="main-card">
      <div className="main-card-container">
        <img className="main-card-image" src={`http://localhost:1337${content.attributes.coverImage.data.attributes.url}`} alt="image" />
      </div>
      <h4 className="main-card-heading">
      {content.attributes.heading}
      </h4>
      <div className="main-card-date-container">
        {" "}
        <CalendarMonthOutlinedIcon
          sx={{ color: "#0d2841", fontSize: "19px" }}
        />{" "}
        <div className="main-card-date"> <DateDisplay dateString={content.attributes.date} /></div>
      </div>
      <div className="main-card-content">
      {content.attributes.content}
      </div>
      <div className="main-card-author-container">
        <Avatar
          alt="Remy Sharp"
          src={author}
          sx={{ width: 90, height: 90,}}
        />
        <p className="main-card-date main-card-author-name">{content.attributes.author}
</p>
      </div>
      <button className="btn dark" onClick={handleClick}>Read More</button>
    </div>
  );
};
