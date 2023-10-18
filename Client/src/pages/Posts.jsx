import React from 'react'
import { useParams } from 'react-router-dom'
import { Post } from '../components/Posts/Post';
import { SearchByTopicsProvider } from '../components/Home/SearchByTopicsProvider';



export const Posts = ({blogs}) => {

    let { id } = useParams();

  return (
    <div>
      <SearchByTopicsProvider>
        <Post id={id} blog={blogs}/>
        </SearchByTopicsProvider>
    </div>
  
  )
}
