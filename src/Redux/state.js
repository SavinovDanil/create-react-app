const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'



let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, my name is Danil', like: 10 },
				{ id: 2, message: 'Hi, my name is Vadim', like: 4 }
			],
			newPostText: 'почти twitter'
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
			],
			newMessageBody: ''
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
	_callSubscriber() {
		console.log('State changed')
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 3,
				message: this._state.profilePage.newPostText,
				like: 0
			}
			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = "";
			this._callSubscriber(this._state)

		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state)

		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscriber(this._state)

		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messages.push({ id: 5, message: body })
			this._callSubscriber(this._state)
		}
	}
}

export const addPostActionCreator = () => ({
	type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT, newText: text
})

export const sendMessageCreator = () => ({
	type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) => ({
	type: UPDATE_NEW_MESSAGE_BODY, body: body
})


export default store
window.store = store
