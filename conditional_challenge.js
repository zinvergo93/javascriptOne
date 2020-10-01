function stringChecker (string) {
    if (typeof string === 'string') {
        return true;
    } else {
        return false;
    }
}

console.log(stringChecker('I am a string'))
console.log(stringChecker())

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

function stringJoiner(strOne, strTwo) {
    space = ' '
    var newString = strOne.concat(space).concat(strTwo);
    return newString
}

console.log(stringJoiner('hello', 'there'))