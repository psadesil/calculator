//addition(num1,num2);
/*
const userRequest = prompt("Enter two numbers with the operator");
const requestArray = userRequest.split(" ");
console.table(requestArray);
let num1 = parseInt(requestArray[0]);
let operator = requestArray[1];
let num2 = parseInt(requestArray[2]);
console.log(operate(num1,operator,num2));*/

gettingInput();

function gettingInput(){
 let finalResult = "" ;
const numberButtons = document.getElementById('numberButtons');
numberButtons.addEventListener("click",function(e){
    console.log(e.target.id);
    finalResult = `${finalResult} ${e.target.id}`
});

const operatorButtons = document.getElementById('operatorButtons');
operatorButtons.addEventListener("click",function(e){
    console.log(e.target.id);
    finalResult = `${finalResult} ${e.target.id}`
})
console.log(finalResult);
}


function operate (num1,operator,num2){
    let result = 0 ;
    if (operator == '+'){
        console.log(operator);
        result = addition(num1, num2);
    } else if (operator == '-') {
        console.log(operator);
        result = subtraction(num1, num2);
    } else if (operator == '*') {
        console.log(operator);
        result = multiplication(num1, num2);
    } else if (operator == '/'){
        console.log(operator);
        result = division(num1, num2);
    }

    return result;
}

function addition (num1, num2){
    let additionAnswer = num1 + num2;
    return additionAnswer;
}

function subtraction (num1, num2){
    let subtractionAnswer = num1 - num2;
    return subtractionAnswer;
}

function multiplication (num1, num2){
    let multiplicationAnswer = num1 * num2;
    return multiplicationAnswer;
}

function division (num1, num2){
    let divisionAnswer = num1 / num2;
    return divisionAnswer;
}