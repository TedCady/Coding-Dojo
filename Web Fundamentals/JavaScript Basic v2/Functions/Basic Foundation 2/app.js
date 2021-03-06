// 1)  Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  
//      Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function p1(){
    var arr = [1,-2,3,-4,5,-6,7,-8]
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big"
        }
    }
    console.log(arr)
}
p1()
// 2)  Print Low, Return High - Create a function that takes in an array of numbers.  
//      The function should print the lowest value in the array, and return the highest value in the array.
function p2(){
    var arr = [-1, 2, -3, 4, -5, 6, -7, 8]
    var low = arr[1]
    var high = arr[1]
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < low){
            low = arr[i]
        }
        if(arr[i] > high){
            high = arr[i]
        }
    }
    console.log(low)
    return(high)
}
console.log(p2())
// 3)  Print One, Return Another - Build a function that takes in an array of numbers.  
//      The function should print the second-to-last value in the array, and return the first odd value in the array.
function p3(){
    var arr = [-1, 2, -3, 4, -5, 6, -7, 8]
    console.log(arr[arr.length-2])
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            return(arr[i])
        }
    }
}
console.log(p3())
// 4)  Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  
//      Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function p4(){
    var arr = [-1, 2, -3, 4, -5, 6, -7, 8]
    var dbl = []
    for(var i = 0; i < arr.length; i++){
        dbl.push(arr[i]*2)
    }
    console.log("Original Array: " + arr)
    console.log("New Array: " + dbl)
}
p4()
// 5)  Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  
//      Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function p5(){
    var arr = [-1, 2, -3, 4, -5, 6, -7, 8]
    var lPos = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            lPos++
        }
    }
    arr[arr.length-1] = lPos
    console.log(arr)
}
p5()
// 6)  Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  
//      Every time the array has three evens in a row, print "Even more so!".
function p6(){
    var arr = [2, 4, 6, 1, 3, 5, 1, 2, 3, 4, 1, 1, 1, 3, 3, 3, 4, 6, 8, 1, 3, 5]
    var Odd_ctr = 0
    var Evn_ctr = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            Evn_ctr = 0
            Odd_ctr++
            if(Odd_ctr == 3){
                console.log("That's odd!")
                Odd_ctr = 0
            }
        } else if(arr[i] % 2 == 0){
            Odd_ctr = 0
            Evn_ctr++
            if(Evn_ctr == 3){
                console.log("Even more so!")
                Evn_ctr = 0
            }    
        }
    }
}
p6()
// 7)  Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  
//      Afterward, console.log each array value and return arr.
function p7(){
    var arr = [2, 4, 6, 1, 3, 5, 1, 2, 3, 4, 1, 1, 1, 3, 3, 3, 4, 6, 8, 1, 3, 5]
    for(var i = 0; i < arr.length; i++){
        if(i % 2 != 0){
            arr[i] = arr[i] + 1
        }
        console.log(arr[i])
    }
    return(arr)
}
console.log(p7())
// 8)  Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  
//      Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  
//      For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function p8(){
    var arr = ["Bruh", "This", "Takes", "Forever", "I", "Think", "My", "Wife", "Left", "Me", "She's", "Been", "Gone", "For", "Weeks", "...wait", "I", "Don't","Even", "Have", "A", "Wife", "So", "Who", "Was", "That", "Woman", "Eating", "My", "Twizzlers?!"]
    for(var i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i-1].length
    }
    return(arr)
}
console.log(p8())
// 9)  Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  
//      Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function p9(){
    var arr = [2, 4, 6, 1, 3, 5, 1, 2, 3, 4, 1, 1, 1, 3, 3, 3, 4, 6, 8, 1, 3, 5]
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i] + 7)
    }
    console.log("Original Array: [" + arr + "]")
    return(newArr)
}
console.log("New Array: [" + p9() + "]")
// 10)  Reverse Array - Given an array, write a function that reverses its values, in-place.  
//      Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  
//      Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function p10(){
    var arr = [2,3,5,7,8,77,66,55,44,33]
    return(arr.reverse())
}
console.log(p10())
// 11)  Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). 
//      Given [1,-3,5], return [-1,-3,-5].
function p11(){
    var arr = [2, 4, 6, 1, 3, 5, 1, 2]
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] - (arr[i]*2)
    }
    console.log(arr)
}
p11()
// 12)  Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  
//      If no array values are "food", then print "I'm hungry" once.
function p12(){
    var arr = ["fuud", "fooood", "food", "bob", "food"]
    var ctr = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            ctr++
            console.log("yummy")
        }
    }
    if(ctr == 0){
        console.log("I'm hungry")
    }
}
p12()
// 13)  Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  
//      Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  
//      swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function p13(){
    var arr = ["First",2,"Third",4,"Fifth",6,"Seventh",8,"Last"]; 
    for(i=0; i < arr.length; i++){
        if(i < arr.length/2 + 0.5 && i % 2 == 0 || i == 0){
            var hold = arr[i]
            arr[i] = arr[arr.length - i - 1]
            arr[arr.length - i - 1] = hold
        }
    }
    console.log(arr)
}
p13()
// 14)  Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  
//      For example, scaleArray([1,2,3], 3) should return [3,6,9].
function p13(){
    var arr = [2, 4, 6, 1, 3, 5, 1, 2]
    var num = 1738
    for(i=0; i < arr.length; i++){
        arr[i] = arr[i] * num
    }
    return(arr)
}
console.log(p13())