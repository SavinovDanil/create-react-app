import React from 'react'
import s from './../Dialogs.module.css'

const Message = (props) => {
	console.log(props)
	return (
		<div className={s.message}>{props.message}</div>

	)
}


export default Message;