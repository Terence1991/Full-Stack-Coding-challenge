import React from 'react'


const Chat = () => {
  return (
<div className="search-wrapper">
	<form>
	<input type="text" name="focus" className="search-box" placeholder="Share your Thoughts" />
		<button className="close-icon" type="reset"></button>
	</form>
</div>
  )
}

export default Chat;