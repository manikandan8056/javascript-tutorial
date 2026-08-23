// Debounce means:

// Execute the function only after the user stops triggering it for a specified amount of time.

// Very common with:

// Search boxes
// API calls
// Window resize
// Input validation
function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

// Usage:
function search(query) {
    console.log("API call:", query);
}

const debouncedSearch = debounce(search, 500);

debouncedSearch("c");
debouncedSearch("ca");
debouncedSearch("cat");

// Instead of making 3 API calls, only the final call executes after 500ms.

// Why closure?

// Because the returned function needs to remember:

// timer