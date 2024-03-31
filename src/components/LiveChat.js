import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import ChatMessage from './ChatMessage'
import { addMessage } from '../utils/chatSlice';

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    useEffect(() => {
       const clear = setInterval(() => {
          dispatch(addMessage({name : "Gurbir", message : "Hanji Hanji Kardain"}));
       },2000);
       return () => {
        clearInterval(clear);
       }
    },[]);
  return (
    <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-auto flex flex-col-reverse'>
        {chatMessages.map((element, index) => <ChatMessage key = {index} name = {element.name} message = {element.message}/>)}
        </div>
  )
  }

export default LiveChat