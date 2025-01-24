const students = {
    name: "Chris",
    age: 21,
    studies: "Computer Science"
};
document.getElementById('demo').innerHTML = students.name + " of the age " + students.age + "studies" + students.studies;

function stud(name, age, studies) {
    this.name = name;
    this.age = age;
    this.studies = studies;
}
const student = stud("Jason", 33, BBIT)
document.getElementById('demo').innerHTML = students.name + " of the age " + students.age + "studies" + students.studies;
