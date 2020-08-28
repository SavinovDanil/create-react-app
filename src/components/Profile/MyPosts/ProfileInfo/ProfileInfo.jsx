import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src='https://saletur.ru/galery/tfoto/big/043/73/437321.jpg'></img>
			</div>
			<div className={s.user}>
				Savinov D.
        	</div>
		</div>
	);
}

export default ProfileInfo;