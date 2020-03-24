/*  Remember the tip calculator challenge(challenge - 2) ? Let 's create a more advanced version using everything we learned! 
 This time, Gazibur and his family went to 5 different restaurant.The bills were $124, $48, $268, $180, $42.
 Gazibur likes to tip 20 % of bill when the bill is less than $50, 15 % when the bill is between $50 and $200, and 10 % when the bill is more than $200.
 Implement a tip calculator using objects and loops: --
     1. Create an object with an array
 for the bill values.
 2. Add a methods to calculate the tip.
 3. This methods should include a loop to iterate over all the paid bills and the tip calculations.
 4. As an output create 1) create a new array containing all tips, and 2) An array containing final paid amounts(bill + tip).HINTS: -start with two empty arrays[] as properties and then fill them up in the loop.



 EXTRA AFTER FINISHING: -Junaid family also went to holiday, going to 3 different restaurants.The bill were $77, $175, $110, $45.
 Junaid likes to tip 20 % of the bill when the bill is less than $100, and 10 % when the bill is between $100 and $300.(different then Gazibur)

 5. Implement the same functionality as before, this time using Junaid tiping rules.
 6. Create a

 function(not a method) average of a given array of tips.HINT: -loop over the array, and each iteration store the current sum in a variable(starting from 0).After you have the sum of the array, divide it by the number of elements in it(That 's how you calculate the  average)
         7. Calculate the average tip
         for each family .8.Log to the console that which family paid the highest tips on average.
 */



var Gazibur = {
    fullName: 'Gazibur Rahman',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) {
            // determine the percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15
            } else {
                percentage = .1
            }

            // Add results to the corresponding arrays

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + this.tips[i];

        }
    }
}

Gazibur.calcTips();
console.log(Gazibur)



var Junaid = {
    fullName: 'Junaid',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) {
            // determine the percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }

            // Add results to the corresponding arrays

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + this.tips[i];

        }
    }

}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i]
    }
    return sum / tips.length;
}

Gazibur.calcTips();
Junaid.calcTips();
console.log(Gazibur, Junaid)
Gazibur.Average = calcAverage(Gazibur.tips)
Junaid.Average = calcAverage(Junaid.tips)
console.log(Junaid, Gazibur)

if (Gazibur.Average > Junaid.Average) {
    console.log(Gazibur.fullName + 's family pays higher tips, with an average of $' + Junaid.Average)
} else if (Gazibur.Average < Junaid.Average) {
    console.log(Junaid.fullName + 's family pays higher tips, with an average of $' + Gazibur.Average)
} else {

}