import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsElement = props.posts.map(p => <Post message={p.message} like={p.like} />)

	let newPostElement = React.createRef();

	let addPost = () => {
		debugger;
		let text = newPostElement.current.value;
		props.addPost(text)
	}

	return (
		<div>
			<div>
				<div>
					<div>
						<textarea ref={newPostElement} ></textarea>
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