console.log('utils.js is running')

const isAdult = (age) => age > 18;

const canDrink = (age) => age > 21;

export default (age) => age > 64;

export {isAdult, canDrink}