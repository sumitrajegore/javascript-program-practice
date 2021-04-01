var readline = require('readline-sync');
let number = readline.questionInt('Enter the number : ');
console.log(number);
for(let i =2; i<= number*number; i++) {

    while( (number%i) == 0) {

        console.log(i);
        number=(number/i);
    }
}