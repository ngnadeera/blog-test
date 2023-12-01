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
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import arrow from "../../assets/Icons/right-arrow1.png";

export const Post = (props) => {
  const { id, blog } = props;
  const [userid, setUserId] = useState(0);
  const [username, setUserName] = useState("");
  const blogs = props.blog.data;

  const currentIndex = blogs.findIndex(
    (blog) => blog.id === parseInt(props.id)
  );
  const prevIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  const hasPrevious = prevIndex >= 0;
  const hasNext = nextIndex < blogs.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      axios
        .get(`http://${process.env.REACT_APP_API_HOST}:1337/api/users/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setUserId(res.data.id);
          setUserName(res.data.username);
        })
        .catch((err) => {
          console.error("Request failed with status code 400");
          setUserId(0);
        });
    }
  }, [userid]);

  const blogid = id;
  let blogContent = null;

  for (const item of blog.data) {
    if (item.id == blogid) {
      blogContent = item;
    }
  }

  return (
    <div className="post">
      <Container fluid>
        <Row>
          <Col md={8} className="article-mt-14">
            <ArticleContent blog={blogContent} />
            <ShareThisPost />

            <div className="Post-navigation-btn-container">
              {hasPrevious ? (
                <div className="post-navigation-next-btn">
                  <Link
                    className="post-navigation-link"
                    to={`/post/${blogs[prevIndex].id}`}
                  >
                    <div className="post-navigation-next-btn-container">
                      <div className="post-navigation-next-btn-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="70"
                          viewBox="0 0 12 18"
                          fill="none"
                        >
                          <path
                            d="M11.3993 17.1316L1.30644 9.03556L11.2171 1.13268"
                            stroke="black"
                          />
                        </svg>
                      </div>

                      <div
                        className="post-navigation-next-btn-caption"
                        style={{ marginLeft: "10px" }}
                      >
                        <div
                          className="post-navigation-next-btn-caption-next"
                          style={{ textAlign: "left", marginTop: "5px" }}
                        >
                          Previous Post
                        </div>

                        <div
                          className="post-navigation-next-btn-caption-heading"
                          style={{ textAlign: "left" }}
                        >
                          {blogs[prevIndex].attributes.heading}
                        </div>
                      </div>

                      <div></div>
                    </div>
                  </Link>
                </div>

                // <div className="post-navigation-pre-btn">
                // <Link to={`/post/${blogs[prevIndex].id}`}>
                //   &lt; Previous: {blogs[prevIndex].attributes.heading}
                // </Link>
                // </div>
              ): <div className="post-navigation-next-btn"></div>}

              {hasNext && (
                <div className="post-navigation-next-btn">
                  <Link
                    className="post-navigation-link"
                    to={`/post/${blogs[nextIndex].id}`}
                  >
                    <div className="post-navigation-next-btn-container">
                      <div className="post-navigation-next-btn-caption">
                        <div className="post-navigation-next-btn-caption-next">
                          Next Post
                        </div>

                        <div className="post-navigation-next-btn-caption-heading">
                          {blogs[nextIndex].attributes.heading}
                        </div>
                      </div>

                      <div className="post-navigation-next-btn-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="70"
                          viewBox="0 0 12 18"
                          fill="none"
                        >
                          <path d="M1 1L11 9.21053L1 17" stroke="black" />
                        </svg>
                      </div>

                      <div></div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </Col>

          <Col className="post-right">
            <div className="post-subscribe">
              <Topics topic={"Subscribe"} />
              <Subscribe />
            </div>

            <div className="post-search-by-topic">
              <Topics topic={"Search By Topics"} />
              <SearchByTopics />
            </div>
          </Col>

          <div style={{ marginTop: "40px" }}>
            <Comments
              key={props.id}
              currentUserId={userid}
              username={username}
              postId={props.id}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};
