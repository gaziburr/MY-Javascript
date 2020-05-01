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
var ages = arraycalc(years, calculateAge)
    //we dont want to call a funtion here but want to call later by another arraycalc function and thats why its(calculateAge) called a callback function,aggain because of  its called later mr gazibur .
function isFullAges(el) {
    return el >= 18
}
var FullAge = arraycalc(years, isFullAges)
console.table(ages)
console.table(FullAge) //both are same
    /* Our arrcalc funtion loops through the years array five temes and five times the calculateAge function  was called(returned) and push the result right into the arrRes empty array*/
function maxheartrate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el))
    } else {
        return -1;
    }
}
var rates = arraycalc(ages, maxheartrate)
console.table(rates)