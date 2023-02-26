const tasks = document.getElementById("tasks");
const history = document.getElementById("history");

let day_selected = (new Date).getDate(); // current day
let option = '';
option = '<option>No Due Date</option>'; // first option

for (let i = 1; i < 32; i++) {
    // value day number with 0. 01 02 03 04..
    let day = (i <= 9) ? '0' + i : i;

    // or value day number 1 2 3 4..
    // let day = i;

    let selected = (i === day_selected ? ' selected' : '');
    option += '<option value="' + day + '"' + selected + '>' + day + '</option>';
}
option += '<option value= 31+> 31+ </option>';


let due = document.getElementById("day");
due.innerHTML = option;


function addToList() {
    const task = document.getElementById("text").value;
    const date = document.getElementById("day").value;

    if (task === "") {
        alert("Please enter a task");
    } else {
        let inputDiv = document.createElement("div");

        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "defaultCheck1");
        input.setAttribute("value", `${task}`);
        input.setAttribute("readonly", true);
        input.setAttribute("class", document.querySelector('input[name="types"]:checked').value);
        // console.log(input)

        let label = document.createElement("label");
        label.textContent = `Due Date: ${date} days`;

        let cmp = document.createElement("button");
        cmp.innerHTML = "complete!";
        cmp.style.visibility= 'visible';

        let dlt = document.createElement("button");
        dlt.innerHTML = "delete!";
        dlt.style.visibility="visible";

        let cnf = document.createElement("button");
        cnf.innerHTML = "confirm!";
        cnf.style.visibility= 'hidden';

        let cnl = document.createElement("button");
        cnl.innerHTML = "cancel!";
        cnl.style.visibility= 'hidden';

        let list = document.createElement("li");
        inputDiv.appendChild(list);
        inputDiv.appendChild(label);
        inputDiv.appendChild(cmp);
        inputDiv.appendChild(dlt);
        inputDiv.appendChild(cnf);
        inputDiv.appendChild(cnl);

        list.appendChild(input);

        tasks.appendChild(inputDiv);

        cmp.addEventListener("click", () => {
            cmp.style.visibility= 'hidden';
            dlt.style.visibility= 'hidden';
            cnf.style.visibility= 'visible';
            cnl.style.visibility= 'visible';

            cnf.addEventListener("click", () => {
                tasks.removeChild(inputDiv);
                history.appendChild(inputDiv);
                inputDiv.removeChild(cmp);
                inputDiv.removeChild(cnl);
                inputDiv.removeChild(cnf);
                inputDiv.removeChild(label);
            });

            cnl.addEventListener("click", () => {
                cmp.style.visibility = 'visible';
                cnf.style.visibility= 'hidden';
                cnl.style.visibility= 'hidden';
            });
        });

        dlt.addEventListener("click", () => {
            tasks.removeChild(inputDiv);
        });

        
        


    }
}

