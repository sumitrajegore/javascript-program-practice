var readline = require('readline-sync');
let minimum = readline.questionInt('Enter the number : ');
let maximum = readline.questionInt('Enter the number : ');
console.log("manimum : " +minimum);
console.log("maximun : " +maximum);

for (let number = minimum; number<=maximum; number++) {
let temp =0;
for( let i =2; i <= number-1; i++) {
 
    if ( (number%i) == 0) {

        temp = 1;
    }
}
    if(temp == 0) { 

        console.log("\t" +number);
    }
}