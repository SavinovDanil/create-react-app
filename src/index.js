import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/state'
import './index.css';

let callSubscriber = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}


callSubscriber(store.getState())

store.subscribe(callSubscriber)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
