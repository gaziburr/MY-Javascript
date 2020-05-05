/* loops and iteration */
// For loops:--
for (var i = 0; i < 19; i++) {
    console.log(i)
} /* Rules */
// i = 0, 0 < 20 true, log i to console, i++
//i = 1 ,1 < 20 true, log i to the console, i++
// ...
//i = 19 ,19 < 20 true, log i to the console, i++
//i = 20 ,20 < 20 FALSE, exit the loop!
var Array = ['Gazibur', 'Junaid', 'Azizul', 'Remim', 'Iqbal'];
// while loops
var i = 0;
while (i < Array.length) {
    console.log(Array[i])
    i++
}


//continue and break statements
var newArray = ['Gazibur', 'Shamim', 'Junaid', 209, false, 'Azizul', 'Remim', 980, 432, 232, true, 'Iqbal', 8989, 'Jayeda']
    // this is how continue works.
for (var i = 0; i < newArray.length; i++) {
    if (typeof newArray[i] !== 'string') continue; /*  In this line, I can use all datatypes one by one to see the looping over different datatypes */

    console.log(newArray[i])
}
// this is how break works.
for (var i = 0; i < newArray.length; i++) {
    if (typeof newArray[i] !== 'string') break; /*   */
    console.log(newArray[i])
}
// looping backward below
for (var i = newArray.length - 1; i >= 0; i--) {
    console.log(newArray[i])
}


// index number =length-1   (in an array)  Remember Mr Gazibur Rahman:)


/////////////////////////////////
// Lecture: Destructuring


// ES5
var Gazi = ['Gaziburr', 26];
//var name = Gazi[0];
//var age = Gazi[1];
// ES6
const [Name, Age] = ['Gaziburr', 26];
console.log(Name); //Gaziburr
console.log(Age);//26
const OBJ = {
    FirstName: 'Gaziburr',
    LastName: 'Rahman'
};
const {FirstName, LastName} = OBJ;
console.log(FirstName); //Gaziburr
console.log(LastName);//Rahman
const {FirstName: a, LastName: b} = OBJ;
console.log(a);//Gaziburr
console.log(b);// Rahman
function calcAgeRetirement(year) {
    const Age = new Date().getFullYear() - year;
    return [Age, 65 - Age];
}
const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);//30
console.log(retirement);//35
