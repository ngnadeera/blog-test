import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Box } from '@mui/material';
import './Posts.css'
import PostCaption from './PostCaption';
import image from "../../assets/Carousel/Img (2).jpg"
import { PostContent } from './PostContent';
import { FontSize } from './FontSize';
import { useEffect } from 'react';
import image1 from "../../assets/Carousel/Img (1).jpg"
import BlogCard from '../Home/BlogCard';
import { useRef } from 'react';
import { Comments } from '../Comments/Comments';
export const Post = (props) => {

  const {id,blog} = props
  console.log(blog)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogid  = id;
  let blogContent = null;
  
  for (const item of blog.data){
    if (item.id == blogid){
      blogContent = item;
    }
  }




  return (
    <div>
  
        <Box className='box-styles'>  
        <PostCaption
        category={blogContent.attributes.tags}
        title={blogContent.attributes.heading}
        content={blogContent.attributes.subHeading}
        writer={blogContent.attributes.author}
        writerImage={`http://localhost:1337${blogContent.attributes.authorImage.data.attributes.url}`}
        date={blogContent.attributes.date}
      />

      <img className='post-image' src={`http://localhost:1337${blogContent.attributes.coverImage.data.attributes.url}`} />
        
        <PostContent content={blogContent.attributes.content}/>

        <Comments currentUserId="1" />

        </Box>



    </div>
  )
}
