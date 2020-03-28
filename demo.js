var scores, roundscore, gameplaying, activePlayer, lastdice
init()
document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number...
    if (gameplaying) {
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2.display the result
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.JPG'

        // 3.Update the round score if the rolled number was not a 1 
        if (dice !== 1) {
            // add score 
            roundscore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundscore;

        } else {
            //next player
            nextPlayer()
        }
        lastdice = dice
    }



})

document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gameplaying) {

        scores[activePlayer] += roundscore
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
            //next player

        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = '--WINNER!--';
            document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner')
            document.querySelector('.dice').style.display = 'none'
            gameplaying = false

        }
        nextPlayer()
    }
})

document.querySelector('.btn-new').addEventListener('click', init)


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function init() {

    scores = [0, 0]
    roundscore = 0;
    activePlayer = 0;
    gameplaying = true
    document.querySelector('.dice').style.display = 'none';
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


//something rest