import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-3 py-1 mt-2 mb-2 mr-2 bg-black text-white rounded-lg'>{name}</button>
    </div>
  )
}

export default Button