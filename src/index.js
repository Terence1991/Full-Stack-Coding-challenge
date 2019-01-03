import React from 'react'
import ReactDOM from 'react-dom'
import ThoughtBubble from "./ThoughtBubble.js"
import Title from "./Title.js"
import Input from "./Input.js"
import "./index.css"


const App = () => {
  return (
  <div className='bubble'>
        <Title/>
        <Input/>
        <ThoughtBubble /> 
    </div>
   ); 

}


ReactDOM.render(<App/>, document.querySelector('#root')) 
