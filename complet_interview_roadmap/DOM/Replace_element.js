<p id="text">Old Text</p>
const oldElement = document.getElementById("text");

const newElement = document.createElement("h1");
newElement.textContent = "New Text";

oldElement.replaceWith(newElement);

// Another method:

oldElement.parentNode.replaceChild(newElement, oldElement);
// Interview point
replaceWith()

// replaces the current element.

replaceChild(newElement, oldElement)

// is called on the parent.