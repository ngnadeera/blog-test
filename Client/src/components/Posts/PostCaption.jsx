import React from 'react';
import { Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import "./Posts.css"
const PostCaption = (props) => {
  const { category, title, content, writer, date, writerImage } = props;

  const captionStyle = {
    top: "35%", 
    left: "10%", 
    color: "white", 
    padding: "10px", 
    borderRadius: "5px", 
  };

  return (
    <div style={captionStyle}>
      <Chip
        label={category}
        style={{
          borderRadius: '5px',
          backgroundColor: '#E93314',
          color: 'white',
          fontWeight: 'bold',
          marginBottom: "5px"
        }}
      />

        <h1 className='post-caption-title'>{title}</h1>
        <p className='post-caption-content'>{content}</p>
    
      <div style={{ display: 'flex', alignContent: 'center' }}>
        <Avatar
          alt={writer}
          src={writerImage}
          style={{
            width: '30px', 
            height: '30px',
          }}
        />
        <p  className="post-caption-normal-text "style={{ marginLeft: '10px', marginTop: '6px' }}>BY {writer}</p>
        <AccessTimeFilledIcon style={{ width: '16px', height: '16px', marginLeft: '10px', marginTop: '5px', color: '#E93314' }} />
        <p  className="post-caption-normal-text" style={{ marginLeft: '7px', marginTop: '7px'}}>{date}</p>
      </div>
    </div>
  );
};

export default PostCaption;
