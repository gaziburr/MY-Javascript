// global scope
let FtoC = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 9 / 5

    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius
}

let tempOne = FtoC(32)
let tempTwo = FtoC(68)

console.log(tempOne)
console.log(tempTwo)