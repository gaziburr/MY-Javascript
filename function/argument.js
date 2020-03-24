// multiple arguments
let add = function(a, b, c, ) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)
    // default argument
let getScoreText = function(name = 'Anonumus', score = 0) {
    return 'Name:' + name + '-score' + score
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)
    // challange area

let gettip = function(total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent


    return `A ${percent}% tip on ${total} would be ${tip}`
        // "``" and the '{}' is a Symbol for  injecting  some sort of values
}
let tip = gettip(50)
console.log(tip)