// Prediction: Will display integers from 0 to 14
for(var num = 0; num < 15; num++){
    console.log(num);
}
// Prediction: Displays integers which don't have a remainder after dividing by 3
for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}
// Prediction: If remainder after diving j by 2 = 0 then add 2 to j; else if remainder after dividing j by 3 = 0 then add 1 to j; display j value
for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}