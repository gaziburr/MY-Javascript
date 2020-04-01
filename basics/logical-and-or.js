let temp = 55
if (temp >= 60 && temp <= 90) { // and operator

    console.log(' It is pretty nice out')

} else if (temp <= 0 || temp >= 120) {
    console.log('do not go outside ')
} else {
    console.log('eh as your wish')
}
// challange area
let onevage = false
let twovage = false
if (onevage && twovage) {
    console.log('only offer vage dishes')
} else if (onevage || twovage) { //or operator
    console.log('make sure to offer some vage option please')
} else {
    console.log('offer up anything on the meny waitor')
}