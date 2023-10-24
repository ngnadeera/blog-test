import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import "./Comments.css"

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

        <button variant='contained' type='submit' className='btn btn-comment' disabled={isTextareaDisabled}>{submitLabel}</button>
        {hasCancelButton && (
            <Button className='comment-form-button comment-form-cancel-button' onClick={handleCancel}>Cancel </Button>
        )}
    </form>
  )
}
