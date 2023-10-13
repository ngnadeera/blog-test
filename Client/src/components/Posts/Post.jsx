import React from "react";
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

export const Post = (props) => {
  const { id, blog } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        </Row>
      </Container>

      
    </div>
  );
};
