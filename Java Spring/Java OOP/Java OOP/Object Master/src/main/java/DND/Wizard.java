package DND;

public class Wizard extends Human {
	
	public Wizard(String name) {
		this.name = name;
		this.health = 50;
		this.intelligence = 8;
	}
	public void heal(Human human) {
		int heal = this.intelligence;
		human.health += heal;
		System.out.println(this.name + " healed " + human.name + " for " + heal + " health.");
		human.displayStats();
	}
	public void fireball(Human human) {
		int damage = this.intelligence * 3;
		human.health -= damage;
		System.out.println(this.name + " tossed a fireball at " + human.name + "'s face for " + damage + " damage.");
		human.displayStats();
	}
}
