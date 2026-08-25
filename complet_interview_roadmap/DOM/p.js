// DOM Interview Questions You Should Practice

// 1. What is the DOM?

// The DOM (Document Object Model) is a programming interface that represents an HTML document as a tree of objects, allowing JavaScript to read and modify the page.

// Document
//    │
//   HTML
//  /    \
// Head   Body
//        │
//       Div
//      /   \
//     H1   Button
// 2. Explain Event Bubbling.

// An event starts at the target element and propagates upward through its ancestors.

// 3. Explain Event Capturing.

// An event travels from the top of the DOM tree down toward the target element.

// 4. What is Event Delegation?

// Attach one event listener to a parent element and handle child events using event.target.

// 5. What is the difference between event.target and event.currentTarget?
parent.addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.currentTarget);
});
// event.target → The actual element clicked.
// event.currentTarget → The element where the event listener is attached.
// // 6. How do you stop bubbling?
event.stopPropagation();
// 7. How do you prevent the default browser behavior?
event.preventDefault();

// Example:

form.addEventListener("submit", function (event) {
    event.preventDefault();
});