let min = 1;
let max = 100;
var readline = require('readline-sync');
let n = readline.questionInt('Enter the number that you think : ');
console.log(n);
while (min <= max) {

    let midvalue = (parseInt((max + min) / 2));
    console.log("Your guess is the : " + midvalue);
    let num = readline.questionInt("Enter 1 if your guessed number is less than : " + midvalue + " or "+ "Enter 2 if your guessed number is grether than : " + midvalue + "\n");
    if (num == 1) {

        max = (midvalue - 1)
    } else if ( num == 2) {

        min = (midvalue + 1)
    } else {

        console.log("Please enter a valid value.");
    }
    
console.log("Your guess is : " +midvalue);
}