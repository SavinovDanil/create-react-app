import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message.jsx'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/state';


const Dialogs = (props) => {


	let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
	let messagesElement = props.state.messages.map(m => <Message message={m.message} />)
	let newMessageBody = props.state.newMessageBody;

	let addNewMessage = React.createRef()

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator())
	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.store.dispatch(updateNewMessageBodyCreator(body))
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElement}
			</div>
			<div className={s.messages}>
				<div>{messagesElement}</div>
				<div>
					<div>
						<textarea value={newMessageBody}
							onChange={onNewMessageChange}
							placeholder='Enter your message'
							ref={addNewMessage} ></textarea></div>
					<div><button onClick={onSendMessageClick} className='buttonMessage' type="submit">Send</button></div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;