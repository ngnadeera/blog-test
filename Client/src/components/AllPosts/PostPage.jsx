import { Box, Button, ButtonGroup } from '@mui/material'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from "../../assets/Carousel/Img (1).jpg";
import BlogCard from '../Home/BlogCard';
import "./Allposts.css"

export const PostPage = ({blogs}) => {
  return (


      <Container fluid>
        <Row style={{padding:'20px', marginLeft:'8px'}}>
          <ButtonGroup className='button-group' size='small' variant="outlined" aria-label="outlined primary button group">
            <Button className='button-group-button'>Technology</Button>
            <Button className='button-group-button'>WI-DI</Button>
            <Button className='button-group-button'>WI-DI Lite</Button>
            <Button className='button-group-button'>Blog</Button>

          </ButtonGroup>
        </Row>
        <Row>
          
         {blogs.data.map((blog) => (
           <Col md={{span:6}}  key={blog.id} style={{marginBottom:"10px"}}>
            <Box className="inner-box-styles">
                <BlogCard
                  category={blog.attributes.tags}
                  title={blog.attributes.heading}
                  date={blog.attributes.date}
                  description={blog.attributes.subHeading}
                  author={blog.attributes.author}
                  authorImg = {`http://localhost:1337${blog.attributes.authorImage.data.attributes.url}`}
                  imageSrc={`http://localhost:1337${blog.attributes.coverImage.data.attributes.url}`}
                  postRoute={`/post/${blog.id}`}
                />
                </Box>
               </Col>
            ))}
            

     
        </Row>


      </Container>


  )
}
