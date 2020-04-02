var Gazibur = { //normal objects
    name: 'Gazibur',
    age: 21,
    job: 'teacher',
    presentation: function(style, timeOFday) { //function with parameter
        if (style === 'formal') {
            console.log(`good ${timeOFday} ladies and gentleman! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old`);
        } else {
            console.log(`Hey whatsApp,I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old Have a nice ${timeOFday}`)
        }
    }
}
var emily = {
    name: 'emily',
    age: 35,
    job: 'designer'
}
Gazibur.presentation('Formal', 'Morning')
Gazibur.presentation.call(emily, 'Formal', 'Morning') //Here is call methods  change the 'this' variable of Gazibur.presentation function to  emily . and that is the power of call methods. Gazibur ///
var Gaziburfriendly = Gazibur.presentation.bind(Gazibur, 'frindly');
Gaziburfriendly('Morning')
Gaziburfriendly('Night')
var emilyFormal = Gazibur.presentation.bind(emily, 'formal');
emilyFormal('Afternoon')


//HERE is another Exapmle:-- Gazibur
var years = [1990, 1965, 1937, 2005, 1998, 1994];

function arraycalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el //you can suppose anything you want(el)
}

function isFullAges(limit, el) {
    return el >= limit
}
var ages = arraycalc(years, calculateAge);
var FullJapan = arraycalc(ages, isFullAges.bind(this, 30))
console.log
console.log(FullJapan)
console.log(ages)