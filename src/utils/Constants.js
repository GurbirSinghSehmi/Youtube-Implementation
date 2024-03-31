
export const BUTTON_LIST = ["All", "Live", "Gaming", "Songs", "Soccer", "Cricket", "Cooking","Love", "Romance", "Drama", "Comedy", "RomCom","Just","Putting","More", "Buttons", "For","Fun"];
const GOOGLE_API_KEY = "AIzaSyD7M76EczSF_cbBFaSXtnwRIaA2pSZKm9s"
export const YOUTUBE_VIDEOS_API = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY ;

export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=";

export const COMMENTS_DATA = [
    {
       name : "Gurbir Singh",
       text : "lorem ipsum dolor sit amet",
       replies : [], 
    },
    {
        name : "Gurbir Singh",
        text : "lorem ipsum dolor sit amet",
        replies : [{
            name : "Gurbir Singh",
            text : "lorem ipsum dolor sit amet",
            replies : [{
                name : "Gurbir Singh",
                text : "lorem ipsum dolor sit amet",
                replies : [], 
             }], 
         }], 
     },
     {
        name : "Gurbir Singh",
        text : "lorem ipsum dolor sit amet",
        replies : [{
            name : "Gurbir Singh",
            text : "lorem ipsum dolor sit amet",
            replies : [], 
         },
         {
            name : "Gurbir Singh",
            text : "lorem ipsum dolor sit amet",
            replies : [], 
         },{
            name : "Gurbir Singh",
            text : "lorem ipsum dolor sit amet",
            replies : [{
                name : "Gurbir Singh",
                text : "lorem ipsum dolor sit amet",
                replies : [], 
             },{
                name : "Gurbir Singh",
                text : "lorem ipsum dolor sit amet",
                replies : [], 
             }], 
         }], 
     },
     {
        name : "Gurbir Singh",
        text : "lorem ipsum dolor sit amet",
        replies : [], 
     },
     {
        name : "Gurbir Singh",
        text : "lorem ipsum dolor sit amet",
        replies : [{
            name : "Gurbir Singh",
            text : "lorem ipsum dolor sit amet",
            replies : [{
                name : "Gurbir Singh",
                text : "lorem ipsum dolor sit amet",
                replies : [{
                    name : "Gurbir Singh",
                    text : "lorem ipsum dolor sit amet",
                    replies : [], 
                 },
                 {
                    name : "Gurbir Singh",
                    text : "lorem ipsum dolor sit amet",
                    replies : [], 
                 }], 
             }], 
         }], 
     }
];