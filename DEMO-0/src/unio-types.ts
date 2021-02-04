// eslient-disable 

let unionCityPopulation: string | number | boolean = 8000000;
unionCityPopulation = "HyunSang Park";
unionCityPopulation = true;

if (typeof unionCityPopulation === 'string') {
    console.log("String", unionCityPopulation);
} else if (typeof unionCityPopulation === 'number') {
    console.log("Number", unionCityPopulation);
} else if (typeof unionCityPopulation === 'boolean') {
    console.log("Boolean", unionCityPopulation);
}