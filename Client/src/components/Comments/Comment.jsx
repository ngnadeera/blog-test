import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { CommentForm } from "./CommentForm";
import { formatTimeAgo } from "./TImeFormat";
import BackgroundLetterAvatars from "./BackgroundLetterAvatars";
import Chip from '@mui/material/Chip';
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import axios from "axios";

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
  isReply = false,
}) => {
  const fiveminutes = 100000000;
  const timePassed = new Date() - new Date(comment.attributes.createdAt) > fiveminutes;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.attributes.userId && !timePassed;
  const canDelete = currentUserId === comment.attributes.userId && !timePassed;
  const createdAt = new Date() - new Date(comment.attributes.createdAt);
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
  const submittedComment = comment.attributes.Submit === true;

  const isCurrentUser = currentUserId === comment.attributes.userId;
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const fetchImageUrl = async () => {
      const res = await axios.get(`http://${process.env.REACT_APP_API_HOST}:1337/api/avatars?filters[userId][$eq]=${comment.attributes.userId}`);

      if (res.data && res.data.data && res.data.data.length > 0 && res.data.data[0].attributes.avatarUrl) {
        const url = res.data.data[0].attributes.avatarUrl;
        setAvatarUrl(url);
      } else {
        setAvatarUrl('');
      }
    }
    fetchImageUrl();
  }, [])

  return (
    <div className={`comment ${!submittedComment && 'comment-not-submitted-style'}`}>
      <div className="comment-header">
        {avatarUrl != '' ?  <div className="comment-image-container">
          <img className="comment-image" src={`http://${process.env.REACT_APP_API_HOST}:1337${avatarUrl}`} />
        </div> : <BackgroundLetterAvatars name={comment.attributes.username} size={36} fontSize={18} /> }
        

        <div className="comment-author">
          {comment.attributes.username}
          {isCurrentUser && <span className="comment-you-chip"> You </span>}
          
          </div>
          <div className="comment-timestamp">{formatTimeAgo(minutesAgo)}</div>

        <div className="comment-reply-button">
          {(canReply && submittedComment) && (
          <Button
          startIcon={<ReplyIcon />}
            onClick={() =>
              setActiveComment({ id: comment.id, type: "replying" })
            }
          >
            Reply
          </Button>
        )}
        </div>

        <div className="comment-reply-button">
        {canDelete && (
          <>
          {submittedComment && '|'}
          <Button
    sx={{color:'red'}}
          startIcon={<DeleteForeverIcon color="error" /> }
            className="comment-action"
            onClick={() => deleteComment(comment.id)}
          >
            Delete
          </Button>
          |
          </>
        )}
        </div>

        <div className="comment-reply-button">
        {canEdit && (
          <>
          <Button
            className="comment-action"
            startIcon={<ModeEditIcon /> }
            onClick={() =>
              setActiveComment({ id: comment.id, type: "editing" })
            }
          >
           Edit  
          </Button> 
          </>)}
        </div>

      </div>
      <div className="comment-body">
        {!isEditing && <><div className="comment-text">{comment.attributes.body}</div>
      {! submittedComment && <div className="comment-form-admin-review-text comment-text-admin-review-text">waiting for the admin approval...</div>}</>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.attributes.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => setActiveComment(null)}
          />
        )}
        

        
        
        </div>
        <div>
            {isReplying && (
              <CommentForm
              submitLabel="Reply"
              hasCancelButton
              handleCancel={() => setActiveComment(null)}
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
                isReply= {true}
              />
            ))} 
            </div>
             )}
          </div>
      
   
    </div>
  );
};
