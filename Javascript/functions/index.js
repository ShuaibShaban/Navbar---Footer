// named function
// function sum(Num1, Num2) {
//     return Num1 + Num2;
// }

// const result = sum(3, 5);
// document.getElementById("mySum").innerHTML = result;

// Using DOM
// function sum(Num1, Num2) {
//     return Num1 + Num2;
// }

// const result = sum(5, 7);
// document.getElementById("mySum").innerHTML = result;


// Another way 
// function add(x, y) {
//     return x + y;
// }
// console.log(add(2,3));

// // subtraction
// function add(x, y) {
//     return x - y;
// }

// division
// function add(x, y) {
//     return x / y;
// }

// function happyBirthday(username, age) {
//     console.log(`Happy Birthday ${username}! You are ${age} years` )
// }
// happyBirthday("Shaban", 24);

// isEven program
// function isEven(number) {

//     if(number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }

//     // ternary operator
//     return number % 2 === 0 ? true : false;
// }

// let output = isEven(30);
// document.getElementById("evenNo").innerHTML = output;

// console.log(isEven(12));

//  valid email program
function isValidEmail(email) {

    // if(email.includes("@")) {
    //     return true;
    // } else {
    //     return false;
    // }

    // ternary operator
    // return email.includes("@") ? true : false;
}

// console.log(isValidEmail("Shabanfake.com"))

// Arrow functions
const isValidMail = (email) => {
    return email.includes("@") ? true : false;
}

output = isValidMail("Shaban@fake.com");
document.getElementById("mail").innerHTML = output;