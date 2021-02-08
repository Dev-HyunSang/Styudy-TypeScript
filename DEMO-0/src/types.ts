// eslient-disable 

type StringOrNumber = string | number;
type StockCount = number;

type Shirt = {
    name: string;
    numberInStock: number;
}

let myNewShirt: Shirt = {
    name: 'Cool Red Shirt', 
    numberInStock: 100
}

let numberOfShirtsInStock: StockCount = 500;
let numberOfJacketInStock: StockCount = 250;

let typesCityPopulation: StringOrNumber = 90000000;
typesCityPopulation = "London"