import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		<div>
			<div>
				<img src='https://saletur.ru/galery/tfoto/big/043/73/437321.jpg'></img>
			</div>
			<div className = {s.user}>
				Savinov D.
        	</div>
			<MyPosts />
		</div>
	);
}

export default Profile;