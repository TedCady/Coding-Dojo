package DND;

public class DNDTest {

	public static void main(String[] args) {
		Wizard w = new Wizard("Steve Urkel");
		Wizard w2 = new Wizard("Bob");
		w.fireball(w2);
		Ninja n = new Ninja("Chris Farley");
		Ninja n2 = new Ninja("Haru");
		n.steal(n2);
		n.runAway();
		Samurai s = new Samurai("Tom Cruise");
		Samurai s2 = new Samurai("Nathan Algren");
		s.deathBlow(s2);
		s.meditate();
		Samurai s3 = new Samurai("Bartholomew");
		s3.deathBlow(w);
		s.howMany();
	}

}
