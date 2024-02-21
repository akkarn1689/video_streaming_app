import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import MainShimmer from './MainShimmer';
import {useSelector, useDispatch} from 'react-redux';
import { openSidebar } from "../utils/appSlice";

const VideosContainer = () => {
  // const openSidebar = useSelector((store)=> store.app.openSidebar);
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);

  useEffect(() => {

    getVideos();
    dispatch(openSidebar());
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data?.json();

    console.log(json);

    setVideos(json?.items);
  }



  return (videos?.length === 0) ? <MainShimmer/> : (
    <div className='flex flex-wrap'>
      {
        videos?.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      }
      {/* <VideoCard info={videos[0]} /> */}
    </div>
  )
}

export default VideosContainer