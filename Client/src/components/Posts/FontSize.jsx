import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./Posts.css"
import { useState } from 'react';

export const FontSize = ({ fontSize, onFontSizeChange }) => {

  return (
<div>
    <Box  className='fontSize-box'>
      <div className='font-size'> Font size: </div>
    <Slider
      aria-label="FontSize"
      valueLabelDisplay="auto"
      value={fontSize}
      onChange={(e, value) => onFontSizeChange(value)}
      step={5}
      marks
      min={10}
      max={25}
      sx={{width:"70%", color:"#E93314"}}
      size='small'
    />
    </Box>
    
    </div>
  )
}
