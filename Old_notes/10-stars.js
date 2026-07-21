// Stars
//-----

const showStar = rows => {
    for (let row = 1; row <= rows; row++) {
        console.log("*".repeat(row)); // Using repeat() to generate stars
    }
};

showStar(10);

// Step-by-Step Execution (showStar(5))
// First Iteration (row = 1)
// Condition: 1 <= 5 ✅ (true, continue)
// "*".repeat(1) → "*"
// Prints:  *
// row++ → row = 2