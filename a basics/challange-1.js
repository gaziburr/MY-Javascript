/* Junaid and Gazibur are trying to compare their BMI(Body Mass Index),which is calculated using the formula:BMI = mass/(height*height).(mass in kg and height in meter.)

1)Store Junaid and Gazibur mass and height in variables.
2)Calculate both their BMI,s
3)Create a boolean variable containg information whether Junaid has higher BMI than Gazibur.
4)Print a string to the console containing variable from step 3.(Something like "Is Junaid's BMI higher than Gazibur's true)."
                        GOOD LUCK*/
var MassJunaid = 46;
var HeightJunaid = 1.69;
var MassGazibur = 50;
var heightGazibur = 1.95;
var BMIJunaid = MassJunaid / (HeightJunaid * HeightJunaid);
var BMIGazibur = MassGazibur / (heightGazibur * heightGazibur)
console.log(BMIGazibur, BMIJunaid)
var JunaidHigherBMI = BMIJunaid > BMIGazibur;
console.log('Is Junaid BMI greater than Gazibur?  ' + JunaidHigherBMI)