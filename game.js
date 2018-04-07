$gameTitle = document.getElementById("game-title");
$optionsList = document.getElementById("options-list");

let playerScore = 0;
let cpuScore = 0;
const choices = [
	{
		name: "Rock",
		beats: ["Scissors", "Lizard"],
		winverbs: ["crushes", "crushes"]
	},
	{
		name: "Paper",
		beats: ["Rock", "Spock"],
		winverbs: ["covers", "disproves"]
	},
	{
		name: "Scissors",
		beats: ["Paper", "Lizard"],
		winverbs: ["cuts", "decapitates"]
	},
	{
		name: "Lizard",
		beats: ["Paper", "Spock"],
		winverbs: ["eats", "poisons"]
	},
	{
		name: "Spock",
		beats: ["Scissors", "Rock"],
		winverbs: ["smashes", "vaporizes"]
	}
]

//Initialize
let names = choices.map(choice => {
	return choice.name;
});
let $newTitle = document.createTextNode(names.join(', '));
$gameTitle.appendChild($newTitle);

choices.forEach((choice, i) => {
	//Choice List
	let $newLi = document.createElement('li');
	let $newA = document.createElement('a');
	let text = document.createTextNode(choice.name);

	$newA.setAttribute('href', '#');
	$newA.appendChild(text);

	$newLi.appendChild($newA);

	$optionsList.appendChild($newLi);
});

function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cpuPlay() {
	return choices[randInt(0, choices.length - 1)];
}