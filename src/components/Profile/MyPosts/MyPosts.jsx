import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/state';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
	let postsElement = props.posts.map(p => <Post message={p.message} like={p.like} />)
	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator())
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch(updateNewPostTextActionCreator(text));
	}

	return (
		<div>
			<div>
				<div>
					<div>
						<textarea ref={newPostElement}  onChange = {onPostChange} value = {props.newPostText}/>
					</div>
					<div>
						<button onClick={addPost} className="postsButton" name = "post">Add post</button>
					</div>
					{postsElement}
				</div>
			</div>
		</div>
	);
}

export default MyPosts;