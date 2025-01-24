let fullName = "Shuaib Shaban";
let age = 23;
let studentStatus = "active";

document.getElementById('p1').textContent = fullName;
document.getElementById('p2').textContent = age;
document.getElementById('p3').textContent = studentStatus;


document.getElementById('p1').textContent = `Your name is ${fullName};`;
document.getElementById('p2').textContent = `your age is ${age}`;
document.getElementById('p3').textContent = `your student status is${studentStatus}`;