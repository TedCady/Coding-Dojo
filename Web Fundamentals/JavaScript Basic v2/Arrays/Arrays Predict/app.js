// Predict 1: Print each number within array.
//      Since arrays begin with 0, and there are 7 elements within the array: 
//          arr.length is 7, but the last element within the array is at position 6.
//              This is why i < arr.length displays all numbers.  
//                  If it were i < 7 with 8 elements, it wouldn't show the number within the last element.
var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}
// Predict 2: Print integers with 0 remainder after dividing by 2
//      prints "That is odd!" if number is not even (remainder after /2)
var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}
// Predict 3: Prints absolute values as negatives and negatives as absolute values
//      Prints 0 as string 'Zero' since there is no negative value
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);