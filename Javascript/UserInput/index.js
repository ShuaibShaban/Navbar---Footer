let username;

document.getElementById('mySubmit').onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById('myH1').textContent = `Hello ${username}!`;
}


// username = window.prompt("what's your username?");
// console.log(username);