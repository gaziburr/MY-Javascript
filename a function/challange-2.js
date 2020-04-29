// CODING CHALLANGE 2  GOOD LUCK Mr Gazibur!
/* John and his family went on a holiday went to three different restauants. The bills were $124,$48,and $168.

To tip waiter a fair amount, John created a tip calculator ( as a function) . He likes to tip 20% of the bill is between $50,and 15% when the bill is below 50$ and $200, and 10% if the bill is more than 200$


In the end would like to have 2 arrays:
1)Containing all three tips (one for each bill)
2)Containing all three final paid amounts(bill + tip)
(NOTE:-To calculate 20% of a value, simply multiply if with 20/100 = .2)
                          GOOD LUCK Mr Gazibur!
*/
let bill = [124, 48, 168]
let tipCalculator = function(bill) {
        if (bill > 50) {
            percentage = .15
        } else if (bill <= 50 && bill >= 200) {
            percentage = .2
        } else if (bill > 200) {
            percentage = .1
        }
        return bill * percentage
    }
    // In the example below multiple called-function in an array, Gazibur rahman!!
var tip = [tipCalculator(bill[0]), tipCalculator(bill[1]), tipCalculator(bill[2])]
console.log(tip)
let TotalfinalValue = [tip[0] + bill[0], tip[1] + bill[1], tip[2] + bill[2]] /* Index of (tip) array in a new array */
console.log(TotalfinalValue);

console.log(tip, TotalfinalValue)
    /* problem solved */