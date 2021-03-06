import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/reset.css';
import "./utils/rem"
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
