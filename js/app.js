// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;

// create an array to store phrases for each button have 
const phrases = [];

// create an arrary to store 5 buttons
const buttons = [];

// create an array to store all selected phrases
var wholeSentece = [];


// Arrays that stores phrases on each button
phrases[0] = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
buttons[0] = document.getElementById('firstBtn');

phrases[1] = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
buttons[1] = document.getElementById('secondBtn');

phrases[2] = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
buttons[2] = document.getElementById('thirdBtn');

phrases[3] = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
buttons[3] = document.getElementById('forthBtn');

phrases[4] = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];
buttons[4] = document.getElementById('fifthBtn');



/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// arrow function to generate random index
const randomIndex = (arrayOfPhrases) => Math.floor(Math.random() * arrayOfPhrases.length); 



/* Event Listeners
-------------------------------------------------- */
// Five buttons that speaks when it's pressed

let previousPhrases = [];  // store previous phrases in case they pressed multiple times

for (let i = 0; i < buttons.length; i++){
	let selectedPhrase;

	buttons[i].onclick = function() {
		switch(i){
			case 0:
				selectedPhrase = phrases[0][randomIndex(phrases)]
				wholeSentece[0] = selectedPhrase;
				break;
			case 1:
				selectedPhrase = phrases[1][randomIndex(phrases)]
				wholeSentece[1] = selectedPhrase;
				break;
			case 2:
				selectedPhrase = phrases[2][randomIndex(phrases)]
				wholeSentece[2] = selectedPhrase;
				break;
			case 3:
				selectedPhrase = phrases[3][randomIndex(phrases)]
				wholeSentece[3] = selectedPhrase;
				break;
			case 4:
				selectedPhrase = phrases[4][randomIndex(phrases)]
				wholeSentece[4] = selectedPhrase;
				break;
		}

		// if there is previous phrase already exists, remove
		if (previousPhrases[i]) {
            previousPhrases.shift();
        }

		addText(selectedPhrase, "word" + (i + 1));	// display
        speakNow(selectedPhrase);					// speak 
        console.log(selectedPhrase);				// to check on console

		// // update previousPhrase to new phrase here
		previousPhrases[i] = document.querySelectorAll('#word' + (i + 1) + ' p');
	}
	
}

// A Playback button for speak a whole sentence
const playBack_button = document.getElementById('playBack');

playBack_button.onclick = function() {
	resultToSpeak = wholeSentece.join(' ');
	speakNow(resultToSpeak);
	console.log(resultToSpeak);
}

// A surprise button that generates a random story with one click
const surprise_button = document.getElementById('surprise');

surprise_button.onclick = function() {
	const randomPhrase = [];
	// store a whole seneteces to the randomPrase array
	for(let j = 0; j < buttons.length; j++){
		randomPhrase[j] = phrases[j][randomIndex(phrases)];
	};
	randomSentence = randomPhrase.join(' ');	// concatinate all values to one sentence
	addText(randomSentence, 'random-sentense');
	speakNow(randomSentence);
	console.log(randomSentence);
}


// addText function to add selected phrase
const addText = (newWord, idName) => document.getElementById(idName).innerHTML = newWord;


// A resset button to delete current story
const reset_button = document.getElementById('reset');
reset_button.onclick = function() {
	var displayElements = document.querySelectorAll('.text p');		// only target <p> which was added by addText function
	displayElements.forEach(function(element){
		element.innerHTML = '';		// change to blanck 
	});
	wholeSentece = [];
	// Reset random sentence as well
	document.getElementById('random-sentense').innerHTML = 'Random Story For You';	// change back to defalut message 
	randomSentence = [];
}













