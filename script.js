const add = (a, b) => { return a + b };
const subtract = (a, b) => { return a - b };
const multiply = (a, b) => { return a * b };
const divide = (a, b) => { return a / b };
const percent = (a) => { return a / 100 };
console.log(add(4, 5));

let num1="";
let num2="";
let operator="";

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

//logic for clicking and printing the respective
numbers.forEach(number => {
    number.addEventListener("click", () => {
        if(operator===""){
            num1+=number.textContent;
        }

        else{
            num2+= number.textContent;
        }

        display.textContent += number.textContent;
        dispText += number.textContent;
        signUsed= false;
    });
});

signs.forEach(sign => {
    sign.addEventListener("click", () => {
        if (!signUsed) {
            display.textContent += sign.textContent;
            dispText += sign.textContent;
            signUsed=true;
            operator=sign.textContent;
        }
        decimalUsed = false;
        
    });
});



backspace.addEventListener("click", () => {
    dispText = dispText.slice(0, -1)
    display.textContent = dispText;
    decimalUsed=false;
    signUsed = false;
})

reset.addEventListener("click", () => {
    display.textContent = "";

    num1 = "";
    num2 = "";
    operator = "";
    dispText = "";
    decimalUsed = false;
signUsed = false;
})

decimal.addEventListener("click", () => {
    if (!decimalUsed) {

        if(operator===""){
            num1+=".";
        }

        else{
            num2+="."
        }
        display.textContent += ".";
        dispText+="."
        decimalUsed = true;
    }
})


equal.addEventListener("click", () => {
    if(num1===""||num2===""||operator===""){
        return;
    }

    let result = operate(Number(num1),Number(num2),operator);
        
    display.textContent = result;

    num1 = result.toString();
    num2 = "";
    operator = "";

    dispText = result.toString();

    signUsed = false;
    decimalUsed = num1.includes(".");
})