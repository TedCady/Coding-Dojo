var testArr = [6,3,5,1,2,4]
var sumArr = []
var multiArr = []

for(i = 0; i < testArr.length; i++){
    if(i == 0){
        sumArr.push(testArr[i])
    } else{
    sumArr.push(testArr[i])
    sumArr[i] = sumArr[i] + sumArr[i-1]
    }
    multiArr.push(testArr[i] * i)
}
console.log("Original Array:  [" + testArr + "]")
console.log("Sum Array: [" + sumArr + "]")
console.log("Multiplied Array:  [" + multiArr + "]")