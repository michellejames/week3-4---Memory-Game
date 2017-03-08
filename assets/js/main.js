// console.log("hello world");

///////////////////Memory Game/////////////////

// Shuffle
// deal
// flip cards
// Check for match
// —> yes: set aside
// —> no: flick back
// win game:
// -> restart game
// -> end game


////////////////START GAME//////////////

function startGame () {

	var totalCards = 8;

	var deck = [
	    {color: "red",   number: "A" , suit: "&hearts;"},
	    {color: "red",   number: "2" , suit: "&hearts;"},
	    {color: "red",   number: "3" , suit: "&hearts;"},
	    {color: "red",   number: "4" , suit: "&hearts;"},
	    {color: "red",   number: "5" , suit: "&hearts;"},
	    {color: "red",   number: "6" , suit: "&hearts;"},
	    {color: "red",   number: "7" , suit: "&hearts;"},
	    {color: "red",   number: "8" , suit: "&hearts;"},
	    {color: "red",   number: "9" , suit: "&hearts;"},
	    {color: "red",   number: "10", suit: "&hearts;"},
	    {color: "red",   number: "J" , suit: "&hearts;"},
	    {color: "red",   number: "Q" , suit: "&hearts;"},
	    {color: "red",   number: "K" , suit: "&hearts;"},

	    {color: "red",   number: "A" , suit: "&diams;"},
	    {color: "red",   number: "2" , suit: "&diams;"},
	    {color: "red",   number: "3" , suit: "&diams;"},
	    {color: "red",   number: "4" , suit: "&diams;"},
	    {color: "red",   number: "5" , suit: "&diams;"},
	    {color: "red",   number: "6" , suit: "&diams;"},
	    {color: "red",   number: "7" , suit: "&diams;"},
	    {color: "red",   number: "8" , suit: "&diams;"},
	    {color: "red",   number: "9" , suit: "&diams;"},
	    {color: "red",   number: "10", suit: "&diams;"},
	    {color: "red",   number: "J" , suit: "&diams;"},
	    {color: "red",   number: "Q" , suit: "&diams;"},
	    {color: "red",   number: "K" , suit: "&diams;"},


	    {color: "black", number: "A" , suit: "&spades;"},
	    {color: "black", number: "2" , suit: "&spades;"},
	    {color: "black", number: "3" , suit: "&spades;"},
	    {color: "black", number: "4" , suit: "&spades;"},
	    {color: "black", number: "5" , suit: "&spades;"},
	    {color: "black", number: "6" , suit: "&spades;"},
	    {color: "black", number: "7" , suit: "&spades;"},
	    {color: "black", number: "8" , suit: "&spades;"},
	    {color: "black", number: "9" , suit: "&spades;"},
	    {color: "black", number: "10", suit: "&spades;"},
	    {color: "black", number: "J" , suit: "&spades;"},
	    {color: "black", number: "Q" , suit: "&spades;"},
	    {color: "black", number: "K" , suit: "&spades;"},

	   	{color: "black",   number: "A" , suit: "&clubs;"},
	    {color: "black",   number: "2" , suit: "&clubs;"},
	    {color: "black",   number: "3" , suit: "&clubs;"},
	    {color: "black",   number: "4" , suit: "&clubs;"},
	    {color: "black",   number: "5" , suit: "&clubs;"},
	    {color: "black",   number: "6" , suit: "&clubs;"},
	    {color: "black",   number: "7" , suit: "&clubs;"},
	    {color: "black",   number: "8" , suit: "&clubs;"},
	    {color: "black",   number: "9" , suit: "&clubs;"},
	    {color: "black",   number: "10", suit: "&clubs;"},
	    {color: "black",   number: "J" , suit: "&clubs;"},
	    {color: "black",   number: "Q" , suit: "&clubs;"},
	    {color: "black",   number: "K" , suit: "&clubs;"},
	];
	shuffle ( deck );

	//deal: we need an array of objects

	var pickedCards = deck.slice ( 0, totalCards / 2 );
	console.log( pickedCards );

	pickedCards = pickedCards.concat( pickedCards );				//concat: add an array in an array

	shuffle( pickedCards );
	// console.log(pickedCards);

	dealCards( pickedCards );

	seconds = 0;
	minutes = 0;
	hours = 0;
}

window.addEventListener( "load", startGame );


////////////////TIMER//////////////


var seconds = 0;
var minutes = 0;
var hours = 0;

var stopWatch = document.createElement ( "h1" );
stopWatch.classList.add ( "timer" );
document.body.appendChild ( stopWatch );


var addTime = function () {
    seconds++;
    stopWatch.innerHTML = ( hoursValue () + hours + ":" + minutesValue () + minutes + ":" + secondsValue () + seconds );

    if ( seconds >= 60 ) {
        minutes++;
        seconds = 0;
    }
    if ( minutes >= 60 ) {
        hours++;
        minutes = 0;
        seconds = 0;
    }
}


