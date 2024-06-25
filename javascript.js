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
let numberA = null;
let numberB = null;
let operand;
//
label = document.querySelector('label');
//label.innerText = 
let numKeys = document.querySelectorAll('.numberKeys button')
let keyassign = 9;
numKeys.forEach((numkey) =>{
    numkey.addEventListener('click', () =>{
        if(numberA === null){
            numberB = numkey.innerText;
        }
        else{
            numberA = numkey.innerText;
        }
    })
    keyassign--;
})