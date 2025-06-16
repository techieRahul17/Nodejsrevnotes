function sum(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function divide(a,b){
    if(b===0){
        throw new Error("divide");
    }
    return a/b;
}
module.exports = {
    sum,subtract,divide,
};