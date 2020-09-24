const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 5, message: body}]
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({    //ActionCreator - функция которая возвращает action
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default dialogsReducer