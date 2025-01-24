// ternary operator =  a shortcut to if() and else statements 
        // helps to assign a variable based on a condition
        // condition ? conditionIfTrue : conditionIfFalse;

        // let age = 25;
        // let canVote = age >= 18 ? "You can vote" : "You cannot vote";
        // console.log(canVote);

        // let age = 21;
        // let message = age >= 18 ? "You are an adult" : "You are a minor";

        // console.log(message)

        let age = 21;
        let message;

        if(age >= 10){
            message = "You are a child";
        }
        else {
            message = "you are an adult";
        }

        let time = 12;
        let greeting = time < 12 ? "Good morning" : "Good afternoon!";
        console.log(greeting)