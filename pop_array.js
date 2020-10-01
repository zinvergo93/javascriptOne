let array = ['1', '2', '3', '4', '5', '6'];

function arrayPop(array){
    do { 
        array.reverse();
        var num = array.pop();
        return num;
    } while (array.length >= 1) ;
}    

console.log(arrayPop(array))
console.log(arrayPop(array))
console.log(arrayPop(array))
console.log(arrayPop(array))
console.log(arrayPop(array))
console.log(arrayPop(array))




//  Jordan solution

// class ArrayPopper {
//     constructor(arr) {
//       this.arr = arr;
//       this.atBeginning = true;
//     }
  
//     togglePopper() {
//       this.atBeginning = !this.atBeginning;
//       return this.atBeginning ? this.arr.pop() : this.arr.shift();
//     }
//   }
  
//   const ap = new ArrayPopper([1, 2, 3, 4, 5]);
  
//   console.log(ap.togglePopper())
//   console.log(ap.togglePopper())
//   console.log(ap.togglePopper())
//   console.log(ap.togglePopper())
//   console.log(ap.togglePopper())
//   console.log(ap.togglePopper())