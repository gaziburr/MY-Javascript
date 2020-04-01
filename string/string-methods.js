// string methods
var stringOne = "free code camp is the best place to learn"
var stringTwo = "front end and back development"
    // 1. charAt();
console.log(stringOne.charAt(1));
// charCodeAt
console.log(stringOne.charCodeAt(1));
// concat
console.log(stringOne.concat(stringTwo));
// startsWith()
console.log(stringOne.startsWith('free'))
    // endsWith
console.log(stringOne.endsWith("learn"));
// fromCharCode
console.log(String.fromCharCode(114))
    // includes
console.log(stringTwo.includes('end'));
// lastIndexOf
console.log(stringTwo.lastIndexOf('end'));
// match()
console.log(stringTwo.match(/end/g));
// repeat()
console.log(stringOne.repeat(3));
// replace()
console.log(stringTwo.replace(/end/g, "end"));
// search()
console.log(stringTwo.search('end'));
// slice()
console.log(stringTwo.slice(2, 4));
// split()
// hellow how are you mr gazibur rahman
console.log(stringOne.split(' '));
// substr()
console.log(stringTwo.substr(2, 4));
// substring()
console.log(stringTwo.substring(2, 4));
// toLowerCase()
console.log(stringTwo.toLowerCase());
// toUpperCase()
console.log(stringTwo.toUpperCase());
// trim()
var stringThree = "Subscribe now!";
console.log(stringThree.trim());