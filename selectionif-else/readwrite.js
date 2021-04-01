var readline = require('readline-sync');
let number = readline.questionInt('Enter the number : ');
console.log(number);
if ( number == 0 ) {
    console.log('zero');
}
else if  ( number == 1 ) {
    console.log('one');
}
else if  ( number == 2 ) {
    console.log('two');
}
else if ( number == 3 ) {
    console.log('three');
}
else if  ( number == 4 ) {
    console.log('four');
}
else if  ( number == 5 ) {
    console.log('five');
}
else if  ( number == 6 ) {
    console.log('six');
}
else if ( number == 7 ) {
    console.log('seven');
}
else if  ( number == 8 ) {
    console.log('eight');
}
else if  ( number == 9 ) {
    console.log('nine');
}
else
 console.log("Entered no. is not a single digit no.");
