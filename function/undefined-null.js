// undefined for variable
// when the variable is declared but is not defined then the variable is called undefined / * /
let name = 'jen'
if (name === undefined) {
    console.log('please provide a name')
} else {
    console.log(name)
}
// undefined for function arguements
let square = function(num) {
    console.log(num)
}
let result = square()
console.log(result)
    //  null as assigned value
let age = 27
age = null //nothing exist//
console.log(age)
var one
console.log(one)