//just start typing JS.

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

	var wins = 0;
    var losses = 0;
	var numberGuesses = 9;
	var guessChoices = [];

	document.onkeyup = function(event) {
	var userGuess = event.key;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	
		if (options.indexOf(userGuess) > -1) {
			if (userGuess === compGuess) {
				wins++;
				numberGuesses = 9;
				guessChoices = [];
			}
			if (userGuess != compGuess) {
				numberGuesses --;
				guessChoices.push(userGuess);
			}
			if (numberGuesses === 0) {
			    numberGuesses = 9;
			    losses ++;
			    guessChoices = [];
			}

	var html = 
	"<h1> Zoltar's Psychic Game </h1>" +
	"<p>Can You Read My Mind??!</p>" +
	"<p>Winner!: " + wins + "</p>" +
	"<p>Loser!: " + losses + "</p>" +
	"<p>Letters Left: " + numberGuesses + "</p>" +
    "<p>Letters Guessed: " + guessChoices.join(", ") + "</p>";
            
	document.querySelector("#game").innerHTML = html;

			
		}
	};