import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {

	console.log(props)

	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={props.state.posts} />
		</div>
	);
}

export default Profile;