document.getElementById("addItem").addEventListener("click", function() {
    let input = document.getElementById("itemInput");
    let itemText = input.value.trim();
    if (itemText !== "") {
        let li = document.createElement("li");
        li.innerHTML = `${itemText} <button class="deleteBtn">Delete</button>`;
        document.getElementById("itemList").append(li);
        input.value = "";
    }
});

document.getElementById("prependItem").addEventListener("click", function() {
    let input = document.getElementById("itemInput");
    let itemText = input.value.trim();
    if (itemText !== "") {
        let li = document.createElement("li");
        li.innerHTML = `${itemText} <button class="deleteBtn">Delete</button>`;
        document.getElementById("itemList").prepend(li);
        input.value = "";
    }
});

document.getElementById("itemList").addEventListener("click", function(event) {
    if (event.target.classList.contains("deleteBtn")) {
        event.target.parentElement.remove();
    }
});