// var generatedArray = new Array('Altuve', 'Correa', 'Bregman');
// console.log(generatedArray);// [undefined, undefined, undefined]

// var literalArray = [1, 2, 3];
// console.log(literalArray);

// var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }];
// console.log(mixedArray);


// *******************Adding and Removing******************

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

arr.length; // 4 (property, not a method like in other languages)

arr.pop(); // "Springer"

arr; // ['Altuve', 'Bregman', 'Correa']

arr.push('Bagwell'); // 4

arr; // ['Altuve', 'Bregman', 'Correa', 'Bagwell']

arr.shift(); // ['Bregman', 'Correa', 'Bagwell']

arr.unshift('Kyle'); // 4

arr; // ['Kyle', 'Bregman', 'Correa', 'Bagwell']

// ***********************Splice-Remove*********************************

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = arr.indexOf('Correa');

foundElement; // 2

arr.splice(foundElement, 1); // ["Correa"]

console.log(arr)

arr; // ["Altuve", "Bregman", "Springer"]

arr.splice(1, 2); // ["Bregman", "Springer"]

arr; // ["Altuve"]

console.log(arr)