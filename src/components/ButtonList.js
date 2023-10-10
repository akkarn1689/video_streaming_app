import React from 'react'
import Button from './Button'


// use list and mapping in place of doing all the buttons one by one 
// Use CSS to fit in the efficient number of button on skrin and scrolling others

const ButtonList = () => {
  return (
    // fix height of this div and buttons inside it
    <div className='flex p-4'>
      <Button name="All"/>
      <Button name="Ranveer Allahabadia" />
      <Button name="News"/>
      <Button name="Special forces"/>
      <Button name="Podcasts"/>
      <Button name="Mixes"/>
      <Button name="Music"/>
      <Button name="Computer programming"/>
    </div>
  )
}

export default ButtonList