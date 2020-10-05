// // Same function written as function declaration
// function fullName (fName, lName) { 
//     console.log(`${lName}, ${fName}`);
//   }
//   fullName('Tiffany', 'Hudgens');
  
//   // Same function written as function expression
//   fullName = (fName, lName) => { 
//     console.log(`${lName}, ${fName}`);
//   }
//   fullName('Kristine', 'Hudgens');
  
//   // Basic arrow function
//   helloWorld = () => { console.log("Hi there"); }
//   helloWorld();
  
//   // Arrow function with shorthand function argument for single arguments
//   firstName = fname => { console.log(fname.toUpperCase()); }
//   firstName('Jordan');
  
//   // Arrow function with multiple arguments
//   fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
//   fullName('Kristine', 'Hudgens');

//   // Arrow function with 'this'.
//   function Invoice(subTotal) {
//     this.taxRate = 0.06;
//     this.subTotal = subTotal;

//     this.total = setInterval(() => {
//       console.log((this.taxRate * this.subTotal) + this.subTotal);
//     }, 2000);
//   }

//   const inv = new Invoice(200);
//   console.log(inv);

  // ****************************************

//   function SavingCalc(paycheck) {
//     this.percent = 0.30;
//     this.paycheck = paycheck;
  
//     this.deposit = function() {
//       return (this.percent * this.paycheck)
//     }
//   }
  
//   const piggyBank = new SavingCalc(2000);

//   // *************Variable deconstruction************

// let playerOne = 'Tiffany';
// let playerTwo = 'Kristine';

// let tempPlayerOne = playerOne;
// let tempPlayerTwo = playerTwo;

// playerOne = tempPlayerTwo;
// playerTwo = tempPlayerOne;

// // [playerOne, playerTwo] = [playerTwo, playerOne];

// console.log(`
// Player One: ${playerOne}
// Player Two: ${playerTwo}
// `);

// // *****************************************

// function roadRage() {
//   let rightLane = "Chevy";
//   let leftLane = "Honda";
  
//   let tempRightLane = rightLane;
//   let tempLeftLane = leftLane;
  
//   rightLane = tempLeftLane;
//   leftLane = tempRightLane;
  
//   return (`That ${rightLane} and ${leftLane} won't pick a lane`)
// }

// console.log(roadRage());


// // *****Array Deconstruction************

// const apiList = [
//   'https://api.dailysmarty.com/posts',
//   'https://api.github.com/users/jordanhudgens/repos',
//   'https://api.github.com/users/jordanhudgens'
// ]

// const [posts, repos, profile] = apiList;

// console.log(posts);
// console.log(repos);
// console.log(profile);

// // **********************************

// const girlStuff = ['Iced Coffee', 'Roses', 'Kiwi'] 

// const [beverage, plant, fruit] = girlStuff;


// // *******Deconstruction with objects functions*********

// const user = {
//   name: 'Kristine',
//   email: 'kristine@devcamp.com'
// }

// const renderUser = ({ name, email }) => {
//   console.log(`${name}: ${email}`);
// }

// console.log(renderUser(user));

// // *****************************************************

// const bank = {
//   accountNum: 454812259,
//   name: 'John Doe',
//   balance: 1257
// }

// const bankInfo = ({ accountNum, name, balance }) => {
//   return (`Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`)
// }

// console.log(bankInfo(bank));

// ******************Default Arguments********************

const blog = {
  title: 'My great post',
  summary: 'Summary of my post'
}

const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
  console.log(`
    og-title=${title}
    og-description=${summary}
  `);
}

console.log(openGraphMetadata(blog));