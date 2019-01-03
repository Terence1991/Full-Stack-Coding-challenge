import React from 'react'
// import styled from 'styled-components'
import './index.css'
import Chat from './Chat.js'

const Input = () => {
  return (
    <div className='Input'>
    <div className="thought-bubble bubble">
    <span className='title'>
    <p className='chat'> The Chat box</p>
    </span>
    <Chat/>
    </div>

    </div>
  )
}

export default Input; 