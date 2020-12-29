// Predict 1: Prints "Hello" but not "World" because 'return' ends the function early
function greeting(){
        return "Hello";
        console.log("World");
    }
    var word = greeting();
    console.log(word);
// Predict 2: Prints the two chosen numbers for num1 and num2, then adds them together
function add(num1, num2){
        console.log("Summing Numbers!");
            console.log("num1 is: " + num1);
            console.log("num2 is: " + num2);
            var sum = num1 + num2;
            return sum;
        }
        var result1 = add(3,5);
        var result2 = add(4,7);
        console.log(result1);
        console.log(result2);
// Predict 3: Prints all numbers from 0 to chosen variable integer -1.  Prints "High Five!" for 5. Won't do anything until the function is called with a given number
function highFive(num){
        for(var i=0; i<num; i++){
            if(i == 5){
                console.log("High Five!");
            }
            else{
                console.log(i);
            }
        }
    }