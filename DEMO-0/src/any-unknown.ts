// eslient-disable 
let myAnyVariable: any;

myAnyVariable = "Hello there!";
myAnyVariable = 1;
myAnyVariable = {
    greeting: "Hello there"
}

const property = myAnyVariable.dosNotExitst;
myAnyVariable.sayHello();

let myUknownVariable: unknown;

myUknownVariable = "Hello there!";
myUknownVariable = 1;
myUknownVariable = {
    greeting: "Hello there"
}

// ERROR
// const propertyUnkown = myUknownVariable.dosNotExits;
// myUknownVariableVariable.sayHello();

