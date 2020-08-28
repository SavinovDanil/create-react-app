import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
  { id: 1, message: 'Hi, my name is Danil', like: 10 },
  { id: 2, message: 'Hi, my name is Vadim', like: 4 }
]

let dialogs = [
  { id: 1, name: "Danich" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Vadik" },
  { id: 4, name: "Eleonora" }
]


let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How is you job" },
  { id: 3, message: "OO" },
  { id: 4, message: "ee" },
]


ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts ={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