var intervalStopWatch = setInterval ( addTime, 1000 );

function secondsValue () {
    if ( seconds < 10 ) {
        return "0";
    } else {
        return "";
    }
}

function minutesValue () {
    if ( minutes < 10 ) {
        return "0";
    } else {
        return "";
    }
}

function hoursValue () {
    if ( hours < 10 ) {
        return "0";
    } else {
        return "";
    }
}

////////////////SHUFFLE CARDS//////////////


function shuffle ( deck ){

    for ( var j, x, i = deck.length;
    	i;
    	j = Math.floor ( Math.random () * i ),
    	x = deck[--i],
    	deck[i] = deck[j],
    	deck[j] = x );

    return deck;
};

////////////////DEAL CARDS//////////////


function dealCards ( deck ) {
	for ( var i = 0; i < deck.length; i++ ) {
		var card = document.createElement ( "div" );
		card.setAttribute ( "class", "card" );
		card.setAttribute ( "data-color", deck[i].color );
		card.setAttribute ( "data-suit", deck[i].suit );
		card.setAttribute ( "data-number", deck[i].number );
		card.innerHTML = deck[i].number + deck[i].suit;
		document.body.appendChild ( card );

		card.addEventListener ( "click", onCardClick );
	}
}

////////////////FLIP CARDS//////////////


function onCardClick ( e ) {

	//check to be sure only two cards are flipped

	var flippedCards = document.querySelectorAll( ".flipped" );

		if ( flippedCards.length < 2 ) {
			//allow card to flip
			if ( !this.classList.contains ( "flipped" ) && !this.classList.contains ( "matched" ) ) {

				this.classList.add ( "flipped" );

				if ( flippedCards.length == 1 ) {
				checkforMatch ( this, flippedCards[0] );
				}
			}
		
		} 

	}

	//check to see if its a match
	//stop from being flipped back over if only one is visibly flipped

function checkforMatch ( card1, card2 ) {
	console.log( "check" );
	console.log ( card1 );
	console.log ( card2 );

	if ( card1.dataset.number === card2.dataset.number &&
		card1.dataset.suit === card2.dataset.suit ) {
		console.log ( "It's a match!" );

		card1.classList.remove ( "flipped" );
		card2.classList.remove ( "flipped" );
		card1.classList.add ( "matched" );
		card2.classList.add ( "matched" );

		checkForWin ();

	} else {
		console.log ( "Nope, try again!" )
		setTimeout ( function (){
			card1.classList.remove ( "flipped" );
			card2.classList.remove ( "flipped" );

		}, 500 );
	}

	function checkForWin () {
		var totalMatched = document.querySelectorAll( ".matched" ).length;
		var totalCards = document.querySelectorAll( ".card" ).length;

		if ( totalMatched === totalCards ) {
			setTimeout ( function () {
				createModule ();
				
			}, 250 );
			clearInterval ( intervalStopWatch );
		}
	}
}

////////////////MODULE//////////////

var createModule = function () {

	var overlay = document.createElement ( "div" );
	overlay.classList.add( "overlay" );
	document.body.appendChild ( overlay );

	var module = document.createElement ( "div" );
	module.classList.add( "module" );
	document.body.appendChild ( module );

	var winningMessage = document.createElement ( "h3" );
	winningMessage.classList.add( "winningMessage" );
	module.appendChild ( winningMessage );
	winningMessage.innerHTML = "Congratulations!<br><br>It took you " + ( hoursValue () + hours + ":" + minutesValue () + minutes + ":" + secondsValue () + seconds ) + " to finish the game.";

	var restartButton = document.createElement ( "button" );
	restartButton.classList.add( "restartButton" );
	module.appendChild ( restartButton );
	restartButton.innerHTML = "Restart";

	var endButton = document.createElement ( "button" );
	endButton.classList.add ( "endButton" );
	module.appendChild ( endButton );
	endButton.innerHTML = "End Game";

	restartButton.addEventListener ( "click", restartGame );
	endButton.addEventListener ( "click", endGameButton );
}

////////////////END GAME//////////////


var endGameButton = function () {

	var overlay = document.querySelector( ".overlay" );
	var module = document.querySelector( ".module" );
	
	overlay.parentNode.removeChild( overlay );
	module.parentNode.removeChild( module );
}


////////////////RESTART GAME//////////////


var restartGame = function () {

	var overlay = document.querySelector( ".overlay" );
	var module = document.querySelector( ".module" );
	
	overlay.parentNode.removeChild( overlay );
	module.parentNode.removeChild( module );

	var cards = document.querySelectorAll( ".card" );

	for ( var i = cards.length - 1; i >= 0; i-- ) {
		cards[i].parentNode.removeChild ( cards [i] );
	}
	intervalStopWatch = setInterval(addTime, 1000);
	startGame ();

}















