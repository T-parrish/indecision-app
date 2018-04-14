// import './utils.js'
// how to import stuff from other files
// default is imported before named imports
// naming is not important -> can name however you want
import downDoot, {square, add} from './utils.js';
import isOld, {canDrink, isAdult} from './person.js';
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('app.js is running');

console.log(square(3));
console.log(add(3, 4));
console.log(isAdult(12));
console.log(canDrink(22));
console.log(downDoot(2,7));
console.log(isOld(72));
console.log(validator.isEmail('slimjim@loop.zoop'));

const template = <p> this is jsx from webpack </p>
ReactDOM.render(template, document.getElementById('app'))

