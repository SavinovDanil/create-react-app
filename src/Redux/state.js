let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, my name is Danil', like: 10 },
				{ id: 2, message: 'Hi, my name is Vadim', like: 4 }
			],
			newPostText: 'Савинов Данил'
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
		friend: {
			friends: [
				{ id: 1, name: "Danich" },
				{ id: 2, name: "Andrey" },
				{ id: 3, name: "Vadik" },
				{ id: 4, name: "Eleonora" }
			]
		}
	},
	getState() {
		debugger
		return this._state
	},
	callSubscriber() {
		console.log('State changed')
	},
	addPost() {
		debugger
		let newPost = {
			id: 3,
			message: this._state.profilePage.newPostText,
			like: 0
		}

		this._state.profilePage.posts.push(newPost)
		this._state.profilePage.newPostText = "";
		this._callSubscriber(this._state)
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state)
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	}
}



export default store
window.store = store
