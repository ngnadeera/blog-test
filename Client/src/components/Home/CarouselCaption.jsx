import React from 'react';
import { Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const CarouselCaption = (props) => {
  const { category, title, content, writer, date, writerImage } = props;

  const captionStyle = {
    position: "absolute",
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
          fontWeight: 'bold'
        }}
      />
      <Link style={{ textDecoration: 'none' }}>
        <h1 style={{ marginTop: '18px', fontWeight: 'bold', color: 'white', width: '70%' }}>{title}</h1>
        <p style={{ color: 'white', marginTop: '10px', width: '70%' }}>{content}</p>
      </Link>
      <div style={{ display: 'flex', alignContent: 'center' }}>
        <Avatar
          alt={writer}
          src={writerImage}
          style={{
            width: '30px', 
            height: '30px',
          }}
        />
        <p style={{ marginLeft: '10px', fontSize: '10px', marginTop: '6px' }}>BY {writer}</p>
        <AccessTimeFilledIcon style={{ width: '16px', height: '16px', marginLeft: '10px', marginTop: '1.5px', color: '#E93314' }} />
        <p style={{ marginLeft: '7px', fontSize: '10px', marginTop: '4px' }}>{date}</p>
      </div>
    </div>
  );
};

export default CarouselCaption;
