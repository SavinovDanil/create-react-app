import dialogsReducer from "./dialogsReducer"
import friendsReducer from "./friendReducer"
import profileReducer from "./profileReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, my name is Danil', like: 10},
                {id: 2, message: 'Hi, my name is Vadim', like: 4}
            ],
            newPostText: 'почти twitter'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Danich"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Vadik"},
                {id: 4, name: "Eleonora"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is you job"},
                {id: 3, message: "OO"},
                {id: 4, message: ""},
            ],
            newMessageBody: ''
        },
        friend: {
            friends: [
                {id: 1, name: "Danich"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Vadik"},
                {id: 4, name: "Eleonora"}
            ]
        }
    },
    _callSubscriber() {
        console.log('State was changed')
    },

    getState() { //Получаем state
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.friend = friendsReducer(this._state.friend, action)

        this._callSubscriber(this._state)
    }
}

export default store

window.store = store
