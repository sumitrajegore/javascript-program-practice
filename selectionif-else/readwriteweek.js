var readline = require('readline-sync');
let number = readline.questionInt('Enter the number : ');
console.log(number);
if ( number == 1 ) {
    console.log('sunday');
}
else if  ( number == 2 ) {
    console.log('monday');
}
else if  ( number == 3 ) {
    console.log('tuesday');
}
else if ( number == 4 ) {
    console.log('wednesday');
}
else if  ( number == 5 ) {
    console.log('thrusday');
}
else if  ( number == 6 ) {
    console.log('friday');
}
else if  ( number == 7 ) {
    console.log('saturday');
}
else
 console.log("Please Enter number in between 1 to 7");
