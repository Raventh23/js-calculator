function add(a, b){
    return a + b;
};
function sub(a, b){
    return a - b;
};
function multi(a, b){
    return a * b;
};
function divide(a, b){
    return a / b;
};
function operate(a ,b, operand){
    if(operand == '+'){
        return add(a, b);
    }
    else if(operand == '-'){
        return sub(a, b);
    }
    else if(operand == '*'){
        return multi(a, b);
    }
    else if(operand == '/'){
        if(a == 0 && b == 0){
            alert("what are you thinking?");
        }
        else{
            return divide(a,b);
        }
    }
}
function labelUpdate(){
    label.innerText = (`${numberA} ${operand} ${numberB}`);
}
let numberA = '';
let numberB = '';
let operand = '';
//
label = document.querySelector('label');

let numKeys = document.querySelectorAll('.numberKeys button') //creates the eventlistners for the num keys
numKeys.forEach((numkey) =>{
    numkey.addEventListener('click', () =>{
        if(operand !== ''){ //controls the second number
            numberB += numkey.innerText;
            labelUpdate();
        }
        else{ //controls the first number if no operand is selected
            numberA += numkey.innerText;
            labelUpdate();
        }
    })
})

operandKey = document.querySelector('#plus');
operandKey.addEventListener('click', ()=> {
    operand = '+';
    labelUpdate();
});
operandKey = document.querySelector('#minus');
operandKey.addEventListener('click',()=>{
    operand = '-';
    labelUpdate();
});
operandKey = document.querySelector('#times');
operandKey.addEventListener('click',()=>{
    operand = '*';
    labelUpdate();
});
operandKey = document.querySelector('#divide');
operandKey.addEventListener('click',()=>{
    operand = '/';
    labelUpdate();
});
operateKey = document.querySelector('#equals');
operateKey.addEventListener('click', ()=>{
    numberA = parseInt(numberA);
    numberB = parseInt(numberB);
    numberA = operate(numberA, numberB, operand);
    numberB = ''
    operand = ''
    labelUpdate();
})
clearKey = document.querySelector('#clear');
clearKey.addEventListener('click', ()=>{
    numberA = '';
    numberB = '';
    operand = '';
    labelUpdate();
})