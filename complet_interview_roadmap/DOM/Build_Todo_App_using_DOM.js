// This is an excellent interview practice project because it combines:

// 1.DOM selection
// 2.Creating elements
// 3.Event listeners
// 4.Event delegation
// 5.Removing elements
// 6.Dynamic DOM manipulation

HTML
<!DOCTYPE>
<html>
<head>
    <title>Todo App</title>
</head>

<body>

    <h1>Todo App</h1>

    <input
        type="text"
        id="todoInput"
        placeholder="Enter a task"
    />

    <button id="addButton">
        Add Todo
    </button>

    <ul id="todoList"></ul>

    <script src="script.js"></script>

</body>
</html>

// JavaScript
const input = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", function () {

    const task = input.value.trim();

    if (task === "") {
        return;
    }

    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    li.append(text, deleteButton);

    todoList.appendChild(li);

    input.value = "";
});
// Improve it using Event Delegation

// Instead of adding a listener to every Delete button:

todoList.addEventListener("click", function (event) {

    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }

});

// Now every current and future Delete button works.

// Complete Todo App Version
const input = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

function addTodo() {
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    li.append(text, deleteButton);

    todoList.appendChild(li);

    input.value = "";
}

addButton.addEventListener("click", addTodo);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

todoList.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }

});