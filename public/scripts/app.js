'use strict';

console.log('app is running');

// JSX -> Javascript XML
// compile to vanilla JS with babel
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// can run with --watch flag to output changes in realtime
var template = React.createElement(
  'p',
  null,
  'This is JSX from app.js!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
