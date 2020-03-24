/* calculate age via a function
       and then calculate age until retirement ,do this is with three people at once*/
function calculateAge(birthYear) {
    return 2020 - birthYear
}
var ageGazibur = calculateAge(1999)
var ageJunaid = calculateAge(2000)
var ageRemim = calculateAge(2003)

function yearuntilRetirement(year, firstname) {
    var age = calculateAge(year)
    var retirement = 65 - age
    if (retirement > 0) {
        console.log(firstname + ' will ' + 'retires in ' + retirement + 'years')
    } else {
        console.log(firstname + ' ' +
            'is alredy retired')
    }
}

yearuntilRetirement(1999, 'Gazibur')
yearuntilRetirement(2000, 'Junaid')
yearuntilRetirement(2003, 'Remim')