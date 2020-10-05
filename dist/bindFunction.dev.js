"use strict";

var userOne = {
  firstName: 'Zachary',
  lastName: 'Invergo'
};
var userTwo = {
  firstName: 'Yvonne',
  lastName: 'Invergo'
}; // do not use => functions

var fullName = function fullName() {
  return "".concat(this.lastName, ", ").concat(this.firstName);
};

var zachary = fullName.bind(userOne);
var yvonne = fullName.bind(userTwo);
console.log(zachary());
console.log(yvonne());