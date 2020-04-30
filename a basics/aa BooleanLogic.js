
// Boolean logic

//if the conditional statement is true then execute this  code, and if false then execute that code.

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

//example:1
let accoundLocked = false;
let userRole = 'user';
if (accoundLocked) {
    console.log('Is accound locked');
} else if (userRole === 'admin') { //equality operator
    console.log('welcome admin');
} else {
    console.log('welcome');
}

// example:2 
let temp = 44;
if (temp <= 32) {
    console.log(' It is freezing outside');
} else if (temp >= 110) {
    console.log('It is hot outside');
} else if (temp != 90 && temp != 80) { //(not) and (and) operator
    console.log('the temp shouldnot be 90 and 80');
} else {
    console.log('go for it it is prety nice outside');
}

// example:3
if (temp >= 60 && temp <= 90) { // and operator

    console.log(' It is pretty nice out')

} else if (temp <= 0 || temp >= 120) {
    console.log('do not go outside ')
} else {
    console.log('eh as your wish')
}

// example:4
let onevage = false
let twovage = false
if (onevage && twovage) {
    console.log('only offer vage dishes')
} else if (onevage || twovage) { //or operator
    console.log('make sure to offer some vage option please')
} else {
    console.log('offer up anything on the meny waitor')
}

/*****************************
* The Ternary Operator and Switch Statements
*/
var firstName = 'John';
var age = 14;

// Ternary operator:--This simply replace one conditional if else statement.
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
//above code can simply replaced by ternery operator.
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// example:--
var year, yearGazibur, yearJunaid;
now = 2018;
ageGazibur = 28;
ageJuaid = 33;
// Math-operators:---
yearJunaidnow = now - ageJuaid;
yearGaziburnow = now - ageGazibur;
console.log(yearGazibur)

console.log(now + 2)
console.log(now * 2)
console.log(now / 10)
// logical operators:--
var GaziburOlder = ageGazibur < ageJuaid;
console.log(GaziburOlder)
//typeOf operators:--
console.log(typeof GaziburOlder)
console.log(typeof ageJuaid)
console.log(typeof 'Gazibur is older than Junaid')
var x;
console.log(typeof x)
 