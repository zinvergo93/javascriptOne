// Combining Arrays
// let shoppingCart = [345, 375, 765, 123];
// let newItems = [98, 123];

// shoppingCart.push(...newItems); // without the '...', it adds newItems array without removing the brackets, making a mixed array.
// console.log(shoppingCart); // [345, 375, 765, 123, 98, 123]

// Copying Arrays
const shoppingCart = [345, 375, 765, 123];
const updatedCart = [...shoppingCart];
updatedCart.push(5);
console.log(updatedCart); // adds 5 to the end of the array
console.log(shoppingCart); // is a constant value so it remains as [345, 375, 765, 123]

const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals));
// [1, 5, 1, 10, 2, 3]
// ...[1, 5, 1, 10, 2, 3]
// 1, 5, 1, 10, 2, 3

const { starter, closer, ...relievers } = {
  starter: 'Verlander',
  closer: 'Giles',
  relief_1: 'Morton',
  relief_2: 'Gregerson'
}

console.log(starter);
console.log(closer);
console.log(relievers);


// ******************************

function yourTest() {
    const highscore = [237.0198, 256.1, 234.846, 237.21, 256.654];
    
    return (Math.max(...highscore));
  }
  
  yourTest();