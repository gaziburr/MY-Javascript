///* Variables and datatypes */
var firstName = 'John';
console.log(firstName);//John//

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);//true//

var job;
console.log(job);//undefined//

job = 'Teacher';
console.log(job);//Teacher//

// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
// var if = 23;
/*



console.log(" ")//


/*****************************
* Variable mutation and type coercion
*/

var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);//John 28//

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);//John is a 28 year old teacher. Is he married? false//

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);//John //


console.log(" ")//



/*****************************
* Basic operators
*/

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yeahMark = now - ageMark;

console.log(yearJohn);//1990//

console.log(now + 2);//2020//
console.log(now * 2);////4036
console.log(now / 10);//201.8


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);//true


// typeof operator
console.log(typeof johnOlder);//boolean
console.log(typeof ageJohn);//number
console.log(typeof 'Mark is older tha John');//string
var x;
console.log(typeof x);//undefined



console.log(" ")//


/*****************************
* Operator precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);//true

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);//32

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);//26 26


// More operators
x *= 2;
console.log(x);//52
x += 10;
console.log(x);//62
x--;
console.log(x);//61




console.log(" ")//


/*****************************
* CODING CHALLENGE 1
*/


/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/


var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);//27.309968138370508 24.194608809993426

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);//Is Mark's BMI higher than John's? true





console.log(" ")//


/*****************************
* If / else statements
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');//
} else {
    console.log(firstName + ' will hopefully marry soon :)');////John will hopefully marry soon :)
}



var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');//John is married!
} else {
    console.log(firstName + ' will hopefully marry soon :)');//
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');//Mark's BMI is higher than John's.

} else {
    console.log('John\'s BMI is higher than Marks\'s.');//
}




console.log(" ")//



/*****************************
* Boolean logic
*/

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');//
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');//
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');//John is a young man.
} else {
    console.log(firstName + ' is a man.');//
}



console.log(" ")//

/*****************************
* The Ternary Operator and Switch Statements
*/

var firstName = 'John';
var age = 14;
// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');//John drinks juice.

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);//juice

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');//John teaches kids how to code.
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');//
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');//
        break;
    default:
        console.log(firstName + ' does something else.');//
}

age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');//
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');//
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');//
        break;
    default:
        console.log(firstName + ' is a man.');//John is a man.
}

console.log(" ")//



/*****************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');//Variable is defined
} else {
    console.log('Variable has NOT been defined');//
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');//
}





/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)//
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/





var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);//137.33333333333334 115.33333333333333 112

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');//John's team wins with 137.33333333333334 points
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');//
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');//
} else {
    console.log('There is a draw');//
}


if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');//John's team wins with 137.33333333333334 points
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');//
} else {
    console.log('There is a draw');//
}





console.log(" ")//
/*****************************
* Functions
*/

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);//26 68 47


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');//John retires in 39 years.
    } else {
        console.log(firstName + ' is already retired.')//Mike is already retired.
    }

}

yearsUntilRetirement(1990, 'John');//  John retires in 39 years.
yearsUntilRetirement(1948, 'Mike');// Mike is already retired.
yearsUntilRetirement(1969, 'Jane');// Jane retires in 18 years.



console.log(" ")//
/*****************************
* Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));//John teaches kids how to code
console.log(whatDoYouDo('designer', 'Jane'));//Jane designs beautiful websites
console.log(whatDoYouDo('retired', 'Mark'));//Mark does something else




console.log(" ")//

/*****************************
* Arrays
*/

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);//Jane
console.log(names.length);//3

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);//Array(4)0: "John"1: "Ben"2: "Jane"3: "Mary"length: 4__proto__: Array(0)

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);//Array(4)0: "John"1: "Smith"2: 19903: "designer"length: 4__proto__: Array(0)

john.pop();
john.pop();
john.shift();
console.log(john);//Array(4)0: "John"1: "Smith"2: 19903: "designer"length: 4__proto__: Array(0)

console.log(john.indexOf(23));//-1

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);//John IS a designer





console.log(" ")//
/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/




function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
tipCalculator(bills[1]),
tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
bills[1] + tips[1],
bills[2] + tips[2]];

