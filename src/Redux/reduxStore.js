import {combineReducers, createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import friendReducer from './friendReducer'
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friend: friendReducer,
    usersPage: usersReducer
})


let store = createStore(reducers);

export default store