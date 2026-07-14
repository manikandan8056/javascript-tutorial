function capitalizeWords(str) {

    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

let sentence = "i love you sruthi";

console.log(capitalizeWords(sentence));  // Output: "I Love You Sruthi"

console.log(sentence.split(" "));  // Output: ["i", "love", "you", "sruthi"]

console.log(sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)));  // Output: ["I", "Love", "You", "Sruthi"]

console.log(sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));  // Output: "I Love You Sruthi"