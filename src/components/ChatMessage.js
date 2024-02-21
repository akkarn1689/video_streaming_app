import React from 'react'

const ChatMessage = ({name, message}) => {
    return (
        <div className='flex items-center shadow-sm p-2'>
            <img
                className="h-8"
                alt="user"
                src="https://icon-library.com/images/google-user-icon/google-user-icon-16.jpg"
            />
            <span className='font-semibold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage