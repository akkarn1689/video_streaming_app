import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [liveChatOn, setLiveChatOn] = useState(false);
    const [searchParams] = useSearchParams(); // useParams gives parameters followed by /, here we need query params
    // console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeSidebar());
    }, []);
    return (

        <div className='flex flex-col w-full'>
            <div className='flex px-5 w-full'>
                <div>
                    <iframe
                        width="1020"
                        height="600"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className='w-full'>
                    {
                        (liveChatOn == false) ? <button
                            className="px-2 py-1 mx-2 bg-blue-800 text-white rounded-3xl"
                            onClick={()=> setLiveChatOn(true)}
                        >
                            Start Live Chat
                        </button> : <LiveChat />

                    }
                </div>
            </div>
            <CommentsContainer />
        </div>
    )
}

export default WatchPage

// BvKHkumgG2M?si=RuEVyZjy36wcrp7B