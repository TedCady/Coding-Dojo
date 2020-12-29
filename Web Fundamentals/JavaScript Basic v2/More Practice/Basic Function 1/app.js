// prints 35
function a(){
    return 35;
}
console.log(a())

// prints 8
function a(){
    return 4;
}
console.log(a()+a());

// prints 6
function a(b){
    return b;
}
console.log(a(2)+a(4));

// prints  3 and 9
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

// prints 40
function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));

// prints 2 if < 10; 4 if < 10, and 10 if = 10
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

// prints 10, 3 and 30
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

// prints 3 an 4
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

// prints i position + 2 from 0 to 11
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

// prints numbers 0 - 9, twice
function a(b,c){
    for(var i=b; i<c; i++) {
    console.log(i);
    }
    return b*c;
}
a(0,10);
console.log(a(0,10));

// prints numbers 0 - 9 for j, 9 times; prints the numbers of times (9) i loops through j

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
        console.log(j);
        }
    console.log(i);
    }
}

// similar to previous, but prints i and j for each j loop; j and i for each i loop
// won't run without a function call
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

// not written to accept values, will return 10; no function call, would print 15 otherwise
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

// prints 15 and 10
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

// prints 15 and 15
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);