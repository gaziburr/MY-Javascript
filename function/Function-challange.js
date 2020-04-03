////////////////////////////////////////////////////
//Coding Challange // All We have just learned  already. Mr Gazibur//
/* 
-- Let's build a fun quiz game in the console!--
1. Build a function constructor called Question to describe a question . A question Should include :
a) question itself 
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array , object, etc.)
c) correct answer (( I would use a number for this))
2. create a couple of question using the function constructor
3.Store them all inside an array
4.Select one random question and log it onthe console, together with the possible answer(each question should have a number )(Hint: Write a method for the question objects for this task.)
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether theanswer is correct to nor (Hint : Write a another method for this).
7. Suppose this code ould be a plugin for other programmers to use in their code. So made sure that all your score is private  and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;

        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }

        this.displayScore(sc);
    }
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'],
        0);

    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'],
        2);

    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'],
        2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();