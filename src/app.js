import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import IndecisionApp from './components/IndecisionApp.js';


console.log('app.js is running');

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
