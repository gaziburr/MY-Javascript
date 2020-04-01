// this is called function constructor below .. gazibur....
var person = function(name, yearOfBirth, job, calculateRetired) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
person.prototype.calculateAge = function(name, yearOfBirth, job, calculateRetired) {
    var age = 2020 - this.yearOfBirth;
    var AgeUntilRetired = 65 - age
    console.log(2020 - this.yearOfBirth, AgeUntilRetired)
}
var Gazibur = new person('Gazibur', 1999, 'teacher', 65);
var Hifjur = new person('Hifjur', 1989, 'designer', 65);
var Motibur = new person('Motibur', 1988, 'retired', 65);
//None of object have the calculateAge methods really attached to them but still they are going to be able to use it(access) it.because its in their prototype...mr gazibur //
Gazibur.calculateAge();
Hifjur.calculateAge()
Motibur.calculateAge();
//Now three object has all the property of function constructor(person), because of their prototype, lets prove it:-
var lastname = person.prototype.lastName = 'Rahman'; //let the last name of three man is rahman Then--
console.log(Gazibur.lastName)
console.log(Gazibur.lastName)
console.log(Motibur.lastName)
    //lastname property is inherited to three of the objects!..because of their prototype
    //we already know that calling function creates a new cxcecution context.above this variable