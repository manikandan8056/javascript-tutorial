// | Feature          | Object                                               | Map                                                    |
// | ---------------- | ---------------------------------------------------- | ------------------------------------------------------ |
// | Introduced       | From beginning of JavaScript                         | ES6 (2015)                                             |
// | Key Types        | String or Symbol only                                | Any data type (string, number, object, function, etc.) |
// | Order            | Mostly insertion order (with some integer-key rules) | Preserves insertion order                              |
// | Iteration        | Not directly iterable                                | Directly iterable                                      |
// | Size             | `Object.keys(obj).length`                            | `map.size`                                             |
// | Performance      | Good for simple data                                 | Better for frequent add/remove operations              |
// | Built-in Methods | Few                                                  | Many (`set`, `get`, `delete`, `has`, `clear`)          |

// What is an Object?
// An Object is a collection of key-value pairs.

const person = {
    name: "John",
    age: 25,
    city: "Chennai"
};

console.log(person.name); // John
console.log(person.age); // 25
console.log(person.city) // Chennai

// What is a Map?
// A Map is a collection of key-value pairs where keys can be any data type.

const map = new Map();

map.set("name", "John");
map.set("age", 25);
map.set("place", "Chennai")

console.log(map.get("name")); // John
console.log(map.get("age")); // 25
console.log(map.get("place")); // Chennai

// Key Differences
// 1. Key Type
// Object
const obj = {};

obj["name"] = "John";
obj[1] = "One";

console.log(obj); // { "1": "One", name: "John" }

// Notice 1 becomes "1".

// Map
const map = new Map();

map.set(1, "One");
map.set("1", "String One");

console.log(map.get(1)); // One
console.log(map.get("1")); //String One

// Map treats them as different keys.

// 2. Object Keys

const obj = {};

const key = { id: 1 };

obj[key] = "Developer";

console.log(obj); // { "[object Object]": "Developer" }

// Object converts the key into a string.

// Map
const map = new Map();

const key = { id: 1 };

map.set(key, "Developer");

console.log(map.get(key)); // Developer

// Map stores the object itself as the key.


// 3. Size
// Object

const obj = {
    a:1,
    b:2,
    c:3
};

console.log(Object.keys(obj).length); // 3
// Map
const map = new Map();

map.set("a",1);
map.set("b",2);
map.set("c",3);

console.log(map.size); // 3


// 4. Iteration
// Object
const obj = {
    name:"John",
    age:25
};

for(let key in obj){
    console.log(key, obj[key]); // name John  // age 25
}

// Map
const map = new Map();

map.set("name","John");
map.set("age",25);

for(let [key,value] of map){
    console.log(key, value); // name John  // age 25
}


// 5. Deleting
// Object
const obj = {
    name:"John",
    age:25
};

delete obj.age;

console.log(obj); // { name:"John" }


// Map
const map = new Map();

map.set("name","John");
map.set("age",25);

map.delete("age");

console.log(map); // Map(1) { "name" => "John"}

// 6. Check if key exists
// Object
const obj = {
    name:"John"
};

console.log("name" in obj); // true


// Map
const map = new Map();

map.set("name","John");

console.log(map.has("name"));// true


// 7. Clear Everything
// Object
const obj = {
    a:1,
    b:2
};

for(let key in obj){
    delete obj[key];
}

console.log(obj); // {}

// Map
const map = new Map();

map.set("a",1);
map.set("b",2);

map.clear();

console.log(map); // Map(0) {}

// Coding Questions
// 1. Create an Object

const student = {
    id:1,
    name:"Rahul",
    age:22
};

console.log(student);// {id:1,name:"Rahul",age:22}

// 2. Create a Map
const student = new Map();

student.set("id",1);
student.set("name","Rahul");
student.set("age",22);

console.log(student); // Map(3) {"id" => 1,"name" => "Rahul","age" => 22}


// 3. Convert Object → Map

// Using Object.entries():

const obj = {
    name:"John",
    age:25
};

const map = new Map(Object.entries(obj));

console.log(map); // Map(2) {"name" => "John","age" => 25}

// 4. Convert Map → Object

// Using Object.fromEntries():

const map = new Map([
    ["name","John"],
    ["age",25]
]);

const obj = Object.fromEntries(map);

console.log(obj); // { name:"John", age:25 }


// Interview Questions
// Q1. Why is Map faster than Object for frequent insertions and deletions?

// Answer: Map is optimized for dynamic collections. It provides efficient set, get, delete, and has operations 
// without the overhead of object prototype properties or manual size calculation.

// Q2. Can an object be used as a key in an Object?

// Answer: No. In a plain object, keys are converted to strings, so an object key becomes "[object Object]".

const obj = {};
const key = { id: 1 };

obj[key] = "value";

console.log(obj); // { "[object Object]": "value" }


// Q3. Can an object be used as a key in a Map?

// Answer: Yes. Map stores the object reference as the key.

const map = new Map();
const key = { id: 1 };

map.set(key, "value");

console.log(map.get(key)); // value


// Q4. How do you find the number of entries?
// Object: Object.keys(obj).length
// Map: map.size


// Q5. How do you iterate over all entries?
// Object:
for (const key in obj) {
  console.log(key, obj[key]);
}
// Map:
for (const [key, value] of map) {
  console.log(key, value);
}