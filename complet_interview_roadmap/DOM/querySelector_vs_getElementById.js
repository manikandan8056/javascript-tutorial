// getElementById()
const element = document.getElementById("title");

// Only selects by ID.

<h1 id="title">Hello</h1>

// querySelector()

// Uses CSS selectors.

document.querySelector("#title");
document.querySelector(".card");
document.querySelector("button");
document.querySelector(".container button");

// It returns the first matching element.

// Comparison
// | `getElementById()`  | `querySelector()`              |
// | ------------------- | ------------------------------ |
// | Selects by ID       | Uses CSS selectors             |
// | Specific            | Flexible                       |
// | Returns one element | Returns first matching element |

// For multiple elements:

document.querySelectorAll(".item");