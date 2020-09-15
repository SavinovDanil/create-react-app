import React from 'react'
import s from './../Dialogs.module.css'

const Message = (props) => {

	let addNewMessage = React.createRef()

	let addMessage = () => {
		let message = addNewMessage.current.value
		alert(message);
	}
	console.log(props)
	return (
	<div className={s.message}>{props.message}</div>
		<div className={s.message}>
		<textarea ref={addNewMessage} rows="1" cols="10"></textarea>
		<button onClick = {addMessage} className='buttonMessage' type="submit">addMessage</button>
		</div>

	)
	console.log(props)
}

export default Message;