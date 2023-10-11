import React from "react";
import DateDisplay from "../Home/DateDisplay ";
import ReactMarkdown from "react-markdown";


const renderers = {
    image: ({ alt, src, title }) => (
      <img alt={alt} src={src}  style={{ width: "475" }} />
    ),
  };

export const ArticleContent = ({ blog }) => {

    
  return (
    <div className="article-content">
      <div className="article-content-heading main-card-heading">{blog.attributes.heading}</div>
      <div className="flex-continer">
        <div className="main-card-date article-content-author" >{blog.attributes.author}</div>
        <div className="article-content-verticle-line"></div>
        <div className="main-card-date article-content-date">
          <DateDisplay dateString={blog.attributes.date} />
        </div>
      </div>
      <div className="article-content-body">

      <ReactMarkdown children={blog.attributes.content}
  components={{img:({node,...props})=><img style={{maxWidth:'100%', objectFit:'cover',padding:'20px' }}{...props}/>}}
/>
      </div>
    </div>
  );
};
