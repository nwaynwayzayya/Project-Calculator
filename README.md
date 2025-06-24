# Calculator

A simple calculator built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.  
This project covers core JavaScript concepts such as functions, event handling, DOM manipulation, and clean UI interaction logic.

---

## 🚀 Features

✅ Perform basic operations: **add**, **subtract**, **multiply**, **divide**  
✅ Clear button to reset calculations  
✅ Backspace button to fix mistakes  
✅ Decimal point support  
✅ Rounded results for long decimals  
✅ Handles divide by zero with an error message  
✅ Prevents invalid consecutive operations  
✅ Keyboard input support (optional)

---

## 🗂️ Project Structure

- `index.html` — Calculator layout and buttons  
- `style.css` — Styling for a clean user interface  
- `script.js` — JavaScript logic for calculations, display updates, and event handling

---

## 📌 How It Works

- **Math Functions:** Core math operations (`add`, `subtract`, `multiply`, `divide`) are defined as reusable functions.
- **Operate Function:** Determines which operation to execute based on the selected operator.
- **Display:** Shows the current number, input, or result.
- **Event Listeners:** Buttons update the display and manage the calculator’s state.
- **Logic Handling:**  
  - Stores first number, operator, and second number.  
  - Evaluates when `=` is pressed.  
  - Chains operations correctly.
  - Rounds long decimals to fit the display neatly.

---

## 🔢 Usage

1. Click digit buttons to enter numbers.
2. Select an operator (`+`, `-`, `*`, `/`).
3. Enter a second number.
4. Press `=` to see the result.
5. Use `Clear` to reset or `Backspace` to delete the last input.
6. Use the `.` button for decimal numbers.

---

## ⚙️ Pseudocode

### 1️⃣ Define Basic Math Functions

```plaintext
FUNCTION add(a, b)
    RETURN a + b
END FUNCTION

FUNCTION subtract(a, b)
    RETURN a - b
END FUNCTION

FUNCTION multiply(a, b)
    RETURN a * b
END FUNCTION

FUNCTION divide(a, b)
    IF b == 0 THEN
        RETURN "Error: Can't divide by 0"
    ELSE
        RETURN a / b
    END IF
END FUNCTION
```

### 2️⃣ Define operate Function

```plaintext
FUNCTION operate(operator, num1, num2)
    IF operator == "+"
        RETURN add(num1, num2)
    ELSE IF operator == "-"
        RETURN subtract(num1, num2)
    ELSE IF operator == "*"
        RETURN multiply(num1, num2)
    ELSE IF operator == "/"
        RETURN divide(num1, num2)
    END IF
END FUNCTION
```

### 3️⃣ Initialize Variables

```plaintext
SET firstNumber = ""
SET secondNumber = ""
SET currentOperator = ""
SET result = ""
SET shouldResetScreen = FALSE
```

### 4️⃣ Handle Number Button Click

```plaintext
FUNCTION inputNumber(digit)
    IF shouldResetScreen == TRUE THEN
        CLEAR display
        shouldResetScreen = FALSE
    END IF
    APPEND digit to display
END FUNCTION
```

### 5️⃣ Handle Operator Button Click

```plaintext
FUNCTION inputOperator(operator)
    IF currentOperator is NOT empty THEN
        CALL evaluate()
    END IF
    SET firstNumber = display value
    SET currentOperator = operator
    shouldResetScreen = TRUE
END FUNCTION
```

### 6️⃣ Handle Equal Button Click

```plaintext
FUNCTION evaluate()
    IF currentOperator is empty OR shouldResetScreen == TRUE THEN
        RETURN
    END IF
    SET secondNumber = display value
    result = operate(currentOperator, CONVERT firstNumber TO NUMBER, CONVERT secondNumber TO NUMBER)
    ROUND result if necessary
    UPDATE display with result
    SET firstNumber = result
    SET currentOperator = ""
    shouldResetScreen = TRUE
END FUNCTION
```

### 7️⃣ Handle Clear Button Click

```plaintext
FUNCTION clearCalculator()
    SET firstNumber = ""
    SET secondNumber = ""
    SET currentOperator = ""
    SET result = ""
    UPDATE display to 0
END FUNCTION
```

### 8️⃣ Handle Decimal Point

```plaintext
FUNCTION inputDecimal()
    IF display already contains "." THEN
        RETURN
    ELSE
        APPEND "." to display
    END IF
END FUNCTION
```
### 9️⃣ Handle Backspace

```plaintext
FUNCTION backspace()
    REMOVE last character from display
END FUNCTION
```

### 🔟 Keyboard Support (Optional)

```plaintext
ON key press:
    IF key is digit THEN
        inputNumber(key)
    ELSE IF key is operator THEN
        inputOperator(key)
    ELSE IF key is "=" OR "Enter" THEN
        evaluate()
    ELSE IF key is "Backspace" THEN
        backspace()
    ELSE IF key is "Escape" THEN
        clearCalculator()
    ELSE IF key is "." THEN
        inputDecimal()
END ON
```

## ⚠️ Gotchas
- Prevent multiple consecutive operator presses from evaluating prematurely.

- After pressing =, entering a new digit starts fresh.

- Display error for division by zero without crashing.

- Round long decimal results.

- Clear button resets the entire state.

- One decimal point per number only.

## ✅ To-Do / Possible Enhancements
 - Improve styling and responsiveness.

 - Add theme toggle (light/dark mode).

 - More advanced operations (square root, exponent, etc.).

 - Enhanced keyboard support with shortcuts.

