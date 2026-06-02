const add =(a,b)=> {return a+b};
const subtract = (a,b)=>{return a-b};
const multiply = (a,b)=>{return a*b};
const divide = (a,b)=>{return a/b};
const percent = (a)=>{return a/100};
console.log(add(4,5));

let num1;
let num2;
let operator;

const operate = (num1,num2,operator)=>{
    
    if(operator === "+"){
        return add(num1,num2);
    }
    else if (operator === "-"){
        return subtract(num1,num2);
    }
    else if (operator === "*"){
        return multiply(num1,num2);
    }
    else if (operator ==="/"){
        return divide(num1,num2)
    }
    else if (operator==="%"){
        return percent(num1);
    }
    else{
        return alert("Please enter valid operator");
    }
    
}
