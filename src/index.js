import React from 'react'
import ReactDOM from 'react-dom'
import ThoughtBubble from "./ThoughtBubble.js"
import Title from "./Title.js"
import Input from "./Input.js"

const App = () => {
  return (
  <div className='ui container comments'>
      <ThoughtBubble /> 
      <Title/>
      <Input/>
    </div>
   ); 

}


ReactDOM.render(<App/>, document.querySelector('#root')) 
