"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// class Instructor {
//     constructor({ name }) {
//       this.name = name;
//     }
//   }
//   class Instructor {
//     constructor(name) {
//       this.name = name;
//     }
//   }
//   const jon = new Instructor('Jon Snow');
//   console.log(jon.name);
// //   **************************************
// class Account {
//     constructor ({ username, password}) {
//         this.username = username;
//         this.password = password
//     }
// }
// const user = new Account({ username: 'zachary', password: '12345'});
// console.log(user.username);
// console.log(user.password);
// // ************Instance methods/behaviors in class********************
// INSTANCE: what an instance method is it's a function inside of a class. And whenever
// you create a new instance of that class you can then call those instance methods on it.
// **********************************************************************
// class Instructor {
//     constructor({ name, role = 'assistant' }) {
//       this.name = name;
//       this.role = role;
//     }
//     renderDetails() {
//       console.log(`${this.name}: ${this.role}`);
//     }
//   }
//  Instantiate the class \/\/\/\/
//   const jon = new Instructor({name: 'Jon Snow'});
//   const brayden = new Instructor({name: 'Brayden', role: 'teacher'});
//   console.log(jon.renderDetails());
//   console.log(brayden.renderDetails());
// **********************************************************
// class Car {
// 	constructor({ year, brand, poweredBy = 'gas' }) {
// 		this.year = year;
// 		this.brand = brand;
// 		this.poweredBy = poweredBy;
// 	}
// 	carSpecs() {
// 		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`)
// 	}
// }
// // Instantiate the class \/\/\/\/
// const model3 = new Car({year: 2020, brand: 'Tesla', poweredBy: 'electricity'});
// const highlanderT = new Car({year: 2014, brand: 'Toyota'})
// console.log(model3.carSpecs());
// console.log(highlanderT.carSpecs());
// ******************Static methods***********************
// class Instructor {
//     constructor({ name, role = "assistant" }) {
//       this.role = role;
//       this.name = name;
//     }
//     // Instance method
//     renderDetails() {
//       console.log(`${this.name} - ${this.role}`);
//     }
//     // Base case static method
//     static helloWorld() {
//       console.log('Hi there');
//     }
//     // Static method
//     static canTeach(instructor) {
//       return (instructor.role === 'classroom');
//     }
//   }
//   let juniorInstructor = new Instructor({ 'name' : 'Brian' });
//   let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });
//   juniorInstructor.renderDetails(); // "Brian - assistant"
//   seniorInstructor.renderDetails(); // "Alice - classroom"
//   Instructor.helloWorld(); // "Hi there"
//   // "Brian can teach: false"
//   console.log(
//     `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
//   );
//   // "Alice can teach: true"
//   console.log(
//     `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
//   );
//   *****************************************************
var Home =
/*#__PURE__*/
function () {
  function Home(_ref) {
    var type = _ref.type,
        _ref$payment = _ref.payment,
        payment = _ref$payment === void 0 ? "renting" : _ref$payment;

    _classCallCheck(this, Home);

    this.type = type;
    this.payment = payment;
  }

  _createClass(Home, null, [{
    key: "homeImprovement",
    value: function homeImprovement(yourHome) {
      return yourHome.payment === 'mortgage';
    }
  }]);

  return Home;
}();

var choice1 = new Home({
  type: 'house',
  payment: 'mortgage'
});
var choice2 = new Home({
  type: 'apartment'
});
console.log(Home.homeImprovement(choice1)); // true

console.log(Home.homeImprovement(choice2)); // false

console.log("The first choice is a ".concat(choice1.type, ", which can be paid for with mortgage: ").concat(Home.homeImprovement(choice1)));
console.log("The second choice is a ".concat(choice2.type, ", which can be paid for with mortgage: ").concat(Home.homeImprovement(choice2))); // ^^^^^^^^^^^^^^^^^^^^RETURNS BOOLEAN VALUES OF TRUE OR FALSE BASED ON STATIC METHOD ^^^^^^^^^^^^^^^^^^^^^^^^^^^