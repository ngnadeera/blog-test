import React from "react";

export const Topics = ({ topic }) => {
  return (
    <div className="topics">
      <div className="topic">{topic}</div>
      <div className="topics-hr"></div>
    </div>
  );
};
