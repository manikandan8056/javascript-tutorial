// Use document.createElement().

const div = document.createElement("div");

div.textContent = "Hello World";

document.body.appendChild(div);

// You can also add attributes:

const button = document.createElement("button");

button.textContent = "Click Me";
button.id = "myButton";
button.className = "btn";

document.body.appendChild(button);
// Interview question

// What is the difference between creating and appending an element?

// const p = document.createElement("p"); // Only creates
// document.body.appendChild(p); // Adds to DOM