
// Reverse a string:
// *****************

const reverseString = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

const revString=(str)=>{
    let rev='';
    for(let i = str.length-1; i>=0; i--){
        rev +=str[i]
    }
    return rev;
}
console.log(revString('hello'))
// Example
console.log(reverseString("hello"));  // Output: "olleh"


// Sort an array:
// **************
//Bubble Sort
const sortArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // Swap elements using destructuring
            }
        }
    }
    return arr;
};

// Example
console.log(sortArray([5, 2, 9, 1, 5, 6]));  // Output: [1, 2, 5, 5, 6, 9]


// Find the missing numbers in a given array:
// ******************************************

const findMissingNumbers = (arr) => {
    let missingNumbers = [];
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            missingNumbers.push(i);
        }
    }
    
    return missingNumbers;
};

// Example
console.log(findMissingNumbers([1, 2, 4, 6, 7, 9]));  // Output: [3, 5, 8]


// Sort an alphanumeric array:
// *******************************

const sortAlphanumericArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].localeCompare(arr[j + 1], undefined, { numeric: true }) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

// Example
console.log(sortAlphanumericArray(['a1', 'a10', 'a2', 'a20', 'a3']));  // Output: ['a1', 'a2', 'a3', 'a10', 'a20']


// Valid parentheses:
// **********************

const validParentheses = (str) => {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (const char of str) {
        if (char in map) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (char !== map[last]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

// Example
console.log(validParentheses("()[]{}"));  // Output: true
console.log(validParentheses("(]"));  // Output: false


// Count character occurrence:
// *********************************

const countCharacterOccurrence = (str) => {
    const charCount = {};

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
};

// Example
console.log(countCharacterOccurrence("hello"));  // Output: { h: 1, e: 1, l: 2, o: 1 }


// Find the vowels in a given string:
// **************************************

const findVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    const result = [];
    
    for (const char of str) {
        if (vowels.includes(char)) {
            result.push(char);
        }
    }

    return result;
};

// Example
console.log(findVowels("hello"));  // Output: ['e', 'o']


// Reverse an array:
// ********************

const reverseArray = (arr) => {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
};

// Example
console.log(reverseArray([1, 2, 3, 4, 5]));  // Output: [5, 4, 3, 2, 1]