
var l2 = Math.floor((Math.random() * 5) + 1);
var l1 = l2 - 1 ;
var l3 = l2 + 1 ;
var insult = ["Idiot", "Prick", "Tosser","Wallaby", "FishBreathed Maggot", "Noggin", "Dick'ead", "Riggity Friggity Poop Head", "Wanker", "Slag – Whore", "Cheese-Eating Surrender-Monkey", "Daft Cow", "Dumb, large woman", "Supreme Asshole", "Barmy Git", "Dodgy Git", "Gormless Manky Minger", "Muppet", "Naff Nutter", "Pratting Pikey Pillock", "Plonker", "Dimwit", "Moron", "White Trash", "Scrubber", "Trollop", "Uphill Gardener", "Twit", "Knob Head", "Bell End", "Lazy Sod", "Skiver", "Useless Idiot", "Knob", "Wazzock", "Ninny", "Brilliant but Inferior", "Berk", "Airy-Fairy", "Ankle-Biter", "Arse-Licking Sycophant", "Arsemonger", "Mong", "Window Licker", "Chuffer", "Gannet", "Plug-Ugly Cockmuncher", "Mingebag"]
var hits = 0;
var guess;
var insultFinder;
var guesses =  0; 
var isSunk = false; 


	console.log("Ship Position: " + l1 + ", " + l2 + " & " + l3);

while (isSunk == false) {


	guess = prompt("Ready, aim, Fire! Enter a value from 0 - 6:") ;
	insultFinder =  insult[Math.floor(Math.random() * insult.length)];
	if (guess < 0 || guess > 6) {
		alert(insultFinder);
	} else {

		guesses = guesses + 1;
		console.log("Guesses: " + guesses)
	}

	if (guess == l1) {
		alert("BOOM! Motherfucker!!")
		hits = hits + 1;
		console.log("Hits: " + hits);
		l1 = null;

		if (hits == 3) {

		isSunk = true;
		alert("You Bloody " + insultFinder + ", you just sank my Cocking Battleship!");
		
		}
	} else if (guess == l2) {
		alert("BOOM! Motherfucker!!")
		hits = hits + 1;
		console.log("Hits: " + hits);
		l2 = null;
		
		if (hits == 3) {

		isSunk = true;
		alert("You Bloody " + insultFinder + ", you just sank my Cocking Battleship!");
		}

	} else if (guess == l3) {
		alert("BOOM! Motherfucker!!")
		hits = hits + 1;
		console.log("Hits: " + hits);
		l3 = null;
		if (hits == 3) {

		isSunk = true;
		alert("You Bloody " + insultFinder + ", you just sank my Cocking Battleship!");

		}

	} else {

		alert("You didn't just miss the boat, you missed the fuckin' SEA!");
		console.log("Player is clearly a moron")

			}

	
}
console.log("Player wins - F5 to restart")
var stats = "You took " + guesses + " guesses to sink the battleship, which means your shooting accuracy was " + (3/guesses);

alert(stats);