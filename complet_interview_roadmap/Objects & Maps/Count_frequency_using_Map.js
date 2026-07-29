// Count Frequency using Map (JavaScript)

// Counting frequency using Map is one of the most common JavaScript interview questions. 

// It tests your understanding of:
// Map
// Hash maps
// Counting algorithms
// Strings and Arrays
// Time complexity

// Why Use Map for Counting?
// A Map stores key-value pairs where:

// Key → Element (character, word, number)
// Value → Frequency (count)

// Example:

// Apple → 3
// Banana → 2
// Orange → 1

// Unlike plain objects, a Map:

// Can use any data type as a key.
// Preserves insertion order.
// Has convenient methods like set(), get(), and has().
// Map Methods

set()

// Adds or updates a key-value pair.

// Syntax
map.set(key, value);
// Example
const map = new Map();

map.set("apple", 2);
map.set("banana", 3);

console.log(map);
// Output
// Map(2) {
//   "apple" => 2,
//   "banana" => 3
// }

get()

// Returns the value for a given key.

// Syntax
map.get(key);
// Example
const map = new Map();

map.set("apple", 5);

console.log(map.get("apple"));// 5

// If the key doesn't exist:

console.log(map.get("orange"));// undefined

has()

// Checks whether a key exists.

// Syntax
map.has(key);
// Example
const map = new Map();

map.set("apple", 1);

console.log(map.has("apple"));// true
console.log(map.has("orange"));// false


// Frequency Counting Algorithm

// For every element:

// 1. Check whether it already exists.
// 2. If yes, increment the count.
// 3. Otherwise, initialize the count to 1.

if (map.has(value)) {
    map.set(value, map.get(value) + 1);
} else {
    map.set(value, 1);
}

// Coding Question 1: Count Character Frequency

// Solution
function characterFrequency(str) {
    const map = new Map();
    for(let char of str){
        if(map.has(char)){
            map.set(char, map.get(char) + 1)
        }
        else{
            map.set(char,1)
        }
    }
    return map
}
// Input
const str = "programming";
console.log(characterFrequency(str));

// Ouput 
// Map(8) {
//   'p' => 1,
//   'r' => 2,
//   'o' => 1,
//   'g' => 2,
//   'a' => 1,
//   'm' => 2,
//   'i' => 1,
//   'n' => 1
// }

// Coding Question 2: Count Word Frequency

// Solution
function wordFrequency(sentence) {
    const map = new Map();
    for(let char of sentence){
        if(map.has(char)){
            map.set(char, map.get(char) + 1)
        }
        else{
            map.set(char, 1)
        }
    }
    return map;

}
// Input
const sentence = "apple banana apple orange banana apple";
console.log(wordFrequency(sentence));// Map(10) { 'a' => 10, 'p' => 6, 'l' => 3, 'e' => 4, ' ' => 5, 'b' => 2, 'n' => 5, 'o' => 1, 'r' => 1, 'g' => 1 }

// Coding Question 3: Count Number Frequency

// Solution
function numberFrequency(arr) {
    const map = new Map();
    for(let num of arr){
        if(map.has(num)){
            map.set(num, map.get(num) + 1)
        }
        else{
            map.set(num, 1)
        }
    }
    return map;
}
// Input
const numbers = [2, 1, 3, 2, 4, 1, 2, 5];
console.log(numberFrequency(numbers)) // Map(5) { 2 => 3, 1 => 2, 3 => 1, 4 => 1, 5 => 1 }

// Coding Question 4: Find Most Frequent Element

// Solution
function mostFrequent(arr) {
    const map = new Map();
    for(let num of arr){
            map.set(num, (map.get(num) || 0) + 1)
    }

    let maxCount = 0 ;
    let mostFrequentElement 
    for(let [key, Count] of map){
        if(Count > maxCount){
            maxCount = Count
            mostFrequentElement  = key
        }
    }
    return {
        element: mostFrequentElement,
        count: maxCount
    };

}
// Input
const numbers = [1, 2, 2, 3, 2, 4, 1];
console.log(mostFrequent(numbers));// { element: 2, count: 3 }

// Shorter Counting Pattern
// A common interview shorthand:

const map = new Map();

for (const value of arr) {
    map.set(value, (map.get(value) || 0) + 1);
}

// Explanation:
// 1. map.get(value) returns the current count.
// 2. If the key doesn't exist, it returns undefined.
// 3. undefined || 0 becomes 0.
// 4. Increment by 1.


// Time Complexity
// Let n be the number of elements.

// | Operation          | Complexity |
// | ------------------ | ---------- |
// | Count frequency    | O(n)       |
// | Find most frequent | O(n)       |
// | Total              | O(n)       |

// Average Map lookup, insertion, and update operations are O(1).

// Interview Questions
// 1. Why use Map instead of an object?

// Map offers several advantages:

// 1. Keys can be any data type.
// 2. Maintains insertion order.
// 3. No collision with inherited object properties.
// 4. Convenient methods like set(), get(), and has().

// 2. What does map.get(key) return if the key doesn't exist?
const map = new Map();

console.log(map.get("apple"));//undefined

// 3. Why use (map.get(value) || 0) + 1?
// It avoids checking whether the key already exists.

map.set(value, (map.get(value) || 0) + 1);

// Equivalent to:

if (map.has(value)) {
    map.set(value, map.get(value) + 1);
} else {
    map.set(value, 1);
}

// 4. Can Map use objects as keys?
// Yes.

const map = new Map();

const person = {
    name: "John"
};

map.set(person, 100);

console.log(map.get(person));// 100

// 5. How do you loop through a Map?
const map = new Map([
    ["a", 1],
    ["b", 2]
]);

for (const [key, value] of map) {
    console.log(key, value); // a 1 b 2
}

// Common Mistakes
// ❌ Forgetting to initialize the count
Wrong:
map.set(char, map.get(char) + 1);

// If the key doesn't exist, map.get(char) returns undefined.

Correct:
map.set(char, (map.get(char) || 0) + 1);

// ❌ Using dot notation with Map
Wrong:
map.apple = 1;

Correct:
map.set("apple", 1);

// ❌ Using object methods on Map

Wrong:
map["apple"];

Correct:
map.get("apple");

// Interview Tip
// A reusable frequency-counting function is:

function countFrequency(arr) {
    const map = new Map();

    for (const item of arr) {
        map.set(item, (map.get(item) || 0) + 1);
    }

    return map;
}

// Example:
console.log(countFrequency(["a", "b", "a", "c", "b", "a"]));// Map(3) { 'a' => 3, 'b' => 2, 'c' => 1 }

// Key Interview Takeaways
// Use Map for efficient frequency counting.
// The pattern map.set(key, (map.get(key) || 0) + 1) is the standard interview solution.
// Frequency counting runs in O(n) time with O(n) extra space.
// After building the frequency map, you can easily solve problems like finding duplicates, 
// unique elements, or the most frequent element.