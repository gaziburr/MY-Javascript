var Gazibur = {
    firstName: "Gazibur",
    lastName: " Rahman",
    birthYear: 1999,
    family: ["Mofiz uddin", "Johura maya", "jayeda", "Asmina", "Halima", "Jiabur", "Motibur", "Hifjur", "Azizul", "Gazibur "],
    familyBirthYear: [1959, 1967, 1982, 1985, 1987, 1986, 1990, 1992, 1995, 1999],
    familyAges: [], //This array is filled by callback function(function as an arguement) below
    pensiontime: [],
    Job: "student",
    isMarried: false
};
// call back function
function age(arr, fn) {
    var ages = Gazibur.familyAges;
    for (var i = 0; i < arr.length; i++) {
        ages.push(fn(arr[i]));
    }
    return ages;
}

function familyage(el) {
    var age = 2020 - el;
    return age;
}

function age(arr, fn) {
    var pension = Gazibur.pensiontime;
    for (var i = 0; i < arr.length; i++) {
        pension.push(fn(arr[i]));
    }
    return pension;
}

function pension(el) {
    var pensionyear = 60 - el;
    return pensionyear;
}
age(Gazibur.familyBirthYear, familyage);
age(Gazibur.pensiontime, pension);
console.table(Gazibur);