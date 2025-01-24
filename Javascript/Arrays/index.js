// Arrays Operations

// Elements, indexes;
let cars = ['BMW', 'Volvo', 'Honda', 'Subaru', 'Audi'];
document.getElementById('demo').innerHTML = cars;
document.getElementById('demo').textContent = cars;
document.getElementById('demo').textContent = cars[0];
document.getElementById('demo').textContent = cars[4];

// Accessing elements in an array
// let bmw = cars[0];
// document.getElementById('demo').textContent = cars[0];
// document.getElementById('demo').innerHTML = bmw;

// Array length property that indicates the length of an array
// let len = cars.length;
// document.getElementById('demo').innerHTML = len;

// Access the last elemet of an array
// let last = [cars.length -1];
// document.getElementById('demo').innerHTML = last;

// Loop over an array item
// cars.forEach((item, index, array) => {
//     console.log(item, index)
// })

// Arrays Methods
// document.getElementById('demo').innerHTML = cars.toString();

// let cars = ['BMW', 'Volvo', 'Honda', 'Subaru', 'Audi'];
// cars.pop();
// console.log(cars);

// cars.push("Audi");
// cars.shift();

// cars.unshift("Hyundai");

// let last1 = cars.pop();
// document.getElementById('demo').innerHTML = last1;

// let last2 = cars[cars.length -1];
// console.log(last2);

// cars.push("Audi");
// document.getElementById('demo').innerHTML = cars;

// cars.shift();
// document.getElementById('demo').innerHTML = cars;


// cars.unshift("Hyundai");
// document.getElementById('demo').innerHTML = cars;

// let cars = ['BMW', 'Volvo', 'Honda', 'Subaru', 'Audi'];
// let bikes = ['Yamaha', 'Suzuki', 'royal einfield'];
// let vehicles = cars.concat(bikes);
// document.getElementById('demo').innerHTML = vehicles;

// vehicles.sort();
// document.getElementById('demo').innerHTML = vehicles;

// vehicles.reverse();
// document.getElementById('demo').innerHTML = vehicles;

// let num1 = [2, 3, 4, 5, 6, 7];
// let num2 = num1.map(multiply);
// function multiply(value) {
//     return value *2;
// }
// vehicles.sort();
// document.getElementById('demo').innerHTML = num2;

// let num3 = num1.filter(comp);
// function comp(value) {
//     return value > 4;
// }
// vehicles.sort();
// document.getElementById('demo').innerHTML = num3;

// let num4 = num1.reduce(sum);
// function sum(value, total) {
//     return total + value;
// }
// vehicles.sort();
// document.getElementById('demo').innerHTML = num4;

