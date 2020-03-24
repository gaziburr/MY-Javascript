var scores, roundscore, activescore,
    scores = [0, 0]
roundscore = [0, 0];
activescore = [0]
activePlayer = [0]

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number...
    var dice = Math.floor(Math.random() * 6) + 1

    // 2.display the result
    var diceDOM = document.querySelector('.dice')
    console.log(dice)

    // 3.Update the round score if the rolled number was not a 1 
    if (dice !== 1) {
        // add score 
        document.querySelector('#current-' + activePlayer).textContent = roundscore
    } else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    }

})