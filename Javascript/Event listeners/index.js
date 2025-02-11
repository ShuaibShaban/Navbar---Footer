
//  DOM Manipulation

document.getElementById("clickButton").addEventListener("click", function() {
    document.body.style.backgroundColor = "#f4a261";
    document.getElementById("message").textContent = "Background color changed!";
    document.body.style.color = "#FFFF";
});

document.getElementById("hoverBox").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
    this.style.color = "white";
    
});

document.getElementById("hoverBox").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightgray";
    this.style.color = "green";
});

document.getElementById("keyInput").addEventListener("keydown", function(event) {
    document.getElementById("keyMessage").textContent = "You pressed: " + event.key;
});

document.getElementById("eventForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("formMessage").textContent = "Form submitted successfully!";
});0