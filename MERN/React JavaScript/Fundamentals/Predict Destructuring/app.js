// Predict Destructuring
// For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.

console.log("----- Problem 1 -----")
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

console.log("----- Problem 2 -----")
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name); // name is not defined outside the employee scope, and cannot be found.
console.log(otherName);

console.log("----- Problem 3 -----")
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // password is defined outside of the person object.  
                        // It cannot be used as an attribute of person unless it is defined within that scope.
console.log(hashedPassword);

console.log("----- Problem 4 -----")
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); // first/second values located at index 1/3 (values = 2/5).  output = false
console.log(first == third); // first/third values located at index 1/8 (values = 2/2).  output = true

console.log("----- Problem 5 -----")
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // logs string value of "key" attribute
console.log(secondKey); // logs entire array value of "secondKey" attribute
console.log(secondKey[0]); // logs index 0 
console.log(willThisWork); // logs index 1