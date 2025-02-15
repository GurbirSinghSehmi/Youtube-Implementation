import React from 'react'

const Comment = ({data}) => {
    const {name,text,replies} = data;
  return (
    <div className='flex pt-2'>
        <img className = "w-10 h-10" alt = "user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
        <div className="px-3">
            <p className = "font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment