// 1)  Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function p1(){
    var arr = []
    for(var i=0;i<256;i++){
        arr.push(i+1)
    }
    return(arr)
}
console.log(p1())
// 2)  Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function p2(){
    var sum = 2;
    for (var i = 0; i <= 1000; i += 2) {
        sum += i
    }
    console.log(sum)
}
p2()
// 3)  Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function p3(){
    var sum = 0;
    for (var i = 1; i <= 5000; i += 2) {
        sum += i
        console.log(sum)
    }
}
p3()
// 4)  Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function p4(){
    var arr = [1,3,2,4,36,43,6,5,98]
    var sum = 0
    for(var i =0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log("The sum of all values within the array is: " + sum)
}
p4()
// 5)  Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function p5(){
    var arr = [1,3,22,43,65,103,1002,1738,1990,1776]
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > sum){
            sum = arr[i]
        }
    }
    console.log("The largest number in the array is: " + sum)
}
p5()
// 6)  Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function p6(){
    var arr = [1,2,3,5,8,13,21,34,55,89,144]
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum/(arr.length))
}
p6()
// 7)  Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function p7(){
    var arr = []
    for(var i = 1; i <= 50; i+=2){
        arr.push(i)
    }
    console.log(arr)
}
p7()
// 8)  Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 
//      For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function p8(){
    var arr = [17, 38, 19, 20, 32, 43, 2, 11, 4, 5]
    var Y = 12
    var larger_than = []
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > Y){
            larger_than.push(arr[i])
        }
    }
    console.log("Numbers larger than " + Y + " within the array are: " + larger_than)
}
p8()
// 9)  Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. 
//      (e.g. [1,5,10,-2] will become [1,25,100,4])
function p9(){
    var arr = [1,2,4,7,33,55,66,88]
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*arr[i]
    }
    console.log(arr)
}
p9()
// 10)  Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. 
//      When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function p10(){
    var arr = [-9,-10,12,3,-32,100,-1998]
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
    console.log(arr)
}
p10()
// 11)  Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 
//      (e.g. [1,5,10,-2] will return [10,-2,3.5])
function p11(){
    var arr = [1,3,2,-4,3,5,4,6,-5,7,6,88,77,-99,88,90,-10];
    var max = 0;
    var min = arr[0]
    var avg = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
        avg += arr[i]
    }
    avg = avg/arr.length
    var newArr = [max, min, avg]
    console.log("Original Array:  [" + arr + "]")
    console.log("Max/Min/Avg:  [" + newArr + "]")
}
p11()
// 12)  Swap Values - Write a function that will swap the first and last values of any given array. 
//      The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function p12(){
    var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    var n1 = arr[0]
    var n2 = arr[arr.length-1]
    arr[0] = n2
    arr[arr.length-1] = n1
    console.log(arr)
}
p12()
// 13)  Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. 
//      For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function p13(){
    var arr = [-9,-10,12,3,-32,100,-1998]
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo"
        }
    }
    console.log(arr)
}
p13()