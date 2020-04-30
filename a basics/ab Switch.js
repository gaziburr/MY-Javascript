
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

// Switch statement :This simply replace multiple conditional if else statement.
var Name = 'gazibur rahman'
var job = 'driver'
switch (job) {
    case 'teacher':
        console.log(Name + 'teaches child how to code.');
        break;
    case 'driver':
        console.log(Name + 'teaches child how to drive.');
        break;
    case 'designer':
        console.log(Name + 'teaches child how to design.');
        break;
    case 'actor':
        console.log(Name + 'teaches child how to acting.');
        break;
    default:
        console.log(Name + 'teaches child something else.');

}
// we also execute same code by multiple cases ,here is the same example below**
var passion = 'instructor'
switch (passion) {
    case 'teacher':
    case 'instructor':
        console.log(Name + 'teaches child how to code & instructing.');
        break;
    case 'driver':
        console.log(Name + 'teaches child how to drive.');
        break;
    case 'designer':
        console.log(Name + 'teaches child how to design.');
        break;
    case 'actor':
        console.log(Name + 'teaches child how to acting.');
        break;
    default:
        console.log(Name + 'teaches child something else.');

}
// This also can be done by if ,else,or.and statements but this would some neater code: I am gazibur rahman ha ha ha ah......
// below  if the value of age variable is a number then the parameter of switch is must be boolean!
var age
switch (true) {
    case age < 13:
        console.log(name + 'is a boy.')
        break;
    case age < 13 && age > 30:
        console.log(name + 'is a teenager.')
        break;
    case age < 20 && age > 30:
        console.log(name + 'is a young man.')
        break;
    default:
        console.log(name + 'is a man. ')

}