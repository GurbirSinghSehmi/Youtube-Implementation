import React , {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/Constants';
import { useSelector } from 'react-redux';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions,setSuggestions] = useState([]);
    const [showSuggestions,setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
       dispatch(toggleMenu());
    }
    useEffect(() => {
        // make an API call after every key press
        //but if the difference between two API calls is <200ms
        //decline the API call
       const timer =  setTimeout(() => {
        if(searchCache[searchQuery])
        {
            setSuggestions(searchCache[searchQuery]);
        }
        else{
        getSearchSuggestions()
    }},200);

       return () => {
        clearTimeout(timer);
       }
    
       //THIS ABOVE OCDE IS IMPLEMENTING DEBOUNCING IN REACT (Learn how to implement it in js)
        },[searchQuery]);
    const getSearchSuggestions = async() => {
        const response = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const data = await response.json();
        dispatch(cacheResults({[searchQuery] : data[1]}));
        setSuggestions(data[1]);
    }
  return (
    <div className = "grid grid-flow-col p-5 m-2 shadow-lg">
    <div className='flex col-span-1'>
        <img  onClick = {toggleMenuHandler} className = "h-8 cursor-pointer" src = "https://cdn-icons-png.flaticon.com/512/3388/3388823.png" alt = "Hamburger Icon"/>
        <a href = "/"><img className = "h-8 mx-2" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt = "Youtube Icon"/></a>
        </div>
    <div className='col-span-10 px-10'>
        <div className='flex'>
        <input value = {searchQuery} className = "w-1/2 border border-gray-400 p-2 pr-0 rounded-l-full" type = "text" onChange = {(e) => setSearchQuery(e.target.value)} onFocus = {() => setShowSuggestions(true)} onBlur = {() => setShowSuggestions(false)}/>
        
        <button className = "border border-gray-400 p-2 rounded-r-full" ><img className = "h-6" alt = "Search Icon" src = "https://thumbs.dreamstime.com/b/outline-search-icon-vector-illustration-isolated-transparent-background-sign-symbol-black-white-style-207070400.jpg"/></button>
        </div>
        <div className = "absolute p-2 bg-white w-1/3">
    <ul >
           {showSuggestions && (suggestions.map((element,index) =>  <li key = {index} className = "py-2 shadow-sm hover:bg-gray-100">{element}</li>))} 
        </ul>
        </div>
    
    </div>

    <div className = "col-span-1">
        <img className = "h-8" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt = "User"/>
    </div>
    </div>
  )
}

export default Head