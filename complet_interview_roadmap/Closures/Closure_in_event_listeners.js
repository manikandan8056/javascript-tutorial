// Closures are very common in event handlers.

function setupButton(message) {

    const button = document.getElementById("btn");

    button.addEventListener("click", function () {
        console.log(message);
    });
}

setupButton("Button clicked!");

// Even after setupButton() finishes, the event listener remembers:

// message

// That's because the callback forms a closure.

// Another practical example
function createButton(name) {

    const button = document.createElement("button");

    button.textContent = name;

    button.addEventListener("click", () => {
        console.log(`You clicked ${name}`);
    });

    document.body.appendChild(button);
}

createButton("Login");
createButton("Register");

// Each event listener remembers its own name.

// Login button
//     ↓
// closure → name = "Login"

// Register button
//     ↓
// closure → name = "Register"