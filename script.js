let add= (a,b)=>{
    return a+b;
}

let sub= (a,b)=>{
    return a-b;
}

let mul= (a,b)=>{
    return a*b;
}

let div= (a,b)=>{
    if(b === 0) {
        return "Error: Division by zero";
    }
    return a/b;
}

let mod= (a,b)=>{
    return a%b;
}

//we have to use first class citizen principle
let operations = {
    add: add,
    sub: sub,
    mul: mul,
    div: div,
    mod: mod
};
let calculator = (a, b, operation) => {
    return operation(a, b);
}

console.log(calculator(10, 5, operations.add));

//arrays
const arr= new Array(1,2,3,4,5,6,7,8,9,10);
console.log(arr.length);
console.log(arr[0]);

//propmpts
let userInput = prompt("Enter a number:");




