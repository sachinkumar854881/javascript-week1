/*
Conditional statement 
if 
if else
if elseif
*/
console.log("using of If statement")
var x=20;
if(x>10){
    console.log("x is greater");
}

console.log("using of If else statement")
var x=20;
if(x%2==0){
    console.log("even number")
}
else{
    console.log("odd number")
}

console.log("using If elseif statement")
var a=20;  
if(a==10){  
console.log("a is equal to 10");  
}  
else if(a==15){  
console.log("a is equal to 15");  
}  
else if(a==20){  
console.log("a is equal to 20");  
}  
else{  
console.log("a is not equal to 10, 15 or 20");  
} 
// Calculator using Javascript 
let result;

/*take the operator input*/
const operator = prompt('Enter operator ( either +, -, * or / ): ');

/* take the number input*/
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}