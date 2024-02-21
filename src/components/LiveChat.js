import React from 'react'
import { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomString } from '../utils/helper'

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const t = setInterval(() => {
            // API polling
            // console.log("API polling");

            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomString(16) + " 😉",
            }));
        }, 2000);

        return () => clearInterval(t);
    }, [])

    return (
        <div className='h-[600px]'>
            <div className='mx-4 p-2 border border-black bg-slate-50 w-full h-[560px] overflow-y-scroll flex flex-col-reverse'>
                <div>
                    {chatMessages.map((item, index) => (
                        <ChatMessage
                            key={index}
                            name={item.name}
                            message={item.message}
                        />
                    ))}
                </div>
                {/* <ChatMessage
                // key={index}
                name="Ashish"
                message="jfds;fasdkfbl"
            /> */}
            </div>
            <form 
                className='w-full p-2 mx-4 border border-black'
                onSubmit={(e)=>{
                    e.preventDefault();
                    dispatch(addMessage({
                        name: 'Ashish',
                        message: liveMessage,
                    }));
                    setLiveMessage("");
                }}
            >
                <input 
                    className='px-2 w-72 border border-gray-500 rounded-md' 
                    type="text" 
                    placeholder="Write your comment..." 
                    value={liveMessage}
                    onChange={(e)=>{
                        setLiveMessage(e.target.value)
                    }}
                />
                <button className="px-2 py-1 mx-2 bg-blue-800 text-white rounded-3xl">Send</button>
            </form>
        </div>
    )
}

export default LiveChat