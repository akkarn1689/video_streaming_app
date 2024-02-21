import React from 'react'
import ButtonList from './ButtonList'
import VideosContainer from './VideosContainer'
import {useSelector, useDispatch} from 'react-redux'


const MainContainer = () => {
  const openSidebar = useSelector((store)=> store.app.openSidebar);
  const dispatch = useDispatch();
  
  // dispatch(openSidebar());

  return (
    <div className=''>
        {/* <ButtonList/> */}
        <VideosContainer/>
    </div>
  )
}

export default MainContainer