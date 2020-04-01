let num = 103.941

console.log(num.toFixed(9))
    // to see more search MDN number in browser
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min //Random Number between 10 and 20
    // 0 to 10
    // challange area 
    // 1 - 5 -true if correct false if not correct
let makeguess = function(guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return guess === randomNum
}
console.log(makeguess(1))