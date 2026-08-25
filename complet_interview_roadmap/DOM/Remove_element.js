<div id="box">Hello</div>

const box = document.getElementById("box");

box.remove();

// Another way:

box.parentNode.removeChild(box);
// Practice

// Create a button that removes a paragraph when clicked.

const button = document.createElement("button");
button.textContent = "Remove";

const paragraph = document.createElement("p");
paragraph.textContent = "Hello";

document.body.append(paragraph, button);

button.addEventListener("click", function () {
    paragraph.remove();
});