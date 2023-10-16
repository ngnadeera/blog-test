import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./index.css"
import { useNavigate } from 'react-router-dom';
import { Topics } from '../components/Home/Topics';
import { MainCard } from '../components/Home/MainCard';
import { Subscribe } from '../components/Home/Subscribe';
import { SearchByTopics } from '../components/Home/SearchByTopics';
import { AllPostPagination } from '../components/Home/AllPostPagination';

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

    const latestBlog = sortedBlogs[0];


  const navigate = useNavigate();


  return (
    <div>


      <Container>
        <Row>
          <Col md={8} sm={12} className='col-sm-12'>
            <Topics topic={"Top Posts"}/>
            <MainCard blog={latestBlog}/>
          </Col>
          <Col md={3} sm={12} className="offset-md-1 col-sm-12" >
          <Topics topic={"Subscribe"}/>
          <Subscribe/>
          <div className="search-by-topic">
          <Topics  topic={"Search by Topic"}/>
          <SearchByTopics/>
          </div>
          </Col>
        </Row>

        <Row>
    
          <Topics  topic={"All Posts"}/>
   
   
            <AllPostPagination blogs={blogs}/>

        </Row>
      </Container>
  
    </div>
  );
};
