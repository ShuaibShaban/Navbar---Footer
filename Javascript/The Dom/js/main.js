        // Select elements
        const input = document.getElementById("taskInput");
        const button = document.getElementById("addTaskBtn");
        const list = document.getElementById("taskList");
        // const title = document.getElementsByTagName('h1');


        // Add task function
        button.addEventListener("click", function() {
            if (input.value.trim() !== "") {
                const li = document.createElement("li");
                li.textContent = input.value;
                li.classList.add("list-item");
                list.appendChild(li);
                input.value = "";
            }
        });

        // Remove task on click
        list.addEventListener("click", function(event) {
            if (event.target.tagName === "LI") {
                event.target.remove();
            }
        });