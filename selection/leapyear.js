var readline = require('readline-sync');
let year = readline.questionInt('Enter year : ');
console.log('year : ', year);

if ( ((year % 400)) == 0 || ((year % 100)) != 0 && ((year % 4)) == 0 ) {

    console.log("leap year");
} else {
    console.log("not leap year");
}