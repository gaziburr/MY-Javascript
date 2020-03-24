// Some data we can work 
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1855 },
    { first: 'Issac', last: 'Newton', year: 1843, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1542 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nocolous', last: 'Copernicus', year: 1475, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];
const people = [
        'Back,Glenn', 'Backer,Carl', 'Becket,Samual', 'Gazibur Rahman', 'Junaid,Mustafa', 'Remim,Aktara', 'Azizul,Hoque', 'Nargis,Sultana', 'Jiaul,Hoque', 'Fulkul,Islam', 'Azaharul,Islam', 'Hifjur,Rahman,', 'Motibur,Rahamn', 'Jiabur,Rahman', 'My heartbeat', 'Nasif, Aktar', 'Mustafa, Kamal', 'Shibly, Rahmat', 'Shakir, Ahmed', 'Rofik,Jamal', 'New,name'
    ]
    // array.prototype.filter()
    // 1. filter the list of inventors  for those who were born in the 1500's
const fifteen = inventors.filter(function(inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true
    }
});
console.log(fifteen);
//We can also always see  this results by   console.log(table) (Interesting...Gazibur ..?)
console.table(fifteen);
const outherfifteen = inventors.filter(inventors => (inventors.year >= 1500 && inventors.year < 1600))
    //this is called arrow (=>) function..| Is it not intersting mr:Gazibur .. ?

// Array.prototype.map()
// Give ua an array of the inventory first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${ inventor.last }`)
console.log(fullNames);
console.table(fullNames); //just checking.. console.table

// Array.prototype.sort()
// Give us an array of the inventors by birthdate, oldest to yongest
const ordered1 = inventors.sort(function(a, b) {

    if (a.year > b.year) {
        return 1
    } else {
        return
    }
});
// This (simple if else statement) is also can be done by ternery-operator:--
// for example
const ordered2 = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
console.table(ordered2)
console.table(ordered1)
    // Array.prototype.reduce()
    //4.How many years did all the Inventors live?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears)
    //5. Sort the inventors by years lived.
const oldest = inventors.sort(function(a, b) {

    const lastGuy = a.passed - b.year;
    const nextGuy = b.year - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest)
    //Sort() Exercise...
    //6. Sort people alphabetically by last name
const alpha = people.sort(function(lastOne, nextOne) {

    const [alast, afirst] = lastOne.split(', ')
    const [blast, bfirst] = nextOne.split(', ')
    return alast > blast ? 1 : -1; //terery operator.. mr: gazibur ..
});
console.table(alpha)

//reduce() exercise..
const data = ['car', 'bus', 'truck', 'car', 'van', 'walk', 'bike', 'car,', 'motor', 'car', 'walk', 'truck', 'van']
const transformation = data.reduce(function(obj, item) {

    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.table(transformation)
console.log(transformation)