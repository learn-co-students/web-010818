import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';

// console.log(App);
const AppWithRouter = withRouter(App);
// console.log(AppWithRouter)

ReactDOM.render(<Router><div><AppWithRouter /></div></Router>, document.getElementById('root'));
registerServiceWorker();
