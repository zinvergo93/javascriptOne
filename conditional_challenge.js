function stringChecker (string) {
    if (typeof string === 'string');
    return true
}

console.log(stringChecker('I am a string'))

// *******************

function capitalizeString() {
   var string = 'hello world';
   var newString = string.charAt(0).toUpperCase() + string.slice(1);
   return newString
   
}
console.log(capitalizeString())

// ************************

function numberCompare(x, y) {
    var bigNumber = Math.max(x, y);
    return bigNumber
}

console.log(numberCompare(12, 7))

// *******************

function stringJoiner() {
    var strOne = 'Hello';
    var strTwo = ' there!';
    var newString = strOne.concat(strTwo);
    return newString
}

console.log(stringJoiner())