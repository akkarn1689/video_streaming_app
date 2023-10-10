const GOOGLE_API_KEY = "AIzaSyBo472sOdxKawtF02sKgcVzhLqAa1Wodg0";

export const YOUTUBE_VIDEO_API = 
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+
        GOOGLE_API_KEY;


//------------------------IT IS NOT 'NO-CORS'
export const YOUTUBE_SEARCH_API =
        "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
        
        // +Query


//------------------------------------TRY THIS ONE
export const YOUTUBE_SEARCH_SUGGESTIONS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key="+
        GOOGLE_API_KEY + "&q=";



//---------------------TRY THIS FOR SEEARCH SUGGESTIONS
// export const SEARCH_SUGGESTIONS_API = "https://clients1.google.com/complete/search?client=youtube&hl=en&ds=yt&callback=google.sbox.p50&q="
// https://dev.to/adrienshen/hacking-together-your-own-youtube-suggest-api-c0o


// API for the search result page
export const YOUTUBE_SEARCH_QUERY_RESULTS = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key="+
        GOOGLE_API_KEY + "&q=";