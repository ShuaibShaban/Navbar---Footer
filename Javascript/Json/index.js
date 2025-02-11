const myObj = {
    name: "Shuaib Shaban",
    hobbies: ["Jet Ski, Swimming", "Basketball"],
    hello: function() {
        console.log("Hello!");
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

// accessing the properties after converting to json object string
console.log(sendJSON.name);

// converting the string JSON to an object
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
