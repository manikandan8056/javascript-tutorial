// Throttle means:
// Execute a function at most once within a specified time interval.

// Example:
function throttle(fn, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
        }
    };
}

// Usage:
const handleScroll = throttle(() => {
    console.log("Scrolling");
}, 1000);

window.addEventListener("scroll", handleScroll);

// Even if the scroll event fires hundreds of times, the function executes at most once per second.

// | Debounce                | Throttle                       |
// | ----------------------- | ------------------------------ |
// | Waits until events stop | Executes periodically          |
// | Search input            | Scroll                         |
// | Resize                  | Mouse movement                 |
// | API search              | Continuous events              |
// | Last event is important | Regular execution is important |


// Easy way to remember:-

// Debounce = "Wait until I stop."
// Throttle = "Slow me down."