import React, { useEffect } from 'react';
import Slider from '../components/Home/Carousel';
import BlogCard from '../components/Home/BlogCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LatestBlog } from '../components/Home/LatestBlog';
import Tabs from '../components/Home/Tabs.jsx';
import { Button } from '@mui/material';
import "./index.css"
import { useNavigate } from 'react-router-dom';

export const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { blogs } = props;
  
  const sortedBlogs = blogs.data.sort((a, b) => {
    const dateA = new Date(a.attributes.date);
    const dateB = new Date(b.attributes.date);
    return dateB - dateA;
  });

    const latestThreeBlogs = sortedBlogs.slice(0, 3);


  const navigate = useNavigate();


  return (
    <div>
      <Slider />
      <Container>
        <Row>
          <Col md={8}>
            <LatestBlog />

            {latestThreeBlogs.map((blog) => (
              <div key={blog.id}>
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
              </div>
            ))}
          </Col>
          <Col md={4} style={{marginTop:'11vh'}}>
            <Tabs />
          </Col>
        </Row>

        <Row>
        <Col md={8} style={{display:'flex', justifyContent:"center"}}>
            <Button className='seemore-button' variant='filled' onClick={()=> navigate('./AllPosts')}>Browse all blogs</Button>

        </Col>
        <Col md={4}></Col>
        </Row>
      </Container>

    </div>
  );
};
