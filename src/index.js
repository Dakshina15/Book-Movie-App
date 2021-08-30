import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Controller from './Controller';
//import Header from './common/header/Header.js';
//import Home from './screens/home/Home';


ReactDOM.render(<Controller/>, document.getElementById('root'));
registerServiceWorker();
