import React, { useContext, useEffect, useState } from "react";
import {
  getComments as getCommentApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment,
  updateComment as updateCommentApi,
} from "../comments";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";
import { AuthContext } from "../../helpers/AuthContext";
import { LogInRequest } from "./LogInRequest";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar'; 
import MuiAlert from '@mui/material/Alert'; 
export const Comments = ({ currentUserId, username, postId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const [ open,setOpen ] = useState(false);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    // getCommentApi().then((data)=> {
    //     setBackendComments(data);
    // })
    axios
      .get(
        `http://${process.env.REACT_APP_API_HOST}:1337/api/comments?filters[postId][$eq]=${postId}`
      )
      .then((res) => {
        const commentList = res.data.data;
        setBackendComments(commentList);
      });
  }, []);

  const rootComments = backendComments.filter(
    (backendComment) => (backendComment.attributes.parentId === null )
  ).sort((a,b) => (
    new Date(b.attributes.createdAt).getTime() - new Date(a.attributes.createdAt).getTime()
  ));

  // console.log("1st", rootComments[0] ? rootComments[0].attributes : '')

  const addComment = (text, parentId=null) => {
    axios
      .post(
        `http://${process.env.REACT_APP_API_HOST}:1337/api/comments`,
        {
          data: {
            body: text,
            username: username,
            userId: currentUserId,
            postId: postId,
            parentId,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        // const newComment = {
        //   id: res.data.data.id,
        //   attributes: {
        //     body: text,
        //     createdAt: new Date().getTime(),
        //     parentId,
        //     postId: postId,
        //     userId: currentUserId,
        //     username: username,
        //   },
        // };
        // setBackendComments([newComment, ...backendComments]);
        setOpen(true);
        setActiveComment(null);
      }).catch((error) => {
        console.error("Error adding comment:", error);
      });


  };

  const deleteComment = (commentId) => {  //give the comment id
    axios
      .delete(
        `http://${process.env.REACT_APP_API_HOST}:1337/api/comments/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then(() => {
        const updatedBackendComments = backendComments.filter(
          (comment) => comment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
      });
    //         if(window.confirm("Are you sure? ")){
    //             deleteCommentApi(commentId).then(() => {
    //                 const updatedBackendComments = backendComments.filter(
    //                     (backendComment) => backendComment.id !== commentId
    //                 );
    //                 setBackendComments(updatedBackendComments);
    //             }  )
    //     }
  };

   const updateComment = (text, commentId) => {

    axios
    .put(`http://${process.env.REACT_APP_API_HOST}:1337/api/comments/${commentId}`, {
      data: {
        body: text,
      },
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      }
    })
    .then((res) => {
      const updatedBackendComments = backendComments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            attributes: {
              ...comment.attributes,
              body: text,
            },
          };
        }
        return comment;
      });

      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    })
    .catch((error) => {
      console.error('Error updating comment:', error);
    });
  //     updateCommentApi(text,commentId).then(()=> {
  //         const updatedBackendComments = backendComments.map(backendComment => {
  //             if (backendComment.id === commentId) {
  //                 return {...backendComment, body:text}
  //             }
  //             return backendComment;
  //         });
  //         setBackendComments(updatedBackendComments);
  //         setActiveComment(null);
  //     })
   }

      //function to get replies base on each comment id
      const getReplies = (commentId) => {
          return backendComments
          .filter((backendComment) => backendComment.attributes.parentId === commentId && backendComment.attributes.Submit === true) 
          .sort(
              (a,b) =>
              new Date(a.attributes.createdAt).getTime() - new Date(b.attributes.createdAt).getTime()
          );
      }
  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      {authState ? (
        <div className="comment-form-title">Write Comment</div>
      ) : null}
      {authState ? <CommentForm submitLabel="Write" handleSubmit={addComment}/> : <LogInRequest/>}
      
      <div className="comment-container">
        {rootComments.map((rootComment) => (
          (rootComment.attributes.Submit === false && rootComment.attributes.userId === currentUserId) ? 
         ( <Comment
            key={rootComment.id}
            comment={rootComment}
             replies={getReplies(rootComment.id)}
            currentUserId={currentUserId}
             updateComment={updateComment}
             deleteComment={deleteComment}
             activeComment={activeComment}
             setActiveComment={setActiveComment}
             addComment={addComment}
          />
         ) : (rootComment.attributes.Submit === true) ? (
          <Comment
            key={rootComment.id}
            comment={rootComment}
             replies={getReplies(rootComment.id)}
            currentUserId={currentUserId}
             updateComment={updateComment}
             deleteComment={deleteComment}
             activeComment={activeComment}
             setActiveComment={setActiveComment}
             addComment={addComment}
          />
         ) : ''
        ))}

        
      </div>

      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <MuiAlert elevation={6} variant="filled" severity="success">
        Your submitted comment is currently undergoing an administrative review.
        </MuiAlert>
      </Snackbar>

    </div>
  );
};
