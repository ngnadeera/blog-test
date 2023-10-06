import React from 'react'
import { PostPage } from '../components/AllPosts/PostPage'


export const AllPosts = ({blogs}) => {

  return (
    <div>
        <PostPage blogs={blogs}/>     

    </div>
  )
}
