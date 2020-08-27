import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
			<div>
          		<div>
					<textarea ></textarea>
					<button>Add post</button>
					<Post message = "Hi, my name is Danil" like = "10"/>
					<Post message = "Hi, my name is Vadim" like = "4"/>
				</div>
			</div>
		</div>
	);
}

export default MyPosts;