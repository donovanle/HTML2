//Always Hungry
function alwaysHungry(arr) {
    for(var i = 0; i < arr.length; i++){
        var food = 0
        if(arr[i]== "food"){
            console.log("yummy");
            food += 1;
        }
    }
    if(food < 1){
        console.log("I'm Hungry");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);



//High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);



//Better Than Average
function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    var avge = sum/arr.length;
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > avge){
            count = count + 1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

//Array Reverse
function reverse(arr){
    var left=0; //starting array number
    var right= arr.length-1;    //end array number ,4
    while(left<right){
        var temp= arr[right]; //temp = arr[4],  temp = arr[3]
        arr[right]=arr[left]; //arr[4] = arr[0],  arr[3] = arr[1]
        arr[left]=temp; //arr[0] = temp arr[4],  arr[1]= temp arr[3]
        left ++; //left =1,  left=2
        right--; //right =3,  right=2
    }
    return arr;
} 
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

//Fibonacci Array
function fibonacciArray(n) {
    var fibArr = [0, 1];
    while(fibArr.length < n){
        var second = fibArr[fibArr.length-2];
        var first = fibArr[fibArr.length-1];
        fibArr.push(second+first);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result);


