document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      addTask();
    });
});

function addTask() {
  // adding table row for the new task
  let tr = document.createElement("tr");

  //adding task feilds
  addTaskField("new-task-description", tr);
  addTaskField("user", tr);
  addTaskField("duration", tr);
  addTaskField("due", tr);

  addXButt(tr);
  addEditButt(tr);

  document.getElementsByTagName("tbody")[0].appendChild(tr);

}

function addTaskField(id, tr) {
  let taskField = document.createElement("td");
  let divTask = document.createElement("div");
  divTask.innerHTML = document.getElementById(id).value;
  taskField.appendChild(divTask);
  tr.appendChild(taskField);
}

function addEditButt(tr) {
  let td = document.createElement("td");
  let button = document.createElement("button");
  button.id = "edit";
  button.innerHTML = "Edit";

  button.addEventListener("click", () => {
    let tds = tr.querySelectorAll("td");
    for (let i = 0; i < 4; i++) {
      editFeild(tds[i]);
    }
    td.remove();
    addSaveButt(tr);
    addDiscardButt(tr);
  });
  td.appendChild(button);
  let xButt = tr.getElementsByClassName("delete")[0];
  tr.insertBefore(td, xButt); 
}

function addSaveButt(tr) {
  let td = document.createElement("td");
  td.classList.add("save");
  let button = document.createElement("button");
  button.innerHTML = "Save";

  button.addEventListener("click", () => {
    let tds = tr.querySelectorAll("td");
    for (let i = 0; i < 4; i++) {
      saveFeild(tds[i]);
    }
    td.remove();
    tr.getElementsByClassName("discard")[0].remove();
    addEditButt(tr);
  });

  td.appendChild(button);
  let xButt = tr.getElementsByClassName("delete")[0];
  tr.insertBefore(td, xButt);
}

function addDiscardButt(tr){
  let td = document.createElement("td");
  td.classList.add("discard");
  let button = document.createElement("button");
  button.innerHTML = "Discard";

  button.addEventListener("click", () => {
    let tds = tr.querySelectorAll("td");
    for (let i = 0; i < 4; i++) {
      discardChanges(tds[i]);
    }
    td.remove();
    tr.getElementsByClassName("save")[0].remove();
    addEditButt(tr);
  })

  td.appendChild(button);
  let xButt = tr.getElementsByClassName("delete")[0];
  tr.insertBefore(td, xButt);

}

function addXButt(tr) {
  let td = document.createElement("td");
  td.className = "delete";
  let button = document.createElement("button");
  button.innerHTML = "X";

  button.addEventListener("click", () => {
    tr.remove();
  });
  td.appendChild(button);
  tr.appendChild(td);
}

function editFeild(td) {
  let editInput = document.createElement("input");
  let divTask = td.querySelector("div");
  editInput.value = divTask.innerHTML;
  divTask.style.display = "none";
  td.appendChild(editInput);
}

function saveFeild(td) {
  let divTask = td.querySelector("div");
  let input = td.getElementsByTagName("input")[0];
  divTask.innerHTML = input.value;
  divTask.style.display = "block";
  input.remove();
}

function discardChanges(td){
  let divTask = td.querySelector("div");
  divTask.style.display = "block";

  let input = td.getElementsByTagName("input")[0];
  input.remove();
}