function arrayPop (){
    var array = [1, 2, 3, 4, 5, 6];
    for (num in array){
    array.reverse();
    var num = array.pop();
    return num
    }
}    

console.log(arrayPop())