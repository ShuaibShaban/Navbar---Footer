"use strict";

const makeError = () => {
    try {
        const name = "Shuaib";
        name = "Shaban";
    } catch(err){
        // console.log(err)
        // console.error(err.name);
        // console.log(err.message);
        console.log(err.stack);
        // console.warn(err);
        // console.table(err);
    }
}

makeError();


function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`
}