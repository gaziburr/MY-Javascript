var scores, roundscore, gameplaying, activePlayer, lastdice
init()
document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number...
    if (gameplaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;


        // 2.display the result
        document.querySelector('#dice1').style.display = 'block';
        document.querySelector('#dice2').style.display = 'block';
        document.querySelector('#dice1').src = 'dice-' + dice1 + '.JPG'
        document.querySelector('#dice2').src = 'dice-' + dice2 + '.JPG'

        if (dice1 === 6 && dice2 === 6) {
            roundscore += 0
            scores[activePlayer] = 0
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer()
        }
        // 3.Update the round score if the rolled number was not a 1 
        else if (dice1 !== 1 && dice2 != 1) {
            // add score 
            roundscore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundscore;
        } else {
            //next player
            nextPlayer()
        }
    }
})

document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gameplaying) {

        scores[activePlayer] += roundscore
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
            //next player
        var input = document.querySelector('.final-score').value;
        var winningscore;
        if (input) {
            winningscore = input
        } else {
            winningscore = 100
        }






        if (scores[activePlayer] >= winningscore) {
            document.querySelector('#name-' + activePlayer).textContent = '--WINNER!--';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
                // document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner')
            document.querySelector('#dice1').style.display = 'none'
            document.querySelector('#dice2').style.display = 'none'
            gameplaying = false

        }
        nextPlayer()
    }
})

document.querySelector('.btn-new').addEventListener('click', init)


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;
    document.querySelector('#dice1').style.display = 'none';
    document.querySelector('#dice2').style.display = 'none';
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


//something rest