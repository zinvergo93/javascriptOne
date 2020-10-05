// var players = [
//     'Altuve',
//     'Bregman',
//     'Correa',
//     'Springer'
//   ];
// //   *****FOUR DIFFERENT FOR LOOPS******
//   for (let i in players) {
//     console.log(players[i]);
//   }
  
// //   debugger
//   for (var i = 0; i < players.length; i++) {
//     console.log(players[i]);
//   }

//   for (let player of players) {
//       console.log(player)
//   }

//     players.forEach(function(player) {
//     console.log(player);
// });

//     players.forEach(function(value,idx) {
//         console.log('value', value)
//         console.log('index: ', idx)
// })

// *********FOR LOOPS WITH OBJECTS*************
// var student = {
//     name: 'Zac',
//     age: 27,
//     city: 'Fox Lake',
//     class: 'software development'
// }

// for (var key in student) {
//     console.log(key + " => " + student[key])
// }

// let user = {
//     username: "spawnofsock57",
//     email: "zinvergo@gmail.com",
//     phone: "555-555-5555"
//   };
  
//   for (var key in user) {
//       console.log(key + " => " + user[key]);
//   }

//   ******AS FUNCTION*********

// function objectList(info) {
//     for (var key in info) {
//         console.log(key + ": " + info[key])
//     }
// }

// console.log(objectList(info = {
//     name: 'Zac',
//     age: 27,
//     location: 'Illinois',
//     dog: 'Diesel',
//     hobby: ['art', 'writing', 'video games']
// })) 


// ********WHILE DO/WHILE LOOPS ***********

// var players = [
//     'Altuve',
//     'Bregman',
//     'Correa',
//     'Springer'
// ];

// var i = 0;
// while (i < players.length){
//     console.log(players[i]);
//     i++;
// }

// var i = 0;
// do {
//     console.log(players[i]);
//     i++;
// }
// while (i < players.length)

// ******************************************
// let array = ['1', '2', '3', '4', '5', '6'];

// function arrayPop(array){
//     do { 
//         array.reverse()
//         var num = array.pop();
//         return num;
//     } while (array.length >= 1) ;
//         return (array - '[]')
// }    
// console.log(arrayPop(array))
// console.log(arrayPop(array))
// console.log(arrayPop(array))
// console.log(arrayPop(array))


// ********Loop array challenge w/numbers****

// let numbers = [1, 2, 3, 4]
// let sum = 0
// for (let i = 0; i< numbers.length; i++) {
//     sum += numbers[i]
// }


// for in
let numbers = [1, 2, 3, 4];

for (let number in numbers) {
        
        console.log(number)
}


// for of

// forEach

// while loop

// do-while