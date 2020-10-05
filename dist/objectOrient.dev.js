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
var Car =
/*#__PURE__*/
function () {
  function Car(_ref) {
    var year = _ref.year,
        brand = _ref.brand,
        _ref$poweredBy = _ref.poweredBy,
        poweredBy = _ref$poweredBy === void 0 ? 'gas' : _ref$poweredBy;

    _classCallCheck(this, Car);

    this.year = year;
    this.brand = brand;
    this.poweredBy = poweredBy;
  }

  _createClass(Car, [{
    key: "carSpecs",
    value: function carSpecs() {
      return "The ".concat(this.year, " ").concat(this.brand, " runs on ").concat(this.poweredBy);
    }
  }]);

  return Car;
}(); // Instantiate the class \/\/\/\/


var model3 = new Car({
  year: 2020,
  brand: 'Tesla',
  poweredBy: 'electricity'
});
console.log(model3.carSpecs());