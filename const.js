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

// var ship = "hit";

// function battleShip() {
//   return(`${ ship === "hit" ? '1 point' : 'You lost a point'}`)
// }

// ********************check to see if two values are equal*************************

const isEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2); // Object.keys grabs the array of keys in an object

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let objKey of obj1Keys) {
    if (obj1[objKey] !== obj2[objKey]) {
      return false;
    }
  }

  return true;
};

const obj1 = {
  name: "Kristine",
  age: 13,
  favorites: {
    food: "Pizza",
    vacation: "Disneyland"
  }
};

const obj2 = {
  name: "Kristine",
  age: 13,
  favorites: {
    food: "Pizza",
    vacation: "Disneyland"
  }
};

obj1 == obj2;
console.log(isEqual(obj1, obj2));