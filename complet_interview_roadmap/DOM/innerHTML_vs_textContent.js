// innerHTML

// Reads or inserts HTML.

const div = document.querySelector("#box");

div.innerHTML = "<h1>Hello</h1>";

// The browser creates an actual <h1> element.

// textContent

// Treats everything as text.

div.textContent = "<h1>Hello</h1>";

// Output on screen:

<h1>Hello</h1>

// Important security point ⭐

// Avoid using untrusted user input with innerHTML.
element.innerHTML = userInput;

// This can create security risks such as XSS.

// Prefer:
element.textContent = userInput;