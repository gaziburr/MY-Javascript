let greetUser = function() {
    console.log('welcome user!')
}
greetUser()
greetUser()
greetUser()
let square = function(num) {
    let result = num * num
    return result
}
let Value = square(3)
let otherValue = square(10)

console.log(Value)
console.log(otherValue)


// challange area
let FtoC = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 9 / 5
    return celsius
}
let tempOne = FtoC(32)
let tempTwo = FtoC(68)
console.log(tempOne)
console.log(tempTwo)