console.log(tips, finalValues);//Array(3)0: 18.5999999999999981: 9.6000000000000012: 26.8length: 3__proto__: Array(0) Array(3)0: 142.61: 57.62: 294.8length: 3__proto__: Array(0)





console.log(" ")//
/*****************************
* Objects and properties
*/

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);//John
console.log(john['lastName']);//Smith
var x = 'birthYear';
console.log(john[x]);//1990

john.job = 'designer';
john['isMarried'] = true;
console.log(john);/* Object
firstName: "John"
lastName: "Smith"
birthYear: 1990
family: (4) ["Jane", "Mark", "Bob", "Emily"]
job: "designer"
isMarried: true
__proto__: Object */

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);//{firstName: "Jane", birthYear: 1969, lastName: "Smith"}




console.log(" ")//

/*****************************
* Objects and methods
*/

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function () {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);//{firstName: "John", lastName: "Smith", birthYear: 1992, family: Array(4), job: "teacher", …}firstName: "John"lastName: "Smith"birthYear: 1992family: (4) ["Jane", "Mark", "Bob", "Emily"]job: "teacher"isMarried: falsecalcAge: ƒ ()age: 26__proto__: Object





console.log(" ")//

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.//

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/


var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);//
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);//
} else {
    console.log('They have the same BMI');//
}





console.log("")//

/*****************************
* Loops and iteration
*/


// for loop
for (var i = 1; i <= 20; i += 2) {
    console.log(i);//1 to 19
}

// i = 0, 0 < 10 true, log i to console, i++//
// i = 1, 1 < 10 true, log i to the console, i++//
//...
// i = 9, 9 < 10 true, log i to the console, i++//
// i = 10, 10 < 10 FALSE, exit the loop!


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);//John Smith 1990 designer false blue
}

// While loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);//'John Smith 1990 designer false blue
    i++;
}


// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);//John Smith  designer   blue
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);//John Smith 
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);// blue false designer 1990 Smith John
}




console.log(" ")//


/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/


var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);/* {fullName: "John Smith", bills: Array(5), tips: Array(5), finalValues: Array(5), calcTips: ƒ, …}
fullName: "John Smith"bills: (5) [124, 48, 268, 180, 42]calcTips: ƒ ()tips: (5) [18.599999999999998, 9.600000000000001, 26.8, 27, 8.4]finalValues: (5) [142.6, 57.6, 294.8, 207, 50.4]average: 18.080000000000002__proto__: Object  */
if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);//
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);//Mark Miller's family pays higher tips, with an average of $38.5375
}

console.log(" ")//

/////////////////////////////
// Lecture: Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);//26 47 68
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();//26
jane.calculateAge();//47
mark.calculateAge();//68

console.log(john.lastName);//Smith
console.log(jane.lastName);//Smith
console.log(mark.lastName);//Smith


console.log(" ")//
/////////////////////////////
// Lecture: Object.create

var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);//26
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';
console.log(john.calculateAge())//undefined

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
console.log(" ")//




/////////////////////////////
// Lecture: Primitives vs objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);//46
console.log(b);//23



// Objects
var obj3 = {
    name: 'John',
    age: 26
};
var obj2 = obj3;
obj3.age = 30;
console.log(obj3.age);//30
console.log(obj2.age);//30

// Functions
var age = 27;
var obj3 = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj3);

console.log(age);//27
console.log(obj3.city);//San Francisco
console.log(" ")//

var years = [1990, 1965, 1937, 2005, 1998, 1994];
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))
    }
    return arrRes;
}
function calculateAge(el) {
    return 2016 - el //you can suppose anything you want(el)
}
var ages = arrayCalc(years, calculateAge)
console.log(ages)//(6) [26, 51, 79, 11, 18, 22]


function isFullAges(el) {
    return el >= 18
}
var FullAge = arrayCalc(years, isFullAges)
console.log(FullAge)//(6) [true, true, true, true, true, true]



function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el))
    } else {
        return -1;
    }
}

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates)//(6) [189, 173, 154, -1, 195, 192]

console.log(" ")//
/////////////////////////////
// Lecture: Functions returning functions

