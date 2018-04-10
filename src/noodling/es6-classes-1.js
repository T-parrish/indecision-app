class Person {
    // specify argument defaults, otherwise 
    // creating a new instance of Person without passing
    // a name will create a person with name="undefined"
    constructor(name = 'Dirk Diggler', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hello, my name is ${this.name}`;
    }
    getDescription() {
        return `My name is ${this.name} and I am ${this.age}`
    }
}

// empty string !'' -> true from falsy
// empty string !!'' -> false from falsy
// !undefined -> true from undefined
// !!undefined -> false from undefined
class Student extends Person {
    constructor (name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        // // overwrites parent description
        // return 'testing';        
        
        // invokes parent getDescription function
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` My major is ${this.major}`;
        }
        return description;
    }
}

const me = new Person('Taylor Parrish', 28 ,'Philolosophy');
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other);

const who = new Student('Taylor Parrish', 28 ,'Philolosophy');
console.log(who)
console.log(who.getDescription());

const whoTwo = new Student();
console.log(whoTwo);
console.log(whoTwo.getDescription());


// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi, I am <person>. I'm visiting from <location> (if homeLocation)
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation; 
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasHomeLocation()) {
            description += ` I'm visiting from ${this.homeLocation}`;
        }
        return description;
    }
}

const whoThree = new Traveler('John Bonham', 43, 'Sussex');

console.log(whoThree);
console.log(whoThree.getDescription());