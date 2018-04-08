// Notes on Arrow functions

// basic arrow function syntax
const square = (x) => {
    return x*x;
};

console.log(square(4))

// arrow function expression syntax
// implicitly returns the value from x*x
const squarrow = (x) => x*x;
console.log(squarrow(7));

// another example of arrow function syntax
const getFirstName = (fullname) => {
    return fullname.split(' ')[0];
}
console.log(getFirstName('taylor Parrish'))

// arrow function expression syntax
const expFirstName = (fullname) => console.log(fullname.split(' ')[0])
expFirstName('Jimmy Jammy')

// arguments object -> no longer bound with arrow functions
const add = function (a, b) {
    // perk of using standard function definitions
    // gives an object with all arguments passed to the function
    console.log(arguments)
    return a + b;
};
console.log(add(55,1))

// Arrow functions don't bind their own 'this' value, but are able to
// inherit a this value from their parent's this value
const user = {
    name: 'Balthazaar',
    cities: ['San Francisco', 'LA', 'Colorado Springs'],
    printPlacesLived() {
        // // workaround since anonymous functions don't
        // // automatically inherit their parent's this value
        // const that = this;
        // that.cities.forEach(function(city) {
        //     console.log(that.name + ' has lived in '+ city);
        // });

        // Easier way to do it with arrow functions since they
        // inherit the this value from their parents
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in '+ city);
        });
    }
}
user.printPlacesLived();


// Similar example but using map which allows us to mutate
// the values being returned rather than keeping them static
const userTwo = {
    name: 'Balthazaar',
    cities: ['San Francisco', 'LA', 'Colorado Springs'],
    printPlacesLivedTwo() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city + '!'
        });
        return cityMessages;
    }
};
console.log(userTwo.printPlacesLivedTwo());


const multiplier = {
    numbers: [8, 22, 53, 42, 3],
    multiple: 3,
    multiplyBy() {
        const mutatedArray = this.numbers.map((number) => {
            return this.multiple * number;
        })
        return mutatedArray;
    }
}
console.log(multiplier.multiplyBy());