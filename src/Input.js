import React from 'react'
// import styled from 'styled-components'
import './index.css'
import ResizableTextarea from "./Chat.js"

const Input = () => {
  return (
    <div className='Input'>
    <div className="thought-bubble bubble">
    <textarea className='text'>
    <ResizableTextarea/>
    </textarea>
    </div>

    </div>
  )
}

export default Input; 