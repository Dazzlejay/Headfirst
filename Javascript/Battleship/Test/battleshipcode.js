

var insult = ["Idiot", "Prick", "Tosser","Wallaby", "FishBreathed Maggot", "Noggin", "Dick'ead", "Riggity Friggity Poop Head", "Wanker", "Slag – Whore", "Cheese-Eating Surrender-Monkey", "Daft Cow", "Dumb, large woman", "Supreme Asshole", "Barmy Git", "Dodgy Git", "Gormless Manky Minger", "Muppet", "Naff Nutter", "Pratting Pikey Pillock", "Plonker", "Dimwit", "Moron", "White Trash", "Scrubber", "Trollop", "Uphill Gardener", "Twit", "Knob Head", "Bell End", "Lazy Sod", "Skiver", "Useless Idiot", "Knob", "Wazzock", "Ninny", "Brilliant but Inferior", "Berk", "Airy-Fairy", "Ankle-Biter", "Arse-Licking Sycophant", "Arsemonger", "Mong", "Window Licker", "Chuffer", "Gannet", "Plug-Ugly Cockmuncher", "Mingebag"]
var hits = 0;
var guess;
var input;
var coordGuess
var insultFinder;
var guesses =  0; 
var isSunk = false; 
var yposition = [0,1,2,3,4,5,6,7,8,9];
var xposition = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
var coordinates = [xposition, yposition];
var movingAxis = coordinates[rNGFloor2(2)]


var random1 = rNGFloor(8)
var random2 = rNGFloor(8)

var l2 = [xposition[random1], yposition[random2]];

if (movingAxis == yposition) {
	var l1 = [l2[0], l2[1] - 1];
	var l3 = [l2[0], l2[1] + 1];
} else {
	var l1 = [xposition[random1 -1], l2[1]];
	var l3 = [xposition[random1 +1], l2[1]];
}

function rNGFloor2(num) {
	var number = Math.floor(Math.random() * num );
	return number;
}

function rNGFloor(num) {
	var number = Math.floor(Math.random() * num ) + 1;
	return number;
}

console.log("Ship Position: " + l1 + ", " + l2 + " & " + l3);

while (isSunk == false) {
	
	input = prompt("Ready, aim, Fire! Enter a value from 0 - 9:")
	
	coordGuess = [input.charAt(0), input.charAt(1)]

	console.log(coordGuess)

	insultFinder =  insult[Math.floor(Math.random() * insult.length)];
	
var isCorrect = false;
	if (coordGuess[1] < 0 || coordGuess[1] > 9) {
		alert(insultFinder);
	} else if (isCorrect==false) {
		for (var i = xposition.length; isCorrect==false && i > -1; i--) {
			
		    if (xposition[i] == coordGuess[0]) {
		    	isCorrect = true
		    	  	
		    }
		}

		if (isCorrect == false) {

			alert(insultFinder);
		}
		

	} 

	if (isCorrect == true){

		guesses = guesses + 1;
		console.log("Guesses: " + guesses)
	}

	console.log(isCorrect)


	if (coordGuess[0] == l1[0] && coordGuess[1] == l1[1]) {
		alert("BOOM! Motherfucker!!")
		hits = hits + 1;
		console.log("Hits: " + hits);
		l1[1] = 99;

		if (hits == 3) {

		isSunk = true;
		alert("You Bloody " + insultFinder + ", you just sank my Cocking Battleship!");
		
		}
	} else if (coordGuess[0] == l2[0] && coordGuess[1] == l2[1]) {
		alert("BOOM! Motherfucker!!")
		hits = hits + 1;
		console.log("Hits: " + hits);
		l2[1] = 99;
		
		if (hits == 3) {

		isSunk = true;
		alert("You Bloody " + insultFinder + ", you just sank my Cocking Battleship!");
		}

	} else if (coordGuess[0] == l3[0] && coordGuess[1] == l3[1]) {
		alert("BOOM! Motherfucker!!")
		hits = hits + 1;
		console.log("Hits: " + hits);
		l3[1] = 99;
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



/*	console.log("Ship Position: " + l1 + ", " + l2 + " & " + l3);

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

alert(stats);*/