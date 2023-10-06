import React from "react";
import "./Comments.css";
import logo from "../../assets/Carousel/Img (1).jpg";
import { Button } from "@mui/material";
import { CommentForm } from "./CommentForm";
import { formatTimeAgo } from "./TImeFormat";

export const Comment = ({
  comment,
  replies,
  currentUserId,
  deleteComment,
  addComment,
  activeComment,
  setActiveComment,
  parentId = null,
  updateComment,
}) => {
  const fiveminutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveminutes;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const canDelete = currentUserId === comment.userId && !timePassed;
  const createdAt = new Date() - new Date(comment.createdAt);
  const minutesAgo = Math.floor(createdAt / (1000 * 60));
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.id;
  const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;
  console.log("is replying",isReplying);
  return (
    <div className="comment">
      <div className="comment-header">
        <div className="comment-image-container">
          <img className="comment-image" src={logo} />
        </div>
        <div className="comment-author">{comment.username}</div>
        <div className="comment-timestamp">{formatTimeAgo(minutesAgo)}</div>
      </div>
      <div className="comment-body">
        {!isEditing && <div className="comment-text">{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => setActiveComment(null)}
          />
        )}
        {canReply && (
          <Button
            className="comment-action"
            onClick={() =>
              setActiveComment({ id: comment.id, type: "replying" })
            }
          >
            Reply
          </Button>
        )}
        {canEdit && (
          <Button
            className="comment-action"
            onClick={() =>
              setActiveComment({ id: comment.id, type: "editing" })
            }
          >
            Edit
          </Button>
        )}
        {canDelete && (
          <Button
            className="comment-action"
            onClick={() => deleteComment(comment.id)}
          >
            Delete
          </Button>
        )}
        </div>
        <div>
            {isReplying && (
              <CommentForm
              submitLabel="Reply"
              handleSubmit={(text) => addComment(text, replyId)}
            />
            )}
            {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                replies={[]}
                addComment={addComment}
                updateComment={updateComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                currentUserId={currentUserId}
                deleteComment={deleteComment}
                parentId={comment.id}
              />
            ))} 
            </div>
             )}
          </div>
      
   
    </div>
  );
};
