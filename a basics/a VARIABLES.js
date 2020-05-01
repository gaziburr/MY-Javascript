//VARIABLES and TYPE COERCION:--


var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
//var if = 23;




/*****************************
* Variable mutation and type coercion
*/

var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
/* // undefined for variable
// when the variable is declared but is not defined then the variable is called undefined / * /
let name = 'jen'
if (name === undefined) {
    console.log('please provide a name')
} else {
    console.log(name)
}
// undefined for function arguements
let square = function(num) {
    console.log(num)
}
let result = square()
console.log(result)
    //  null as assigned value
let age = 27
age = null //nothing exist//
console.log(age)
var one
console.log(one) */



///boolean value
let temp = 'one'
if (temp = false) {
    console.log('it is freesing outside!')
} else {
    console.log('it is way to hot outside!')

}
// challange area 
let age1 = 6
if (age1 <= 7) {
    console.log('you will get a child discount')
}


/*****************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}



