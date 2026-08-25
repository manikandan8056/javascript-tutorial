// When you click a child element, the event moves upward through its parent elements.

<div id="parent">
    <button id="child">Click</button>
</div>

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

child.addEventListener("click", () => {
    console.log("Child clicked");
});

// Clicking the button:

// Child clicked
// Parent clicked

// Event flow

// Child
//   ↑
// Parent
//   ↑
// Body
//   ↑
// Document

// This is called Event Bubbling.