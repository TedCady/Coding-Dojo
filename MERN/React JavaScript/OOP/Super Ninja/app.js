class Ninja{
    name;
    health = 10;
    speed = 3;
    strength = 3;
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("Name: " + this.name +"\nStrength: " + this.strength +"\nSpeed: " + this.speed +"\nHealth: " + this.health);
    }
    drinkSake(){
        this.health += 10;
    }
}
// Super Ninja
// Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. 
// In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. 
// Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, 
// before console.logging a wise message.

//  create a class Sensei that inherits from the Ninja class
class Sensei extends Ninja{
    //  add an attribute: wisdom - default to 10
    wisdom = 10;
    health = 200;
    speed = 10;
    strength = 10;
    //  create a method: speakWisdom()
    speakWisdom(){
        //  create a method: drinkSake()
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
// // example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// // -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// // -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

