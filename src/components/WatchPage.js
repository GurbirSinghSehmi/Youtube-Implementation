import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
   /// const params = useParams(); // this will only give params which are after /
    const [searchParams] = useSearchParams(); //this will get query params that are after ? in URL
    const dispatch = useDispatch();

    useEffect(
       () => {
          dispatch(closeMenu());
        },
        []
    )
  return (
    <div className = "flex flex-col w-full">   
     <div className='px-2 flex'>
        <div>
        <iframe 
    width="1000" 
    height="500" 
    src={"https://www.youtube.com/embed/" + searchParams.get("v") }
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen>

    </iframe>
    </div>
    <div className = "w-full"><LiveChat/></div>
    </div>
    <CommentsContainer/>
    </div>

  )
}

export default WatchPage