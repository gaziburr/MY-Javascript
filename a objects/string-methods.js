let name = 'gazibur rahman'
    // length property
console.log(name.length)
    // convert to upper case
console.log(name.toUpperCase())
    // convert to lower case
console.log(name.toLowerCase())
    // includes methods
let password = 'abc123asdf098'
console.log(password.includes('123'))
    // Trim 
console.log(name.trim())
    // challange area 
let isValidPassword = function(password) {
    return (password.length > 8 && !password.includes('password'))
}
console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^&'));
console.log(isValidPassword('asdfpasdfpoipassword'))