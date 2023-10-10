import React from 'react'

const VideoCard = ({ info }) => {
    // console.log(info);

    const {snippet, statistics} = info;
    const { channelTitle, title, thumbnails} = snippet;
    const {viewCount} = statistics;

    let views;
    let viewLabel;
    if(viewCount<1000){
        views=viewCount;
        viewLabel='';
    }
    else if(viewCount<1000000){
        views=parseFloat((viewCount/1000).toPrecision(2 ));
        viewLabel='K';
    }
    else{
        views=parseFloat((viewCount/1000000).toPrecision(2 ));
        viewLabel='M';
    }

    return (
        <div className='w-64 p-2 m-2 rounded-md'>
            <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url} />
            <div className='w-4/5 truncate'><h1 className='font-bold py-2'>{title}</h1></div>
            <h1>{channelTitle}</h1>
            <h1>{views}{viewLabel} views</h1>
            
        </div>
    )
}

export default VideoCard