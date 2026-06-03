const add = (a, b) => { return a + b };
const subtract = (a, b) => { return a - b };
const multiply = (a, b) => { return a * b };
const divide = (a, b) => {
    if (b == 0) {
        return "Enter valid divisor!"
    }
    else {
        return a / b
    };
};
const percent = (a) => { return a / 100 };
console.log(add(4, 5));

let num1 = "";
let num2 = "";
let operator = "";

const operate = (num1, num2, operator) => {

    if (operator === "+") {
        return add(num1, num2);
    }
    else if (operator === "-") {
        return subtract(num1, num2);
    }
    else if (operator === "*") {
        return multiply(num1, num2);
    }
    else if (operator === "/") {
        return divide(num1, num2)
    }
    else if (operator === "%") {
        return percent(num1);
    }
    else {
        return alert("Please enter valid operator");
    }

}


const numbers = document.querySelectorAll(".number");
const signs = document.querySelectorAll(".operator");
const reset = document.querySelector("#reset");
const backspace = document.querySelector("#delete");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("#equal");
const display = document.querySelector(".display")
let dispText = "";
let decimalUsed = false;
let signUsed = false;
let resultDisplayed = false;

//logic for clicking and printing the respective
numbers.forEach(number => {
    number.addEventListener("click", () => {

        if (resultDisplayed) {
            display.textContent = "";

            num1 = "";
            num2 = "";
            operator = "";
            dispText = "";

            decimalUsed = false;
            signUsed = false;

            resultDisplayed = false;
        }

        if (operator === "") {
            num1 += number.textContent;
        }
        else {
            num2 += number.textContent;
        }

        display.textContent += number.textContent;
        dispText += number.textContent;
        signUsed = false;
    });
});

signs.forEach(sign => {
    sign.addEventListener("click", () => {
        if (num1 !== "" && num2 !== "" && operator !== "") {

            let result = operate(
                Number(num1),
                Number(num2),
                operator
            );

            if (typeof result === "number") {
                result = Number(result.toFixed(2));
            }

            num1 = result.toString();
            num2 = "";

            display.textContent = num1;
            dispText = num1;
        }
        if (signUsed) {
            display.textContent = display.textContent.slice(0, -1);
            dispText = dispText.slice(0, -1);
        }

        display.textContent += sign.textContent;
        dispText += sign.textContent;

        operator = sign.textContent;
        signUsed = true;
        decimalUsed = false;

    });
});



backspace.addEventListener("click", () => {

    let deletedChar = dispText.slice(-1);
    dispText = dispText.slice(0, -1);

    if (deletedChar === ".") {
        decimalUsed = false;
    }
    if (deletedChar === operator) {
        operator = "";
        signUsed = false;
    }
    else if (operator !== "") {
        num2 = num2.slice(0, -1);
    }
    else {
        num1 = num1.slice(0, -1);
    }

    display.textContent = dispText;
});

reset.addEventListener("click", () => {
    display.textContent = "";

    num1 = "";
    num2 = "";
    operator = "";
    dispText = "";
    decimalUsed = false;
    signUsed = false;
    resultDisplayed = false;
})

decimal.addEventListener("click", () => {
    if (!decimalUsed) {

        if (operator === "") {
            num1 += ".";
        }

        else {
            num2 += "."
        }
        display.textContent += ".";
        dispText += "."
        decimalUsed = true;
    }
})


equal.addEventListener("click", () => {
    if (num1 !== "" && num2 !== "" && operator !== "") {

        let result = operate(Number(num1), Number(num2), operator);

        if (typeof result === "number") {
            result = Number(result.toFixed(2));
        }

        display.textContent = result;

        num1 = result.toString();
        num2 = "";
        operator = "";

        dispText = result.toString();

        signUsed = false;
        decimalUsed = num1.includes(".");

        resultDisplayed = true;
    }
})

//keyBoard support
document.addEventListener("keydown", (event) => {

    const key = event.key;

    // Numbers
    if (key >= "0" && key <= "9") {
        numbers.forEach(number => {
            if (number.textContent === key) {
                number.click();
            }
        });
    }

    // Operators
    signs.forEach(sign => {
        if (sign.textContent === key) {
            sign.click();
        }
    });

    // Decimal
    if (key === ".") {
        decimal.click();
    }

    // Equals
    if (key === "Enter" || key === "=") {
        equal.click();
    }

    // Delete
    if (key === "Backspace") {
        backspace.click();
    }

    // Clear
    if (key === "Escape") {
        reset.click();
    }
});