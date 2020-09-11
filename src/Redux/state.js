
import {renderEntireTree} from '../render'

let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, my name is Danil', like: 10 },
			{ id: 2, message: 'Hi, my name is Vadim', like: 4 }
		],
	},
	dialogsPage: {
		dialogs: [
			{ id: 1, name: "Danich" },
			{ id: 2, name: "Andrey" },
			{ id: 3, name: "Vadik" },
			{ id: 4, name: "Eleonora" }
		],
		messages: [
			{ id: 1, message: "Hi" },
			{ id: 2, message: "How is you job" },
			{ id: 3, message: "OO" },
			{ id: 4, message: "ee" },
		]
	},
	friend:{
		friends: [
			{ id: 1, name: "Danich" },
			{ id: 2, name: "Andrey" },
			{ id: 3, name: "Vadik" },
			{ id: 4, name: "Eleonora" }
		]
	}
}

export let addPost = (postMessage) => {
	debugger;
	let newPost = {
		id: 3,
		message: postMessage,
		like: 0
	}

	state.profilePage.posts.push(newPost)
	renderEntireTree(state)
}

export default state