function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');/* What subject do you teach, John? ,
            John, can you please explain what UX design is? ,
            jane, can you please explain what UX design is? ,
            Mark, can you please explain what UX design is? ,
            */
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');/* //What subject do you teach, Mark?,          What subject do you teach, Mark? */
        } else {
            console.log('Hello ' + name + ', what do you do?');//
        }
    }
}

interviewQuestion('teacher')('John');
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');
interviewQuestion('teacher')('John');
interviewQuestion('teacher')('Mark');


console.log(" ")//

/////////////////////////////
// Lecture: IIFE

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);//false
}
game();


(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);//false
})();

//console.log(score);//error


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);//true
})(5);



console.log(" ")//

/////////////////////////////
// Lecture: Closures

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);//
        /* 39 years left until retirement.
        40 years left until retirement. 
        41 years left until retirement. */
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

//retirement(66)(1990);




console.log(" ")//


/////////////////////////////
// Lecture: Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');/* //Good morning, Ladies and gentlemen! I'm John, I'm a teacher and I'm 26 years old.
            Good afternoon, Ladies and gentlemen! I'm Emily, I'm a designer and I'm 35 years old. */
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');/* 
            Hey! What's up? I'm Emily, I'm a designer and I'm 35 years old. Have a nice afternoon. //Hey! What's up? I'm John, I'm a teacher and I'm 26 years old. Have a nice night.
            Hey! What's up? I'm John, I'm a teacher and I'm 26 years old. Have a nice morning. */
        }
    }
};
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

console.log(" ")//
/////////////////////////////////
// Lecture: let and const


// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);//Jane Miller

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller';
console.log(name6);//Jane Smith


// ES5
function driversLicence5(passedTest) {

    if (passedTest) {
        console.log(firstName);//undefined
        var firstName = 'John';
        var yearOfBirth = 1990;
    }


    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');//
}

driversLicence5(true);


// ES6
function driversLicence6(passedTest) {

    //console.log(firstName);//
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');//
}

driversLicence6(true);



var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);//0 to 4
}

console.log(i);//5


console.log(" ")//


/////////////////////////////////
// Lecture: Blocks and IIFEs


// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);//
console.log(c);//3


// ES5
(function () {
    var c = 3;
})();

//console.log(c);//



console.log(" ")//

/////////////////////////////////
// Lecture: Strings


let firstname1 = 'John';
let lastname1 = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstname1 + ' ' + lastname1 + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');//This is John Smith. He was born in 1990. Today, he is 26 years old.

