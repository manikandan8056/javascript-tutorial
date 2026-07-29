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
console.log(wordFrequency(sentence));
//output 
// Map(10) {
//   'a' => 10,
//   'p' => 6,
//   'l' => 3,
//   'e' => 4,
//   ' ' => 5,
//   'b' => 2,
//   'n' => 5,
//   'o' => 1,
//   'r' => 1,
//   'g' => 1
// }

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


