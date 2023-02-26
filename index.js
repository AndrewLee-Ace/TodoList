const tasks = document.getElementById("tasks");
const history = document.getElementById("history");

function addToList() {
    const task = document.getElementById("text").value;

    if (task === "") {
        alert("Please enter a task");
    } else {
        let inputDiv = document.createElement("div");

        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "defaultCheck1");
        input.setAttribute("value", task);
        input.setAttribute("readonly", true);
        // console.log(input)

        let btn = document.createElement("button");
        btn.innerHTML = "complete!";

        let list = document.createElement("li");
        inputDiv.appendChild(list);
        inputDiv.appendChild(btn);

        list.appendChild(input);

        tasks.appendChild(inputDiv);

        btn.addEventListener("click", () => {
            tasks.removeChild(inputDiv);
            history.appendChild(inputDiv);
            inputDiv.removeChild(btn);

        });
    }
}

