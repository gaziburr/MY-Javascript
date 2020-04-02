//Here is  a normal function 
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
};
game();

//Here is how IIFE look like, mr Gazibur Rahman//
(function() {
    var score = Math.random() * 10;
    console.log(score >= 5)
})();




// IIFE Also can hold a parameter, Mr Gazibur Rahman//
(function(Goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - Goodluck)
})(5);