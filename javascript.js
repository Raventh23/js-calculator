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
let numberA;
let numberB;
let operand;