function hiThere () {
    console.log('Hi there');
}

hiThere(); // Hi there

function hiThereTwo() {
    return 'Hi there again';
}

hiThereTwo(); // "Hi there again"

var storedText = hiThere(); // Hi there

console.log(storedText); // undefined

var storedTextTwo = hiThereTwo();

console.log(storedTextTwo); // "Hi there again"