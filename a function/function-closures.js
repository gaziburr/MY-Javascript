function retirement(retirementAge) {
    var a = 'years left until the retirement.';
    return function(yearsOfBirth) {
        var age = 2020 - yearsOfBirth;
        console.log(retirementAge - age + a)
    }
}
// We can create  three different function  for countries with different retirementAges and use this function(retirement) over and over again;/ Mr Gazibur Rahman  haha !! 
var retirementUs = retirement(66)
var retirementIndia = retirement(60)
var retirementGermany = retirement(65)
retirementUs(1990)
retirementGermany(1995)
retirementIceland(1999)
    // closures summary:
    //An inner function has aloways access to the variables and parameters of its outer function, even ofter the outer function is returned.
    //Previous Example can be done by this Function closuresfunction interviewQuestion(job) {
return function(name) {
    if (job === 'designer') {
        console.log(name + ' , can you please explain that what UX design is?');
    } else if (job === 'teacher') {
        console.log('hello what subject do you teach mr:' + name + '?')
    } else {
        console.log('hello' + name + 'what do you do?')
    }
}
var teacherQuestion = interviewQuestion('teacher')
var designerQuestion = interviewQuestion('designer')
teacherQuestion('Gazibur')
designerQuestion('Junaid')
designerQuestion('nargis')
interviewQuestion('teacher')('nargis')