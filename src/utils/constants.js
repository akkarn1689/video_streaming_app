const GOOGLE_API_KEY = "AIzaSyDjDSTxx_jSBpxgfhEdF8T_CXxiIiC30UE";

export const YOUTUBE_VIDEO_API = 
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+
        GOOGLE_API_KEY;


//------------------------IT IS NOT 'NO-CORS'
export const YOUTUBE_SEARCH_API =
        "http://suggestqueries.google.com/complete/search?client=firefox&hl=en&ds=yt&q=";
        
        // +Query


//------------------------------------TRY THIS ONE
export const YOUTUBE_SEARCH_SUGGESTIONS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key="+
        GOOGLE_API_KEY + "&q=";




// API for the search result page
export const YOUTUBE_SEARCH_QUERY_RESULTS = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key="+
        GOOGLE_API_KEY + "&q=";


export const LIVE_CHAT_COUNT = 30;
