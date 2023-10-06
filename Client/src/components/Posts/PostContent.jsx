import React from 'react'
import { Button, Typography } from '@mui/material';
import { FontSize } from './FontSize';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Posts.css";
import ReactMarkdown from 'react-markdown'
import { useState } from 'react';
import {Box} from '@mui/material';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';

export const PostContent = ({content}) => {
  

  const [fontSize, setFontSize] = useState(15); 

  const handleFontSizeChange = (value) => {
    setFontSize(value);
  };

  return (
    <div>
<Container fluid>

  <Row>
    <Col md={{ span: 5}}>
    <FontSize fontSize={fontSize} onFontSizeChange={handleFontSizeChange} />
    </Col>
    <Col md={{ span: 4}} style={{display:'flex', justifyContent:'flex-end', marginLeft:'-5%'}}>
    <Button className='print-button' variant="outlined" startIcon={<LocalPrintshopIcon />}>
    Print
    </Button>
    </Col>

  </Row>



<Row style={{marginTop:'12px'}}>

    <div style={{width:'70%',textAlign:'justify',fontSize:`${fontSize}px`}}>
    <ReactMarkdown >
    {content}
    </ReactMarkdown>
    </div>

</Row>

    </Container>

    </div>
   
  )
}
