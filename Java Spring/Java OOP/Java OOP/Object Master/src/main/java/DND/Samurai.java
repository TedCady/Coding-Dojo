package DND;

public class Samurai extends Human {
	static int counter;
	{counter += 1;}
	public Samurai(String name) {
		this.name = name;
		this.health = 200;
	}
	
	public void deathBlow(Human human) {
		human.health -= human.health;
		int damage = this.health / 2;
		this.health -= damage;
		System.out.println(this.name + " slapped " + human.name + " into the next dimension, but took " + damage + " damage in the process.");
		human.displayStats();
		this.displayStats();
	}
	public void meditate() {
		int heal = this.health / 2;
		this.health += heal;
		System.out.println(this.name + " healed for " + heal + " health.");
		this.displayStats();
	}
	
	public void howMany() {
		System.out.println("There are " + counter + " samurai's present.");
	}
}
