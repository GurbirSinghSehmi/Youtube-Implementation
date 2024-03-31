import React from 'react'
import { COMMENTS_DATA } from '../utils/Constants'
import Comment from './Comment'
import CommentsList from './CommentsList'

const CommentsContainer = () => {
  return (
    <div className = "m-5 p-2">
        <h1 className = "text-2xl font-bold">Comments:</h1>
        <CommentsList data = {COMMENTS_DATA}/>
    </div>
  )
}

export default CommentsContainer