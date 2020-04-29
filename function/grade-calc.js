
let gradecalc= function (marks, total){
    let lettergrade='';
    percent = (marks /total)*100
    if (percent>90){
        lettergrade='A'
    }
else if (percent > 80 && percent < 90) {
        lettergrade='B'
    }
else if (percent > 70 && percent < 80) { 
            lettergrade='C'
        }
else if (percent >60 && percent < 70) {
        lettergrade='D'
    }else  {
        lettergrade='E'
    }
    return `You got lettergrade  ${lettergrade}  of ${Math.floor(percent)}% Good luck`;//Math.floor = make the number to the nearest integer!
}
let result= gradecalc(75,90)
console.log(result)
var name='gazibur'
/* // students score , total possible  score
// 15/20 ->you got a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59
let gradeCalc = function(score, totalScore) {
    let percent = (score / totalScore) * 100
    let lettergrade = ''
    if (percent >= 90) {
        lettergrade = 'A'
    } else if (percent >= 80) {
        lettergrade = 'B'
    } else if (percent >= 70) {
        lettergrade = 'C'
    } else if (percent >= 60) {
        lettergrade = 'D'
    } else {
        lettergrade = 'F'
    }
    return ` you got a ${lettergrade} grade  of (${percent}%)`

}
let result = gradeCalc(13, 20)
console.log(result) */