import React from 'react'
import Comment from './Comment';

const CommentsList = ({data}) => {
  return (
    <div>
    {data.map((element,index) => (
    <div  key = {index} >
    <Comment data = {element}/>
    {element.replies.length != 0 && (<div className = "pl-3 border-l-2 border-black ml-5">
    <CommentsList data = {element.replies}/>
    </div>)}
    </div>
    ))}
    </div>
  )
}

export default CommentsList;