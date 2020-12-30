// Ninja
// Example Outputs
    // const ninja1 = new Ninja("Hyabusa");
    // ninja1.sayName();
    // ninja1.showStats();
//  Create a Ninja class
class Ninja{
    constructor(name){
        //  add an attribute: name
        this.name = name;
        //  add an attribute: health
        this.health = 10;
        //  add a attribute: speed - give a default value of 3
        this.speed = 3;
        //  add a attribute: strength - give a default value of 3
        this.strength = 3;
    }
    //  add a method: sayName() - This should log that Ninja's name to the console
    sayName(){
        console.log(this.name);
    }
    //  add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
    showStats(){
        console.log("Name: " + this.name +"\nStrength: " + this.strength +"\nSpeed: " + this.speed +"\nHealth: " + this.health);
    }
    //  add a method: drinkSake() - This should add +10 Health to the Ninja
    drinkSake(){
        this.health += 10;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();