var readline = require('readline-sync');
let number = readline.questionInt('Enter the number : ');
console.log(number);
let fact =1;
for(let i =1; i<= number; i++) {

    fact = (fact * i);
}
console.log("factorial of " +number +" is "  +fact);