import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
			<div>
				my posts
          		<div>
					<textarea ></textarea>
					<button>Add post</button>
					<Post />
					<Post />
				</div>
			</div>
		</div>
	);
}

export default MyPosts;