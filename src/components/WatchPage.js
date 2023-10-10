import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const [searchParams] = useSearchParams(); // useParams gives parameters followed by /, here we need query params
    // console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeSidebar());
    }, []);
    return (
        <div className='mx-[5%] w-5/6 flex justify-center items-center'>
            <div className='w-3/5'>
                <div>
                    <iframe
                        width="720"
                        height="480"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>

                </div>
                <CommentsContainer />
            </div>
            {/* <div className='w-2/5'>
                Popular suggestions
            </div> */}
        </div>
    )
}

export default WatchPage

// BvKHkumgG2M?si=RuEVyZjy36wcrp7B