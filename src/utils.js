console.log('utils.js is running')

const square = (x) => x*x
const add = (a, b) => a + b

const isAdult = (age) => age > 18

const canDrink = (age) => age > 21

//exports - default export - named export

// not an object definition
export {square, add, isAdult, canDrink};


