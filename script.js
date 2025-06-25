const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.numberButtons');
const operators = document.querySelectorAll('.operatorButtons');
const ac = document.querySelector('#AC');
const del = document.querySelector('#Del');

let input1;
let input2;
let operator;

////////////////////////////////////////////////////////
/**********************Functions***********************/
////////////////////////////////////////////////////////

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(input1, input2, operator) {
    switch (operator) {
        case "+":
            return add(input1, input2);
            break;
        case "-":
            return subtract(input1, input2);
            break;
        case "*":
            return multiply(input1, input2);
            break;
        case "/":
            return add(input1, input2);
            break;
    }
}



////////////////////////////////////////////////////////
/****************Event Listeners***********************/
////////////////////////////////////////////////////////

//Number display
buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});

//Operator display
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        display.textContent += operator.textContent;
    });
});

//For AC buttons
ac.addEventListener('click', () => {
    display.textContent = '';
});

//For AC buttons
del.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0,-1);
});
