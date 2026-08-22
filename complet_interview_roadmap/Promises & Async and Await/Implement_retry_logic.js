// Retry means:
// If an API fails, try again a certain number of times.

// Example:

async function retry(fn, retries = 3) {

    for (let attempt = 1; attempt <= retries; attempt++) {

        try {
            return await fn();

        } catch (error) {

            console.log(`Attempt ${attempt} failed`);

            if (attempt === retries) {
                throw error;
            }
        }
    }
}

// Usage:
async function fetchData() {
    const response = await fetch("https://api.example.com/data");

    if (!response.ok) {
        throw new Error("API failed");
    }

    return response.json();
}

retry(fetchData, 3)
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Flow:

// API Call
//    ↓
// Failed
//    ↓
// Retry 1
//    ↓
// Failed
//    ↓
// Retry 2
//    ↓
// Failed
//    ↓
// Retry 3
//    ↓
// Success / Final Failure

// Better production approach
// Usually retry should include delay/backoff rather than immediately hammering the API.

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function retry(fn, retries = 3, delayMs = 1000) {

    for (let attempt = 1; attempt <= retries; attempt++) {

        try {
            return await fn();

        } catch (error) {

            if (attempt === retries) {
                throw error;
            }

            await delay(delayMs);
            delayMs *= 2;
        }
    }
}

// This gives:

// Attempt 1
//    ↓
// 1 second
//    ↓
// Attempt 2
//    ↓
// 2 seconds
//    ↓
// Attempt 3

// This is called exponential backoff.