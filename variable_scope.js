// var userObj = {
//     email: 'sample@example.com',
//     fullName: 'Kristine Hudgens'
//   }
  
//   function dashboardGreeting() {
//     var userObj = {
//       email: 'sample2@example.com',
//       fullName: 'Jordan Hudgens'
//     }
//     console.log("Hi there, ".concat(userObj.fullName));
//   }
  
//   dashboardGreeting();
//   console.log(userObj.fullName);

//   **************************************

// var greeting = function () {
//     return "Hi there!";
//    };
   
//    var age = 4;
   
//    if (age <= 10) {
//      var buildMenu = function () {
//        return "Kids' Menu";
//      };
   
//      function wrongMenuBuilder () {
//        return "Wrong Kids' Menu";
//      }
   
//      console.log(buildMenu());
//      console.log(wrongMenuBuilder());
//    }

//    ********Function arguments*********

function fullName(firstName, lastName, language) {
    var language = language || 'English';
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Jordan', 'Hudgens', 'Spanish'));

// ********************************************

var someUser = {
    name: 'Jordan'
}

function nameFormatter (user) {
    return user.name = 'Oops';
}

nameFormatter(someUser); // "Oops"

someUser; // Object {name: "Oops"}

var someName = 'Tiffany';

function someOtherNameFormatter(name) {
    return name = 'Oops';
}

someOtherNameFormatter(someName); // "Oops"

someName; // "Tiffany"

function nameFormatter (userName) {
    return userName = 'Oops';
}

someUser.name; // "Oops"

someUser.name = 'Kristine';

nameFormatter(someUser.name); // "Oops"

someUser.name; // "Kristine"