// ES6
console.log(`This is ${firstname1} ${lastname1}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);//This is John Smith. He was born in 1990. Today, he is 26 years old.


const n = `${firstname1} ${lastname1}`;
console.log(n.startsWith('j'));//false
console.log(n.endsWith('Sm'));//false
console.log(n.includes('oh'));//true
console.log(`${firstname1} `.repeat(5));//John John John John John 


console.log(" ")//

/////////////////////////////////
// Lecture: Arrow functions


const years1 = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years1.map(function (el) {
    return 2016 - el;
});
console.log(ages5);//(4) [26, 51, 34, 79]


// ES6
let ages6 = years1.map(el => 2016 - el);
console.log(ages6);//(4) [26, 51, 34, 79]

ages6 = years1.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);//(4) ["Age element 1: 26.", "Age element 2: 51.", "Age element 3: 34.", "Age element 4: 79."]

ages6 = years1.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);//(4) ["Age element 1: 30.", "Age element 2: 55.", "Age element 3: 38.", "Age element 4: 83."]


console.log(" ")//

/////////////////////////////////
// Lecture: Arrow functions 2


// ES5
/* var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

       var self = this; document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();


// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();


const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();


function Person(name) {
    this.name = name;
} */

// ES5
Person.prototype.myFriends5 = function (friends) {

    var arr = friends.map(function (el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);//(3) ["John is friends with Bob", "John is friends with Jane", "John is friends with Mark"]
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function (friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);//(3) ["Mike is friends with Bob", "Mike is friends with Jane", "Mike is friends with Mark"]
}

new Person('Mike').myFriends6(friends);


console.log(" ")//



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
const {FirstName: A, LastName: B} = OBJ;
console.log(A);//Gaziburr
console.log(B);// Rahman
function calcAgeRetirement(year) {
    const Age = new Date().getFullYear() - year;
    return [Age, 65 - Age];
}
const [age2, Retirement] = calcAgeRetirement(1990);
console.log(age2);//30
console.log(Retirement);//35
  

console.log(" ")//

/////////////////////////////////
// Lecture: Arrays


const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


//ES5
for (var i = 0; i < boxesArr5.length; i++) {

    if (boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';

}


//ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}


//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (cur) {
    return cur >= 18;
});
console.log(full);//(6) [false, false, false, true, false, false]

console.log(full.indexOf(true));//3
console.log(ages[full.indexOf(true)]);//21


//ES6
console.log(ages.findIndex(cur => cur >= 18));//3
console.log(ages.find(cur => cur >= 18));//21



console.log(" ")//



/////////////////////////////////
// Lecture: Spread operator


function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);//81

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);//81

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);//81


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);//(7) ["John", "Jane", "Mark", "Lily", "Mary", "Bob", "Ann"]


const h = document.querySelector('h1');
const boxes1 = document.querySelectorAll('.box');
const all = [h, ...boxes1];

// Array.from(all).forEach(cur => cur.style.color = 'purple');

console.log(" ")//



/////////////////////////////////
// Lecture: Rest parameters


//ES5
function isFullAge5() {
    //console.log(arguments);//
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= 18);//
    })
}


//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));//
}

isFullAge6(1990, 1999, 1965, 2016, 1987);


//ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= limit);//false
    })
}


//isFullAge5(16, 1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));//false true false true
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);





console.log(" ")//

/////////////////////////////////
// Lecture: Default parameters


// ES5
function SmithPerson(firstName2, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;

    this.firstName2 = firstName2;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


//ES6
function SmithPerson(firstName2, yearOfBirth, lastName2 = 'Smith', nationality = 'american') {
    this.firstName2 = firstName2;
    this.lastName2 = lastName2;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

console.log(" ")//



/////////////////////////////////
// Lecture: Maps

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));//What is the official name of the latest major JavaScript version?
//console.log(question.size);//


if (question.has(4)) {
    //question.delete(4);
    //console.log('Answer 4 is here')//
}

//question.clear();


//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));//


for (let [key, value] of question.entries()) {
    if (typeof (key) === 'number') {
        console.log(`Answer ${key}: ${value}`);//Answer 1: ES5    Answer 2: ES6    Answer 3: ES2015    Answer 4: ES7
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));//Wrong, please try again!

console.log(" ")//



/////////////////////////////////
// Lecture: Classes


//ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);//
}

var john5 = new Person5('John', 1990, 'teacher');

//ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);//
    }

    static greeting() {
        console.log('Hey there!');//Hey there!
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();

console.log(" ")//



/////////////////////////////////
// Lecture: Classes and subclasses

//ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);//30
}

var Athlete5 = function (name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);


Athlete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);//11
}


var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


//ES6
class person7 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);//30
    }
}

class Athlete6 extends person7 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);//11
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();

console.log(" ")//

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);/* //Green Park has a tree density of 1075 trees per square km.
        National Park has a tree density of 1221.0344827586207 trees per square km.
        Oak Park has a tree density of 2372.5 trees per square km. */
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);/* Ocean Avenue, build in 1999, is a big street.
        1718 Evergreen Street, build in 2008, is a small street.
        1718 4th Street, build in 2015, is a normal street.
        1718 Sunset Boulevard, build in 1982, is a huge street. */
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
new Park('National Park', 1894, 2.9, 3541),
new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
new Street('Evergreen Street', 2008, 2.7, 2),
new Street('4th Street', 2015, 0.8),
new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];

}


function reportParks(p) {

    console.log('-----PARKS REPORT-----');//-----PARKS REPORT-----

    // Density
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);//Our 3 parks have an average of 75.33333333333333 years.

    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);//National Park has more than 1000 trees.

}


function reportStreets(s) {

    console.log('-----STREETS REPORT-----');//-----STREETS REPORT-----

    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);//Our 4 streets have a total length of 7.1000000000000005 km, with an average of 1.7750000000000001 km.

    // CLassify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);


for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);//
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);//
};