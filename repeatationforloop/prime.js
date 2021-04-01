var readline = require('readline-sync');
let number = readline.questionInt('Enter the number : ');
console.log(number);
let temp =0;
for( let i =2; i <= number-1; i++) {
 
    if ( (number%i) == 0) {

        temp = 1;
    }
}
if(temp == 0) {
        console.log('prime');
} else {
    console.log('not prime');
}