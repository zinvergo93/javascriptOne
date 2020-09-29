/* You
can
type
everywhere
But also, don't */


// *******************************************************************
// console.log('Hello, and welcome to Javascript')

// var hello_world = "Hi there";
// console.log(hello_world);

// 'var' is variable
// *******************************************************************
// var firstName = 'Zachary';
// var middleName = 'Tyler';
// var lastName = 'Invergo';


// console.log(firstName, middleName, lastName);
// *******************************************************************
// var cat = 'Come, Mr. Bigglesworth!'
// var dog = 'The majesty of a wolf with the grace of a doofus'

// var cat, dog;
// cat = 'Come, Mr. Bigglesworth!';
// dog = 'The majesty of a wold with the grace of a doofus';

// console.log(cat)
// console.log(dog)
// *******************************************************************
// let age = 12;
// console.log(age);

// let age = 15;
// console.log(age)
// WILL BREAK. CANNOT CHANGE VARIABLE WITH 'LET' property \\
// var age = 27;
// let name = 'Zac';

// 
// *******************************************************************

// let age = 23;
// console.log(age);

// age = 45;
// console.log(age);

// Can't redefine 'let' value as another declaration, once it's declared. You can assign and reassign but
// Not as a new var or let value

// ************************************************
// HOISTING \\

// name = 'Zachary';
// // console.log(name);
// var name; 

// Will print Zachary. Declarations are "hoisted" to the top \\
// ***********************************************************

// // Boolean
// var truthy = true;
// var notTruthy = false;

// // Null
// var nully = null;

// // Undefined
// var notDefined;

// // Number
// var age = 12;

// // String
// var name = "Kristine";
// var nameTwo = 'Jordan';

// // Symbol
// var mySym = Symbol('foo');

// // console.log(mySym);


// **************Objects in Javascript***************

// var user = {
//     name: 'Kristine',
//     age: 12,
//     city: 'Scottsdale',
//     grades: {
//       math: 90,
//       science: 80,
//       languageArts: 100
//     }
//   }
//   user.age = 13;
//   user.grades.coding = 95;

// Adds a new object to "grades"
// console.log(user.grades)


// *********************Check TypeOf***************************

// typeof 12;
// // "number"

// typeof 'Astros';
// // "string"

// typeof true;
// // "boolean"

// typeof { name: "Kristine" };
// // "object"

// var age;
// // undefined

// typeof age;
// // "undefined"

// age = null;
// // null

// typeof age;
// // "object"

// var variable = 20;

// console.log(variable)
// console.log(typeof variable);

// *************************Math************************* \\

// console.log('100' - 42); // Prints 58

// console.log('100' + 42); // will print '10042' string, because it thinks you are trying to append to a string

// var ageOne = 12;

// // console.log(String(ageOne))
// // console.log(ageOne.toString())

// var ageTwo = '33';

// console.log(Number(ageTwo)); // 33
// console.log(parseInt(ageTwo)); // 33
// console.log(parseInt(ageOne)); // 12
// console.log(parseFloat(ageOne)); // 12
// console.log(parseFloat('33.5')); // 33.5
// console.log(parseInt('33.5')); // 33
// console.log(parseInt('5555555555 is my phone number')); // 5555555555
// console.log(parseInt('foo 5555555555 is my phone number')); // NaN
// console.log(+ ageTwo); // 33 --- Unary operator

// var foo = + ageTwo;
// console.log(foo) // 33

// console.log(Number(true)); // 1
// console.log(Number(false)); // 0