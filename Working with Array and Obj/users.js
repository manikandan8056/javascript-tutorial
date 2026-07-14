const users = [
    { id: 1, name: "Alice", age: 25, isActive: true },
    { id: 2, name: "Bob", age: 30, isActive: false },
    { id: 3, name: "Charlie", age: 22, isActive: true },
    { id: 4, name: "David", age: 28, isActive: false },
  ];

//Transform each item
//Get an array of just user names.(Returns - New array)
const names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob", "Charlie", "David"]
  

//Keep only some items
//Get only active users.(Returns - Filtered array)
const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);
// [{ id: 1, name: "Alice", ... }, { id: 3, name: "Charlie", ... }]


// Find the first match
// Find the user with id = 3.(Returns -	Single item)
const user3 = users.find(user => user.id === 3);
console.log(user3);
// { id: 3, name: "Charlie", age: 22, isActive: true }


// Check if at least one item passes a test
// Are there any inactive users? (Returns - Boolean)
const hasInactive = users.some(user => !user.isActive);
console.log(hasInactive); // true


// Accumulate values
// Get the total age of all users.(Returns - Single value)
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log(totalAge); // 105


// If you want to use them on objects, 
// you can convert the object into an array first
// using methods like:
// Object.keys(obj) → array of keys
// Object.values(obj) → array of values
// Object.entries(obj) → array of [key, value]

const userAges = {
    alice: 25,
    bob: 30,
    charlie: 22
  };
const above25 = Object.values(userAges).filter(age => age > 25);
console.log(above25); // [30]
  

  const scores = {
    math: 90,
    science: 80,
    english: 85
  };
  console.log(Object.entries(scores));
  const subjects = Object.entries(scores).map(([subject, score]) => {
    return `${subject} scored ${score}`;
  });
  
  console.log(subjects);
  // ["math scored 90", "science scored 80", "english scored 85"]
  


  const score = {
    math: 90,
    science: 80,
    english: 85
  };
  const subject = Object.entries(scores).map(([subject, score]) => {
    return `${subject} scored ${score}`;
  });
  
  console.log(subject);
  // ["math scored 90", "science scored 80", "english scored 85"]


//unique object filter using ES6 features
  const arr = [
    { place: "san francisco", name: "jane" },
    { place: "san francisco", name: "jane" },
    { place: "new york", name: "james" }
  ];
  function unique(arr) {
    const uniqu = [];
    for (let obj of arr) {
        if (!uniqu.some(item => JSON.stringify(item) === JSON.stringify(obj))) {
            uniqu.push(obj);
        }
    }
    return uniqu;
}
console.log(unique(arr))


// search for a specific value inside a nested object, 
// you can write a
const data = {
    user: {
      name: "Alice",
      details: {
        address: {
          city: "New York",
          zip: "10001"
        },
        hobbies: ["reading", "coding"]
      }
    }
  };
  
  function hasValue(obj, target) {
    for (let key in obj) {
      const value = obj[key];
  
      if (typeof value === "object" && value !== null) {
        if (hasValue(value, target)) 
          return true;
      } else {
        if (value === target) 
          return true;
      }
    }
    return false;
  }
console.log(hasValue(data, "New York")); // true
console.log(hasValue(data, "dancing"));  // false
console.log(hasValue(data, "coding"));   // true    