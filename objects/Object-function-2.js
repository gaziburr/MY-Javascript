var Gazibur = {
    family: ["Mofiz uddin", "Johura maya", "jayeda", "Asmina", "Halima", "Jiabur", "Motibur", "Hifjur", "Azizul", "Gazibur "],
    familyBirthYear: [1959, 1967, 1982, 1985, 1987, 1986, 1990, 1992, 1995, 1999],
    familyAges: [], //This array is filled by callback function(function as an arguement) below  by Gazibur .
    pensiontime: [], //This array is filled by callback function(function as an arguement) below  by Gazibur .
    isMarried: [], //This array is filled by callback function(function as an arguement) below  by Gazibur .
    Job: "student"
};
// call back functions

function age(arr, fn) {
    let ages = Gazibur.familyAges;
    for (var i = 0; i < arr.length; i++) { //looping over an array(arr)
        ages.push(fn(arr[i]));
    }
    return ages;
}

function familyage(el) {
    var age = 2020 - el;
    return age;
}
var bornyear = Gazibur.familyBirthYear
age(bornyear, familyage);

function pensionyear(arr, fn) {
    var pensionAge = Gazibur.pensiontime
    for (var i = 0; i < arr.length; i++) { //looping
        pensionAge.push(fn(arr[i]));
    }
    return pensionAge;
}

function pension(index) {
    var cal = 60 - index;
    return cal;
}
var isMarried = Gazibur.isMarried

function Married(arr, fn) {
    for (var i = 0; i < ages.length; i++) {
        isMarried.push(fn(arr[i]))
    }
}

function Married(arr, fn) {
    for (var i = 0; i < ages.length; i++) {
        isMarried.push(fn(arr[i]))
    }
}

function name(el) {
    if (el >= 25) {
        return true
    } else {
        return false
    }
}
var ages = Gazibur.familyAges
pensionyear(ages, pension);
Married(ages, name)
console.log(Gazibur.isMarried)
console.log(Gazibur.pensiontime)
console.log(ages)
console.table(Gazibur)
    //HAVING FUN MR:GAZIBUR !!!!!