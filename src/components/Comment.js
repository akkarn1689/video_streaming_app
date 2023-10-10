import React from 'react'

const Comment = ({data}) => {
    const {name, text, replies} =data;
    return (
        <div className='flex shadow-sm bg-gray-50 rounded-md p-2 my-2'>
            <img
                className="w-12 h-12"
                alt="user"
                src="https://icon-library.com/images/google-user-icon/google-user-icon-16.jpg"
            />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div> 
        </div>
    )
}

export default Comment


