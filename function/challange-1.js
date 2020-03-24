// Coding challange-1
/* Gazibur and mike play basketball in different teams.In the latest 3 games ,gazibur's team scored 89  120  103 points.


1)Calculate the average score of each team ?
2)Decide which teams wins in the average (highest average scores), and print the winner to the console. Also include average score in the output .
3)Then change the score to show different winners. Don't forget to take into account might be a draw (the same as the average score)
4) EXTRA:- Azizul also play basketball, and her team scored 97 134 and 105 points . Like before  log the average winner to the console. Hint:-you will need && operator to take the decition. If you can't solve this problem  just watch the solution, it's no problem :)
                              GOOD LUCK Mr Gazibur!
*/
var scoreGazibur = (110 + 120 + 103) / 3;
var scoreJunaid = (116 + 114 + 123) / 3;
var scoreAzizul = (97 + 134 + 105) / 3;
console.log(scoreGazibur, scoreJunaid, scoreAzizul);
if (scoreGazibur > scoreJunaid && scoreGazibur > scoreAzizul) {
    console.log("Gazibur/s team wins with " + scoreGazibur + ' points.')
} else if (scoreJunaid > scoreGazibur && scoreJunaid > scoreAzizul) {
    console.log('Junaid/s team wins with ' + scoreJunaid + 'points.')
} else if (scoreAzizul > scoreGazibur && scoreAzizul > scoreJunaid) {
    console.log('Azizul/s team wins with ' + scoreAzizul + 'points.')
} else {
    console.log('There is draw')
}
/* if (scoreGazibur > scoreJunaid) {
    console.log("Gazibur/s team wins with " + scoreGazibur + ' points.')
} else if (scoreJunaid > scoreGazibur) {
    console.log('Junaid/s team wins with ' + scoreJunaid + 'points.')
} else {
    console.log('There is draw')
} */