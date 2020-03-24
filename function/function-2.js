/* function statement and expressions */
// function declaration
// function whatDoYouDo(job, firstName) {}

// function expressions
/* basicaly all function recives data ,and does something with the data and gives back something different,,,,,,always remember this     ! */
function whatDoYouDo(job, Name) {
    switch (job) {
        case 'teacher':
            return Name + 'teaches child how to code & instructing.';
            break;
        case 'driver':
            return Name + 'teaches child how to drive';
            break;
        case 'fish-seller':
            return Name + 'teaches child how to sell fish';
            break;
        case 'designer':
            return Name + 'teaches child how to design.';
            break;
        case 'actor':
            return Name + 'teaches child how to acting.';
            break;
        default:
            return Name + 'teaches child something else.';
    }

}
console.log(whatDoYouDo('teacher', ' Gazibur '));
console.log(whatDoYouDo('fish-seller', ' Hifjur '));
console.log(whatDoYouDo('actor', ' Junaid '));
console.log(whatDoYouDo('retired', ' Remim '));
console.log(whatDoYouDo('actor', ' Azizul '));