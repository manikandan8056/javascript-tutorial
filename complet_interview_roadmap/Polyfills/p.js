// ⭐ Interview Cheat Sheet

// | Method      | Returns               | Main purpose                         |
// | ----------- | --------------------- | ------------------------------------ |
// | `map()`     | New array             | Transform every element              |
// | `filter()`  | New array             | Select elements                      |
// | `reduce()`  | Single value          | Accumulate                           |
// | `forEach()` | `undefined`           | Iterate                              |
// | `find()`    | Element / `undefined` | Find first match                     |
// | `some()`    | Boolean               | At least one                         |
// | `every()`   | Boolean               | All                                  |
// | `call()`    | Function result       | Execute with `this`, args separately |
// | `apply()`   | Function result       | Execute with `this`, args array      |
// | `bind()`    | New function          | Set `this` for later execution       |


// The most important difference

// map()
//     ↓
// transform

// filter()
//     ↓
// select

// reduce()
//     ↓
// accumulate

// forEach()
//     ↓
// iterate

// find()
//     ↓
// first matching element

// some()
//     ↓
// at least one?

// every()
//     ↓
// all?

// call()
//     ↓
// execute NOW + this + arguments

// apply()
//     ↓
// execute NOW + this + array arguments

// bind()
//     ↓
// execute LATER + this + arguments

// 🔥 Interview order I recommend

// Don't just memorize these. Practice implementing them without looking in this order:

// 1. forEach()
// 2. map()
// 3. filter()
// 4. find()
// 5. some()
// 6. every()
// 7. reduce() * 
// 8. call() *
// 9. apply() *
// 10. bind() *