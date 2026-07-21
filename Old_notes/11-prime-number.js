//Prime Number
//------------
//prime(number can divide itself and 1 only)
//12 = 1,2,3,4,6,12 (we will never get any remainder it will be 0)
//can be devided evenly be its factors
//11 = 1,11 -prime
///13 = 1,13 -prime

const showPrime = limit => {
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) console.log(num);
    }
};
// Checking if n = 29 is Prime
// √29 = 5.38
// We only check divisibility for 2, 3, 4, 5, not 6...28.
const isPrime = num => {
    if (num < 2) return false;
    for (let fact = 2; fact <= Math.sqrt(num); fact++) {
        if (num % fact === 0) return false;
    }
    return true;
};
//Without Math.sqrt(n) (Inefficient)
// const isPrime = num => {
//     if (num < 2) return false;
//     for (let fact = 2; fact < num; fact++) { // Loops up to num-1
//         if (num % fact === 0) return false;
//     }
//     return true;
// };
// console.log(isPrime(36)); // Output: false

// Example Usage:
showPrime(10); // Output: 2, 3, 5, 7