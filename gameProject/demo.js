var scores, roundscore, gameplaying, activePlayer, lastdice //Declaring variables (which will be define later)
init()
document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number...
    if (gameplaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;


        // 2.display the result (dom manipulation)
        document.querySelector('#dice1').style.display = 'block';
        document.querySelector('#dice2').style.display = 'block';
        document.querySelector('#dice1').src = 'IMAGES/dice-' + dice1 + '.JPG'
        document.querySelector('#dice2').src = 'IMAGES/dice-' + dice2 + '.JPG'
            //Update the round score IF the rolled number was NOt a 6
        if (dice1 === 6 && dice2 === 6) { //and operator, '===' checks value and datatype
            roundscore += 0
                //player loses score
            scores[activePlayer] = 0
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer() //calling a function
        }
        // 3.Update the round score if the rolled number was not a 1 
        else if (dice1 !== 1 && dice2 != 1) {
            // add score 
            roundscore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundscore;
        } else {
            //next player function
            nextPlayer()
        }
    }
})

document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gameplaying) {
        // Update the UI
        //Add the CURRENT to Global score
        scores[activePlayer] += roundscore //Same as ' score[activePlayer]=score[activePlayer]+roundscore]'
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer] //textContent methods
            //next player
        var input = document.querySelector('.final-score').value; //accesing the value
        var winningscore; //just declare the variable
        //Undefined,null ,0 and "" are coarced to false
        //Anything else is coarced to true.
        if (input) {
            winningscore = input //Defining the variable
        } else {
            winningscore = 100 //Defining the variable
        }





        //Check if the player won the game
        if (scores[activePlayer] >= winningscore) {
            document.querySelector('#name-' + activePlayer).textContent = '--WINNER!--';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
                // document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner')
            document.querySelector('#dice1').style.display = 'none'
            document.querySelector('#dice2').style.display = 'none'
            gameplaying = false

        } else {
            //next player
            nextPlayer()
        }

    }
})

document.querySelector('.btn-new').addEventListener('click', init)

//Making a Reusable function.. Gazibur 
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;
    //Dom
    document.querySelector('#dice1').style.display = 'none';
    document.querySelector('#dice2').style.display = 'none';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}
//Another ReUsable function.
function init() {
    scores = [0, 0]
    roundscore = 0;
    activePlayer = 0;
    gameplaying = true
        //All are accessing Dom (changing, adding and reading) Gazibur.
    document.querySelector('#dice1').style.display = 'none';
    document.querySelector('#dice2').style.display = 'none';
    document.querySelector('#name-0').textContent = 'PLAYER-1';
    document.querySelector('#name-1').textContent = 'PLAYER-2';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-score').style.color = 'blue'

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.add('active');
}