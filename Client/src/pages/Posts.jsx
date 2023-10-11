import React from 'react'
import { useParams } from 'react-router-dom'
import { Post } from '../components/Posts/Post';



export const Posts = ({blogs}) => {

    let { id } = useParams();

  return (
    <div>
        <Post id={id} blog={blogs}/>
    </div>
  
  )
}
