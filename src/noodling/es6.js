// can reassign variable using var
// which can lead to difficult debugging 
// issues down the line
var nameVar = 'Taylor';
nameVar = 'Mike';
console.log('nameVar', nameVar);

// can't redefine variable with let
// will throw errors and make some things easier to debug
// can still reassign values to the variable
let nameLet = 'Jimmy';
nameLet = 'Jammy';
console.log('nameLet', nameLet)

// can't redefine variable with constants
// cannot reassign values either
const nameConst = 'Frank'
console.log('nameConst', nameConst)

// Block scoping

var fullName = 'Taylor Parrish'

if (fullName) {
    // let and const are specific to their block
    // will not bleed outside of their block-level scope
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName)