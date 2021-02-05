// eslient-disable 

// Arrays
const arrayOfStringsAndNumbers: (string | number)[] = [];
arrayOfStringsAndNumbers.push(1);

const firstItemInArray = arrayOfStringsAndNumbers[0];

// Tuples
// String, Number  => O ["Here's a string", 500] / String, String => X ["Here's a string","Here's a string"]
const stringAndNumber: [string, number] = ["Here's a string", 500];

const firstItemInTuple: string = stringAndNumber[0];