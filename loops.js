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

var student = {
    name: 'Zac',
    age: 27,
    city: 'Fox Lake',
    class: 'software development'
}

for (var key in student) {
    console.log(key + " => " + student[key])
}