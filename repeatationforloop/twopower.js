var readline = require('readline-sync');
let number = readline.questionInt('Enter the number : ');
console.log(number);
let result;
for( let i=1; i<=number; i++ ) {

     result =  (2**number);
}
console.log(result);