import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IconButton from '@mui/material/IconButton';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRight';
import { Chip } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const BlogCard = (props) => {
  const { category, title, date, description, author, authorImg, imageSrc, postRoute } = props;


  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <div className='blogCard-image-container'>
              <img className='blogCard-image' src={imageSrc} alt='Blog' />
              <div className='center-icon'>
                <IconButton color='primary' onClick={() => { navigate(`${postRoute}`)}}>
                  <ArrowCircleRightTwoToneIcon className='arrow-icon' fontSize='large'/>
                </IconButton>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <Container fluid style={{ padding: '10px' }}>
              <Row>
                <Col>
                  <Chip
                    className='blog-card-chip'
                    size="small"
                    label={category}
                    style={{
                      borderRadius: '5px',
                      backgroundColor: '#E93314',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '10px'
                    }}
                  />
 <Link to={postRoute} style={{ textDecoration: 'none' }}>
                  <h6 className='blogcard-caption'>{title}</h6>
                  <div style={{ display: 'flex' }}>
                    <AccessTimeFilledIcon style={{ width: '14px', height: '14px', color: '#E93314', marginTop: '-4px' }} />
                    <p style={{ marginLeft: '7px', fontSize: '10px', marginTop: '-4px', fontWeight: 'bold', color: '#5E646A' }}>{date}</p>
                  </div>
                  <p style={{ color: '#5E646A', fontSize: '11px' }}>{description}</p>
                  <div style={{ display: 'flex' }}>
                    <Avatar
                      src={authorImg}
                      style={{
                        width: '30px',
                        height: '30px',
                      }}
                    />
                   
                    <p style={{ marginLeft: '10px', fontSize: '10px', marginTop: '6px', color: '#5E646A' }}>{`BY ${author}`}</p>
                  </div>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogCard;
