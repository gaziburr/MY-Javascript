/* let's remember the first coding challange(basics/challange-1.js) where Mark and Gazibur compare their BMI's.let's now implement the same functionallity with object and methods,

1)For each of them create  an object with properties for their full name , Mass, and height
2)Then add a object to calculate the BMI. Save the BMI to the object and also return it from the method.
3) In the end log to console who has the higher BMI together with the name and respectibe BMI's. Don't forget they might have the same BMI.
Remember:- BMI = Mass/height*height 

                              GOOD LUCK Mr Gazibur!*/
var Gazibur = {
    fullName: 'Gazibur Rahman',
    Mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.Mass / (this.height * this.height)
        return this.BMI
    },
    language: 'english'
}

var Junaid = {
    fullName: 'Junaid',
    Mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.Mass / (this.height * this.height);
        return this.BMI
    },
    language: 'english'
}
console.log(Junaid.calcBMI())
console.log(Gazibur.calcBMI(), Junaid.calcBMI());
console.log(Gazibur.BMI, Junaid.BMI);
Junaid.calcBMI();
console.log(Gazibur, Junaid);
if (Gazibur.calcBMI() > Junaid.calcBMI()) {
    console.log(Gazibur.fullName + 'has a higher BMI of' + Junaid.BMI)
} else if (Junaid.calcBMI > Gazibur.calcBMI) {
    console.log(Junaid.fullName + ' has a higher BMI of ' + Junaid.BMI)
} else {
    console.log('They have same BMI')
}