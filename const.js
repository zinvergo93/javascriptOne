// const city = 'Fox Lake';
// console.log(city);


// **************String interpolation***********

// use back ticks ``````` inside interpolation

// function movieLine() {
//     const line = "It's a trap!";
//     return (`I'll tell you what I do know... ${line}`);
// }

// function socratesLine() {
//     const quote = 'I know that I know nothing';
    
//     return (`I may feel I know everything, however ${quote}`)
// }


// const page = 'Home'; // prints: class = 'master-layout
// // const page = 'About'; //prints: class ='secondary-layout
// console.log(`class=${ page === 'Home' ? 'master-layout' : 'secondary-layout' }`); // ternary operator

var ship = "hit";

function battleShip() {
  return(`${ ship === "hit" ? '1 point' : 'You lost a point'}`)
}