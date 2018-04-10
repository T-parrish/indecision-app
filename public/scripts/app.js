'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    // specify argument defaults, otherwise 
    // creating a new instance of Person without passing
    // a name will create a person with name="undefined"
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Dirk Diggler';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            return 'Hello, my name is ' + this.name;
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return 'My name is ' + this.name + ' and I am ' + this.age;
        }
    }]);

    return Person;
}();

// empty string !'' -> true from falsy
// empty string !!'' -> false from falsy
// !undefined -> true from undefined
// !!undefined -> false from undefined


var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: 'hasMajor',
        value: function hasMajor() {
            return !!this.major;
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            // // overwrites parent description
            // return 'testing';        

            // invokes parent getDescription function
            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);

            if (this.hasMajor()) {
                description += ' My major is ' + this.major;
            }
            return description;
        }
    }]);

    return Student;
}(Person);

var me = new Person('Taylor Parrish', 28, 'Philolosophy');
console.log(me.getGreeting());
console.log(me.getDescription());

var other = new Person();
console.log(other);

var who = new Student('Taylor Parrish', 28, 'Philolosophy');
console.log(who);
console.log(who.getDescription());

var whoTwo = new Student();
console.log(whoTwo);
console.log(whoTwo.getDescription());

// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi, I am <person>. I'm visiting from <location> (if homeLocation)

var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, homeLocation) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

        _this2.homeLocation = homeLocation;
        return _this2;
    }

    _createClass(Traveler, [{
        key: 'hasHomeLocation',
        value: function hasHomeLocation() {
            return !!this.homeLocation;
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            var description = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getDescription', this).call(this);

            if (this.hasHomeLocation()) {
                description += ' I\'m visiting from ' + this.homeLocation;
            }
            return description;
        }
    }]);

    return Traveler;
}(Person);

var whoThree = new Traveler('John Bonham', 43, 'Sussex');

console.log(whoThree);
console.log(whoThree.getDescription());
