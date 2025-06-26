const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.numberButtons');
const operators = document.querySelectorAll('.operatorButtons');
const ac = document.querySelector('#AC');
const del = document.querySelector('#Del');
const equal = document.querySelector('#equal');

let input1 = '';
let input2 = '';
let operator = '';
let resultShown = false;

////////////////////////////////////////////////////////
// Math Functions
////////////////////////////////////////////////////////

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Nope.";
    return a / b;
}

function operate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case '+': return roundResult(add(a, b));
        case '-': return roundResult(subtract(a, b));
        case '*': return roundResult(multiply(a, b));
        case '/': return divide(a, b);
        default: return b;
    }
}

function roundResult(num) {
    return Math.round(num * 1000) / 1000;
}

////////////////////////////////////////////////////////
// Event Listeners
////////////////////////////////////////////////////////

// Digit & Decimal Input
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const btn = button.textContent;

        if (resultShown) {
            display.textContent = '';
            resultShown = false;
        }

        // Prevent multiple dots
        if (btn === '.' && display.textContent.includes('.')) return;

        // Prevent exceeding 12 characters
        if (display.textContent.length >= 12) return;

        // Prevent multiple leading zeros like "0000"
        if (btn === '0' && display.textContent === '0') return;

        // Replace leading "0" with non-zero digit (e.g. "04" becomes "4")
        if (display.textContent === '0' && btn !== '.' && btn !== '0') {
            display.textContent = btn;
            return;
        }

        display.textContent += btn;
    });
});



// Operator Input
operators.forEach(op => {
    op.addEventListener('click', () => {
        // If already has input1 and operator, evaluate first
        if (input1 !== '' && operator !== '' && !resultShown) {
            input2 = display.textContent;
            const result = operate(input1, input2, operator);
            display.textContent = result;
            input1 = result === "Nope." ? '' : result;
            input2 = '';
            resultShown = true;
        } else {
            input1 = display.textContent;
        }

        operator = op.textContent;
        resultShown = true;
    });
});

// Equal Button
equal.addEventListener('click', () => {
    if (input1 === '' || operator === '') return;

    input2 = display.textContent;
    const result = operate(input1, input2, operator);

    display.textContent = result;
    input1 = result === "Nope." ? '' : result;
    input2 = '';
    operator = '';
    resultShown = true;
});

// All Clear
ac.addEventListener('click', () => {
    display.textContent = '';
    input1 = '';
    input2 = '';
    operator = '';
    resultShown = false;
});

// Delete
del.addEventListener('click', () => {
    if (resultShown) {
        display.textContent = '';
        resultShown = false;
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
});
