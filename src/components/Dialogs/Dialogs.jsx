import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog}>
					Danich
				</div>
				<div className={s.dialog}>
					Andrey
				</div>
				<div className={s.dialog}>
					Vadik
				</div>
				<div className={s.dialog}>
					Eleonora
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>Hi</div>
				<div className={s.message}>How is you job</div>
				<div className={s.message}>OO</div>
			</div>
		</div>
	)
}

export default Dialogs;