var scores, roundscore, activescore,
    scores = [0, 0]
roundscore = 0;
activePlayer = 0;
// document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number...
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

})
document.querySelector('.btn-hold').addEventListener('click', function() {


    scores[activePlayer] += roundscore
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
        //next player
    nextPlayer()
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}