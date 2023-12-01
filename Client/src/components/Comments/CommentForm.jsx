import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'


export const CommentForm = ({handleSubmit,submitLabel,hasCancelButton = false,initialText = '',handleCancel}) => {
    const [text,setText] = useState(initialText);
    const isTextareaDisabled = text.length === 0;
    const onsubmit = event => {
        event.preventDefault();
        handleSubmit(text);
        setText("")
    }
  return (
    <form className='comment-form' onSubmit={onsubmit}>
        <TextField
        className='comment-form-textarea' 
        value={text} 
        fullWidth
        onChange={(e) => setText(e.target.value)}
        />

        <p className='comment-form-admin-review-text'>*Please note that every comment you submit will undergo an admin review and will be published here within a few minutes</p>

        <button variant='contained' type='submit' className='btn btn-comment' disabled={isTextareaDisabled}>{submitLabel}</button>
        {hasCancelButton && (
            <button className='comment-form-cancel-btn btn btn-comment ' onClick={handleCancel}>Cancel </button>
        )}
        
    </form>
  )
}
