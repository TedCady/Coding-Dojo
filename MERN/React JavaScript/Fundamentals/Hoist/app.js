// Assignment: JavaScript Hoisting
// Objectives:
// Practice reading JavaScript the same way as the interpreter reads it.
// Rewrite the code the way it would be seen by the interpreter and predict the output. An example is shown here:

// // GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// // var example;
// // console.log(example); // logs undefined
// // example = "I'm the example!";
// After you've made your prediction, run the original code to find out if you were right! If your predictions were incorrect, 
    // look back at how the code is hoisted by the interpreter.

// Note
// Run the same code as above with ES6 syntax and compare your results:

// console.log(example);
// let example = "I'm the example!";    
// Even if let and const prevent a lot of the confusing behavior of JavaScript's hoisting, 
    // these are ES6 constructs and a huge amount of the world's live JavaScript code is still ES5. 
    // Understanding how ES5 hoists var and the rules of scoping are important for every JavaScript developer!

// CHECKLIST:
// Rewrite the given code as it is seen by the interpreter
// Predict the outputs
// Run the original code and compare the outputs to your predictions

console.log("----- Problem #1 -----") // Problem divider
console.log(hello);                                   
var hello = 'world';   
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';

console.log("----- Problem #2 -----") // Problem divider
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle = 'haystack';
// test();
// function test(){
//     needle = 'magnet';
//     console.log(needle);
// }

console.log("----- Problem #3 -----") // Problem divider
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan = 'super cool';
// console.log(brendan); // no function call for "print"

console.log("----- Problem #4 -----") // Problem divider
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food = 'chicken';
// console.log(food); // logs 'chicken'
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food); // logs 'half-chicken
// }

console.log("----- Problem #5 -----") // Problem divider
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var mean;
// mean(); // no function defined for mean

console.log("----- Problem #6 -----") // Problem divider
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre;
// console.log(genre); // undefined
// genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

console.log("----- Problem #7 -----") // Problem divider
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// var dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

console.log("----- Problem #8 -----") // Problem divider
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }