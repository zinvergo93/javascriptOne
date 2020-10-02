// function stringChecker (string) {
//     if (typeof string === 'string') {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(stringChecker('I am a string'))
// console.log(stringChecker())

// *******************

// function capitalizeString() {
//    var string = 'hello world';
//    var newString = string.charAt(0).toUpperCase() + string.slice(1);
//    return newString
   
// }
// console.log(capitalizeString())

// ************************

// function numberCompare(x, y) {
//     var bigNumber = Math.max(x, y);
//     return bigNumber
// }

// console.log(numberCompare(12, 7))

// *******************

// function stringJoiner(strOne, strTwo) {
//     space = ' '
//     var newString = strOne.concat(space).concat(strTwo);
//     return newString
// }

// console.log(stringJoiner('hello', 'there'))

// ***********************************

// function hexGenerator() {
//     let hexList = [
//         "a",
//         "b",
//         "c",
//         "d",
//         "e",
//         "f",
//         "1",
//         "2",
//         "3",
//         "4",
//         "5",
//         "6",
//         "7",
//         "8",
//         "9"
//     ];
//     var hexColor = ["#"];
//     while (hexColor.length <= 6) {
//         hexColor.push(hexList[Math.floor(Math.random() * hexList.length)]);
//     }
//     return hexColor.join("")
// }

// console.log(hexGenerator())
// console.log(hexGenerator())
// console.log(hexGenerator())
// console.log(hexGenerator())

// **************************

// function alphabeticalStr(word) {
//     const string = word;
//     var newStr = string.split("");
//     var orderedArr = newStr.sort();
//     return orderedArr
// }
// console.log(alphabeticalStr('alphabetically'))

// ***********************************

// var hyphenString = 'orange-grey-white-blue';

// function ultraHyphen(str) {
//     return str.split("-").sort().join("-");
// }

// console.log(ultraHyphen(hyphenString))

// ***************************************

// function objectList(info){
    //     info = {
    //         name: 'Zac',
    //         age: 27,
    //         location: 'Illinois',
    //         dog: 'Diesel',
    //         hobby: ['art', 'writing', 'video games']
    //     }
    //     return info
    // }
    // console.log(objectList())
    

function objectList(info) {
    for (var key in info) {
        console.log(key + ": " + info[key])
    }
}

console.log(objectList(info = {
    name: 'Zac',
    age: 27,
    location: 'Illinois',
    dog: 'Diesel',
    hobby: ['art', 'writing', 'video games']
}))