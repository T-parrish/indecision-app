'use strict';

console.log('app is running');

// JSX -> Javascript XML
// compile to vanilla JS with babel
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// can run with --watch flag to output changes in realtime

var datas = {
    title: 'Indecision App',
    subtitle: 'put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        datas.title
    ),
    datas.subtitle && React.createElement(
        'p',
        null,
        datas.subtitle
    ),
    React.createElement(
        'p',
        null,
        datas.options.length > 0 ? 'Here are your options' : 'No options available'
    )
);

var User = {
    name: 'James May',
    age: '28',
    location: 'japan'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
};

// class -> classname in JSX
var count = 0;
var addOne = function addOne() {
    count += 1;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count -= 1;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');
var testRoot = document.getElementById('testApp');

// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, testRoot);

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
