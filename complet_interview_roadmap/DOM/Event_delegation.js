// Instead of adding an event listener to every child, add one listener to the parent.

<ul id="list">
    <li>Apple</li>
    <li>Mango</li>
    <li>Orange</li>
</ul>

const list = document.getElementById("list");

list.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});

// Because of event bubbling, the click reaches the parent.

// Why use Event Delegation?

// Suppose you have:

// 1000 buttons

// Bad approach:

buttons.forEach(button => {
    button.addEventListener("click", handler);
});

// Better approach:

container.addEventListener("click", function (event) {
    if (event.target.matches(".button")) {
        // handle click
    }
});
// Benefits
// Fewer event listeners
// Better performance
// Works with dynamically added elements

// Example:

list.addEventListener("click", function (event) {
    if (event.target.matches("li")) {
        event.target.remove();
    }
});

// Even newly added <li> elements will work.