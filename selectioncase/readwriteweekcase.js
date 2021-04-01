var readline = require('readline-sync');
let number = readline.questionInt('Enter the number : ');
console.log(number);
switch (number) {
    
    case 1 :    
        console.log('sunday');
        break;
    case 2 :
        console.log('monday');
        break;
    case 3 :
        console.log('tuesday');
        break;
    case 4 :
        console.log('wednesday');
        break;
    case 5 :
        console.log('thrusday');
        break;
    case 6 : 
        console.log('friday');
        break;
    case 7 :
        console.log('saturday');
        break;
    default :
        console.log("Please Enter number in between 1 to 7");
}