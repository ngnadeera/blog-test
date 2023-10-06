import React, { useEffect, useState } from 'react';
import { getComments as getCommentApi, createComment as createCommentApi, deleteComment as deleteCommentApi, updateComment, updateComment as updateCommentApi } from '../comments';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';

export const Comments = ({currentUserId}) => {
    const [backendComments,setBackendComments] = useState([]); 
    const [activeComment,setActiveComment] = useState(null);

    useEffect(() => {
        getCommentApi().then((data)=> {
            setBackendComments(data);
        })
    }, [])

    const rootComments = backendComments.filter(
        (backendComment) => backendComment.parentId === null
    );


    const addComment = (text, parentId) => {
        createCommentApi(text,parentId).then(comment => {
            setBackendComments([comment, ...backendComments])
            setActiveComment(null);
        })
    }

    const deleteComment = (commentId) => {
        if(window.confirm("Are you sure? ")){
            deleteCommentApi(commentId).then(() => {
                const updatedBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== commentId
                );
                setBackendComments(updatedBackendComments);
            }  )
    }
}

const updateComment = (text, commentId) => {
    updateCommentApi(text,commentId).then(()=> {
        const updatedBackendComments = backendComments.map(backendComment => {
            if (backendComment.id === commentId) {
                return {...backendComment, body:text}
            }
            return backendComment;
        });
        setBackendComments(updatedBackendComments);
        setActiveComment(null);
    })
}


    //function to get replies base on each comment id
    const getReplies = (commentId) => {
        return backendComments
        .filter((backendComment) => backendComment.parentId === commentId)
        .sort(
            (a,b) => 
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
    }
    
  


  return (
    <div className='comments'>
        <h3 className='comments-title'>Comments</h3>
        <div className='comment-form-title'>Write Comment</div>
        <CommentForm submitLabel="Write" handleSubmit={addComment}/>
        <div className='comment-container'>
        {rootComments.map((rootComment) => (
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
        ))}
        

        </div>


    </div>
  )
}
