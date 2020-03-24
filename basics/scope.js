// static scope
// global scope
// local scope
let varOne = 'varOne'
if (true) {
    console.log(varOne)
    let varTow = 'varTwo'
    console.log(varTow)
    if (true) {
        let varFour = varFour
    }
}

if (true) {
    let varTree = 'varThree'

}
console.log(varTow)