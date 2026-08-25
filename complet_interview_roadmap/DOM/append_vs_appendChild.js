// appendChild()
// Accepts a single Node.

const div = document.createElement("div");
const p = document.createElement("p");

div.appendChild(p);

// append()
// Can append multiple nodes and text.

div.append(
    "Hello ",
    document.createElement("span"),
    " World"
);

// Comparison
// | `append()`          | `appendChild()`       |
// | ------------------- | --------------------- |
// | Multiple arguments  | One argument          |
// | Can append text     | Only Node             |
// | Modern API          | Older API             |
// | Returns `undefined` | Returns appended Node |
