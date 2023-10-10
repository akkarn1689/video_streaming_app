import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isSidebarOpen = useSelector((store)=>store.app.isSidebarOpen);

  if(!isSidebarOpen) return null;
  
  return (
    <div className='p-4 w-48 shadow-sm'>
      <div className='font-semibold pb-3'>
        <ul>
          <li>Home</li>
          <li className='pt-1'>Shorts</li>
          <li className='pt-1'>Subscriptions</li>
        </ul>
      </div>
      <hr />
      <div className='py-3'>
        <ul>
          <li className=''>Library</li>
          <li className='pt-1'>History</li>
          <li className='pt-1'>Your Videos</li>
          <li className='pt-1'>Watch later</li>
          <li className='pt-1'>Liked Videos</li>
          <li className='pt-1'>Show more</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar