console.log('JS connected!');


//Win condition set to null
var win = null;

//Turn counter, if reach 9 then its a tie
var turnNumber = 0;

//Tie condition set to null
var tie = null;

//Set player as variable
var player = 'player1';

//Define win condition
var winCondition = [
					['0','1','2'],
					['3','4','5'],
					['6','7','8'],

					['0','3','6'],
					['1','4','7'],
					['2','5','8'],

					['2','4','6'],
					['0','4','8'],
					]

//reset board by removing all classes and text and resetting all variables
var reset = function(){
	$('td').removeClass();
	$('td').text('');
	winTotal = 0;
	win = null;
	player = 'player1';
	player1state = [];
	player2state = [];
	turnNumber = 0;
	console.log('reset!');
};

$('#reset').on('click', reset);


//keep track of player state
var player1state = []; //exampe state: ['1','4','7'] = win
var player2state = [];

//Player' turn:
//on click function for a cell
$('#board').on('click','td', function(event) {
console.log('ok!');
var target = event.target;


//check if there is a class on cell already
if ($(target).hasClass('player1') || $(target).hasClass('player2')) {
	//if yes, do nothing
	console.log('no room');
}	else {
		//check if player 1 or player 2
		if (player === 'player1') {
		//if player1, push scores	
		$(target).addClass('player1');
		$(target).text('X');	
		player1state.push($(target).attr('data-num'));
			//check win condition
			checkWin(player1state);
			//add turn counter
			turnNumber++;
			if (win === 1) {
				alert ('player 1 won!');
				reset();
			};

		} else {
		//if player2, push scores
		$(target).addClass('player2');
		$(target).text('O');
		player2state.push($(target).attr('data-num'));
			//check win condition
			checkWin(player2state);
			//add turn counter
			turnNumber++;
			if (win === 1) {
				alert ('player 2 won!');
				reset();
			};
		};


	//set tie condition
	//Run tie function to check
		if (turnNumber === 9) {
			alert('You have tied the game!');
			reset();
		}
		//changes player
		changePlayer();	
}
});

//change player function
function changePlayer() {
	if (player === 'player1') {
	player = 'player2';
	$('.playerTurn').text("It is O's turn");
} else {
	player = 'player1';
	$('.playerTurn').text("It is X's turn");
}
};

//Win condition function
function checkWin(playerState) {

	//loop through array of arrays
	winCondition.forEach(function(index){ //[ [1,2,3] [1,2,3] [1,2,3] ]
		//console.log(index);
		var winTotal = 0;
	    //loop through arrays
	    for (var i = 0; i < index.length; i++){
	    	//var counter = 0;
	    	//console.log(index[i]);
	    	//check array values to see if match with playerstate values
	    	for (var x = 0; x < playerState.length; x++){
	    		;
	    		//counter++;
	    		if (index[i] === playerState[x]){
	    			//console.log(player1state[x]);
	    			winTotal++;

	    				//if 3 matches, set win to 1
	    				if (winTotal === 3) {
	    				console.log('wintotal = 3!');
	    				win = 1;
	    				winTotal = 0;
	    		};

	   		 	}
	    		
	    	}
	 	}
	 });
}



