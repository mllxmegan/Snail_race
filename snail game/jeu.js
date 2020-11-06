window.onload = function(){

	initDices();
	initSnails();

};

function getDicesConfig(){

	var diceImgBlue = "assets/img/deblue.png";
	var diceImgYellow = "assets/img/deyellow.png";
	var diceImgRed = "assets/img/dered.png";
	var diceImgGreen = "assets/img/degreen.png";


	var dicesConfig = [
			[ 'blue', diceImgBlue ],
			[ 'yellow', diceImgYellow ],
			[ 'red', diceImgRed ],
			[ 'green', diceImgGreen ],

		]

	return dicesConfig;

}

function repositionSnails(){

	document.getElementById("snail-blue").style.left = '23.5%';
	document.getElementById("snail-yellow").style.left = '23.5%';
	document.getElementById("snail-red").style.left = '23.5%';
	document.getElementById("snail-green").style.left = '23.5%';

}

// on affiche les dés pour le départ
function initDices(){

	  document.getElementById("dice-one").src = "assets/img/de1.png";
	  document.getElementById("dice-two").src = "assets/img/de2.png";

	  document.getElementById("dice-one").style.display = 'block';
	  document.getElementById("dice-two").style.display = 'block';

}

// récupération de la position des escargots
function getSnailsPosition(){

	var SnailPositionBlue = document.getElementById("snail-blue").offsetLeft;
	var SnailPositionYellow = document.getElementById("snail-yellow").offsetLeft;
	var SnailPositionRed = document.getElementById("snail-red").offsetLeft;
	var SnailPositionGreen = document.getElementById("snail-green").offsetLeft;

	var positions = [
			[ 'blue', SnailPositionBlue ],
			[ 'yellow', SnailPositionYellow ],
			[ 'red', SnailPositionRed ],
			[ 'green', SnailPositionGreen ],
		]

	return positions;

}

// on affiche les escargots sur la ligne de départ
function initSnails(){

	document.getElementById("snail-blue").src = "assets/img/pion1.png";
	document.getElementById("snail-yellow").src = "assets/img/pion2.png";
	document.getElementById("snail-red").src = "assets/img/pion3.png";
	document.getElementById("snail-green").src = "assets/img/pion4.png";

	document.getElementById("snail-blue").style.display =  'block';
	document.getElementById("snail-yellow").style.display =  'block';
	document.getElementById("snail-red").style.display =  'block';
	document.getElementById("snail-green").style.display =  'block';

}

// Lancement des dés //
function roll() {

	// on récupère les images et les couleurs qui vont avec
    var dices = getDicesConfig();

	// -------- Lancer du dé N°1
	var launchOne = Math.floor(Math.random() * dices.length);
	//on récupère la couleur du nouveau dé
	var colorOne = dices[launchOne][0];
	// on affiche l'image du nouveau dé
	document.getElementById("dice-one").src = dices[launchOne][1];

	// -------- Lancer du dé N°2
	var launchTwo = Math.floor(Math.random() * dices.length);
	var colorTwo = dices[launchTwo][0];
	document.getElementById("dice-two").src = dices[launchTwo][1];

	// on va appeler la fonction pour faire avancer les escargots
	moveSnails(colorOne, colorTwo);

}

function moveSnails(firstColor, secondColor){

	var maxMovement = 900;

	// déplacement du premier lancer
	var snailsPositions = getSnailsPosition();
	for ( let i = 0; i < snailsPositions.length; i++ ){

		if ( snailsPositions[i][0] == firstColor ){

			var NewPositionLeft = snailsPositions[i][1] + 87;
			document.getElementById("snail-"+snailsPositions[i][0]).style.left = NewPositionLeft+'px';
			if ( NewPositionLeft >= maxMovement ) { gameWin(snailsPositions[i][0]); exit; }

		}
	}

		// déplacement du deuxieme lancer
	var snailsPositions = getSnailsPosition();
	for ( let i = 0; i < snailsPositions.length; i++ ){

		if ( snailsPositions[i][0] == secondColor ){

			var NewPositionLeft = snailsPositions[i][1] + 87;
			document.getElementById("snail-"+snailsPositions[i][0]).style.left = NewPositionLeft+'px';
			if ( NewPositionLeft >= maxMovement ) gameWin(snailsPositions[i][0]);

		}
	}

}

function gameWin(winner){

	alert('VIF COMME L ECLAIR, PUISSANT COMME LA FOUDRE JE SUIS FLASH '+ winner);
	resetGame();

}

function resetGame(){

	initDices();
	initSnails();
	repositionSnails();

}
