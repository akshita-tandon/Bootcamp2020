class Calculator{
    static multiply(a,b){
        return a*b;
    }
    static add(a,b){
        return a+b;
    }
    static subtract(a,b){
        return a-b;
    }
    static divide(a,b){
        return a/b;
    }
}

let number=Calculator.multiply(2,5);
console.log("Multiply 2 and 5 ",number);
number=Calculator.add(21,5);
console.log("Addition 21 nad 5",number);
number=Calculator.subtract(1,5);
console.log("Subtraction of 1 and 5",number);
number=Calculator.divide(21,3);
console.log("Divison og 21 and 3",number);