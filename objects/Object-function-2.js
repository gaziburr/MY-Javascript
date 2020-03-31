var Gazibur = {
    firstName: "Gazibur",
    lastName: " Rahman",
    birthYear: 1999,
    family: ["Mofiz uddin", "Johura maya", "jayeda", "Asmina", "Halima", "Jiabur", "Motibur", "Hifjur", "Azizul", "Gazibur "],
    familyBirthYear: [1959, 1967, 1982, 1985, 1987, 1986, 1990, 1992, 1995, 1999],
    familyAges: [], //This array is filled by callback function(function as an arguement) below
    pensiontime: [],
    Job: "student",
    isMarried: []
};
// call back function

function age(arr, fn) {
    let ages = Gazibur.familyAges;
    for (var i = 0; i < arr.length; i++) {
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
    for (var i = 0; i < arr.length; i++) {
        pensionAge.push(fn(arr[i]));
    }
    return pensionAge;
}

function pension(index) {
    var cal = 60 - index;
    return cal;
}
var ages = Gazibur.familyAges
pensionyear(ages, pension);
console.log(Gazibur.pensiontime)
console.table(Gazibur)