import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box } from "@mui/material";
import "./Posts.css";
import { useEffect } from "react";
import { useRef } from "react";
import { Comments } from "../Comments/Comments";
import { ArticleContent } from "./ArticleContent";
import { Subscribe } from "../Home/Subscribe";
import { SearchByTopics } from "../Home/SearchByTopics";
import { Topics } from "../Home/Topics";
import { ShareThisPost } from "./ShareThisPost";
import { Logout } from "../UserReg/Logout";
import axios from "axios";

export const Post = (props) => {
  const { id, blog } = props;
  const [ userid, setUserId ] = useState(0);
  const [ username,setUserName] = useState('');


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('accessToken')){
      axios.get(`http://${process.env.REACT_APP_API_HOST}:1337/api/users/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
      }).then((res) => {
        setUserId(res.data.id)
        setUserName(res.data.username)
      }).catch((err) => {
        console.error("Request failed with status code 400");
        setUserId(0);
      });
    }
  },[userid])

  const blogid = id;
  let blogContent = null;

  for (const item of blog.data) {
    if (item.id == blogid) {
      blogContent = item;
    }
  }

  return (
    <div className="post">
      <Container  fluid >
        <Row>
          <Col md={8} className="article-mt-14">
            <ArticleContent blog={blogContent} />
            <ShareThisPost/>
            <Logout/>
            
          </Col>

          <Col className="post-right">
    
              <div className="post-subscribe">
                <Topics topic={"Subscribe"} />
                <Subscribe />
              </div>

              <div className="post-search-by-topic" >
                <Topics topic={"Search By Topics"}  />
                <SearchByTopics />
              </div>
         
          </Col>
          <div style={{marginTop:"40px"}}>
          <Comments currentUserId={userid} username={username} postId={props.id}/></div>
        </Row>
      </Container>

      
    </div>
  );
};
