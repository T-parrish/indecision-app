import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp.js';

console.log('app.js is running');


const Layout = (props) => {
    return (
        <div>
            <p> header </p>
            {props.children}
            <p> footer </p>
        </div>
    );
}
// // one way to pass JSX
// const template = (
    // <div>
    //     <h1> Page title </h1>
    //     <p> This is my page </p>
    // </div>
// )

// use {props.content} to access data passed this way
// ReactDOM.render(<Layout content={template}/>, document.getElementById('app'));

// another way to pass data into Layout
// Use {props.children} to access data passed this way
ReactDOM.render((
    <Layout>
        <div>
            <h1> Page title </h1>
            <p> This is my page </p>
        </div>
    </Layout>), document.getElementById('app'));
