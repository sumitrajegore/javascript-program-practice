var readline = require('readline-sync');
let date = readline.questionInt('Enter the date : ');
let month = readline.question('Enter the month : ');
console.log('date : ', date);
console.log('month : ', month);
if ( date >= 18 && month === "march" && date <= 31 && month === "march") {
    console.log('True');
} else if ( date >= 1 && month === "april" && date <= 30 && month === "april" ) {
    console.log('True');
} else if ( date >= 1 && month === "may" && date <= 31 && month === "may" ) {
    console.log('True');
} else if ( date >= 1 && month === "june" && date <= 18 && month === "june" ) {
    console.log('True');
} else {
    console.log('False');
}
