/*

Rock, Paper, Scissors, Lizard, Spock

*/

//Cache DOM
$gameTitle = document.getElementById("game-title");
$optionsList = document.getElementById("options-list");
$gameLog = document.getElementById("game-log");
$p1Score = document.getElementById("p1-score");
$p2Score = document.getElementById("p2-score");

//Initialize
let p1Score = 0;
let p2Score = 0;
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

$gameTitle.appendChild(
	document.createTextNode(
		choices.map(c => c.name)
		.join(', ')
	)
);

choices.forEach((choice, i) => {
	//Choice List
	let $newLi = document.createElement('li');
	let $newA = document.createElement('a');
	let text = document.createTextNode(choice.name);

	$newA.setAttribute('href', '#');
	$newA.appendChild(text);

	$newLi.appendChild($newA);

	$optionsList.appendChild($newLi);

	//bind event listeners
	$newA.addEventListener('click', click);
});

//Functions
function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cpuPlay() {
	return choices[randInt(0, choices.length - 1)];
}

function play(p1, p2) {
	let p1Win = p1.beats.indexOf(p2.name);
	let p2Win = p2.beats.indexOf(p1.name);
	console.log(p1Win);

	if (p1Win >= 0) {
		//p1 wins!
		p1Score++;
		return `You win! ${p1.name} ${p1.winverbs[p1Win]} ${p2.name}!`;
	} else if (p2Win >= 0) {
		//p2 wins!
		p2Score++;
		return `You lose! ${p2.name} ${p2.winverbs[p2Win]} ${p1.name}!`;
	} else {
		//tie game
		return `Tie game! Both players chose ${p1.name}.`;
	}
}

function click(e) {
	let p1 = choices.find(c => c.name === e.target.textContent);
	let p2 = cpuPlay();

	$gameLog.replaceChild(document.createTextNode(play(p1, p2)), $gameLog.firstChild);
	$p1Score.replaceChild(document.createTextNode(p1Score.toString()), $p1Score.firstChild);
	$p2Score.replaceChild(document.createTextNode(p2Score.toString()), $p2Score.firstChild);
}