const getAverage = arr => {
    const reducer = (total, currentValue) => total + currentValue;
    const total = arr.reduce(reducer);
    return total / arr.length;
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(getAverage(arr));


// reduce is *boiler plate* function for arr.
//  reducer (function) = "total" is accumulator that grabs all of the values, the operator "+" tells the function to add
// the values accumulated (each value is "currentValue"). If sum were returned in function above for the given values, it would give
// the sum of [1,2,3,4,5,6] which is 21. If (total * currentValue), it would return 720. In this function, it takes "21" from "total",
// then divides it by arr.length (which is "6") and will return "3.5"