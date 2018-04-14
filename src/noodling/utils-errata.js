console.log('utils.js is running')

const square = (x) => x*x;

export const add = (a, b) => a + b;

// // one way to export default
// const subtract = (a, b) => a - b;
// export default subtract

// another way to export default
export default (a, b) => a - b;

//exports - default export - named export

// not an object definition
// can only have one default export
export {square};


