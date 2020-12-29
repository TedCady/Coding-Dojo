// Sigma 
// - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).
//   Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num){
    var sum = 0
    for(var i = 0; i <= num; i+=2){
        sum = sum + i
    }
    return(sum)
}
console.log(sigma(1738))

// Factorial
//  - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).
//   For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num){
    var fac = 1
    for(var i = 1; i <= num; i++){
        fac = fac * i
    }
    return(fac)
}
console.log(factorial(10))

// Fibonacci 
// - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.
//   Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).
//   Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2),
//  fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, 
//  don't worry as we'll be introducing this concept in Part 2 of this assignment.

function fibonacci(num){
    var n1 = 0;
    var n2 = 1;
    var sum;
    for(var i = 0; i < num - 1; i++){
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
        console.log(sum);
    }
}
fibonacci(9);

// Array: Second-to-Last: 
// Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function stl(){
    var arr = [42, true, 4, "Liam", 7];
    if(arr.length < 2){
        return('null')
    } else{
        return(arr[arr.length-2])
    }
}
console.log(stl())

// Array: Nth-to-Last: 
// Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function ntl(num){
    var arr = [5,2,3,6,4,9,7]
    return(arr[arr.length - num])
}
console.log(ntl(3))

// Array: Second-Largest: 
// Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function sL(){
    var arr = [42,1,4,3.14,7];
    var lg1 = 0;
    var lg2 = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > lg1){
            lg1 = arr[i];
        }
    }    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > lg2 && arr[i] < lg1){
            lg2 = arr[i];
        }
    }
    console.log(lg2)
}
sL()

// Double Trouble: 
// Create a function that changes a given array to list each existing element twice, retaining original order.  
// Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function dT(){
    var arr = [4, "Ulysses", 42, false];
    var j = arr.length;
    var temp;
    for(var i = 0; i < j; i++){
        arr.push(arr[i]);
    }
    for(var i = 0; i < arr.length; i++){
        for(var x = i+1; x < arr.length; x++){
            if(arr[i] == arr[x]){
                temp = arr[i+1];
                arr[i+1] = arr[x];
                arr[x] = temp;
            }
        }
    }
    console.log(arr);
}
dT()