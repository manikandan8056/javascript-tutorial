// function printKeys(obj){
//     for(let key in obj){
//         console.log(key)
//         if(typeof obj[key] == "object" && obj[key] !== null && !Array.isArray(obj[key])){
//             printKeys(obj[key])
//         }
//         // else{

//         // }
//     }
// }

// const person = {
//     name: "John",
//     address: {
//         city: "Chennai",
//         state: "Tamil Nadu",
//         location: {
//             pincode: 600001
//         }
//     }
// };
// printKeys(person)

// import React, { useState, memo } from "react";

// const Child = memo(({ onClick }) => {
//   console.log("Child rendered");

//   return (
//     <div>
//       <h1 onClick={()=>onClick()}>Child Component</h1>
//     </div>
//   );
// });

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     console.log("Child button clicked");
//   };

//   console.log("Parent rendered");

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>

//       <Child onClick={handleClick} />
//     </div>
//   );
// }

// export default App;

// Problem statement:-
// Given the following list of user interaction events (each with type, userId, timestamp, and meta),
//  build an analytics summary for click events only, with this structure:
//     click.unique_users: number of distinct users who performed at least one click
//     click.total_events: total number of click events
//     click.meta.buttonid: for each meta.buttonId, the total count of click events on that button
//INPUT
const events = [
  { type: "click", userId: "u1", meta: { buttonId: "save" } },
  { type: "view", userId: "u2", meta: { page: "/home" } },
  { type: "click", userId: "u1", meta: { buttonId: "cancel" } },
  { type: "view", userId: "u3", meta: { page: "/dashboard" } },
  { type: "hover", userId: "u2", meta: { target: "toolbar.save" } },
  { type: "click", userId: "u3", meta: { buttonId: "delete" } },
  { type: "view", userId: "u1", meta: { page: "/reports" } },
  { type: "hover", userId: "u4", meta: { target: "card.summary" } },
  { type: "view", userId: "u5", meta: { page: "/settings" } },
  { type: "click", userId: "u2", meta: { buttonId: "cancel" } },
  { type: "hover", userId: "u3", meta: { target: "toolbar.save" } }
];


function getClickSummary(events){
  let user = new Set();
  let totalEvents = 0;
  let buttonCounts = {};

  for(let event of events){
    if (event.type == "click") {

      totalEvents++;
      
      user.add(event.userId)

      let buttonId =event.meta?.buttonId;

      if(buttonId){
        buttonCounts[buttonId] = ((buttonCounts[buttonId] || 0) + 1)
      }
    }
  }
  return JSON.stringify({
    click: {
      unique_user: user.size,
      total_events: totalEvents,
      meta:{ 
        buttonid: buttonCounts
      }
    }
  })
}
console.log(getClickSummary(events));
//OUTPUT
// {"click":{"unique_user":3,"total_events":4,"meta":{"buttonid":{"save":1,"cancel":2,"delete":1}}}}


// // 5 Given a string s with words separated by space, reverse the words in the string
 
// // let s = "meet me there"

// // output = "there me meet"


// function reversWord(str){
//   let word = [];
//   let currentWord ='';

//   for(let i = 0; i < str.length; i++){
//     if(str[i] !== ' '){
//       currentWord +=str[i];
//       // console.log(currentWord)
//     }
//     else{
//       word.push(currentWord);
//       currentWord = '';
//     }
//   }
//   word.push(currentWord);
//   // return word
//   let result = '';
//   for(let i = word.length-1; i >= 0; i--){
//     result +=word[i]
//     if(word[i] != 0){
//       result +=' '
//     }
//   }
//   return result;
  
// }

// console.log(reversWord("meet me there"))





// Count of occurrences of one string in a second string

// let s1 = "meet"
// let s2 = "googlemeetmemeet"

// function countStr(s1, s2){
//   let result = {};

//   for(let i of s2){
//     if(result[i]){
//       result[i]++
//     }
//     else{
//       result[i] = 1
//     }
//   }
//   // return result; //{ g: 2, o: 2, l: 1, e: 6, m: 3, t: 2 }
//   let count = [];
//   let s = s1.split('')
//   // return s
//   for(let j in result){
//     if(s.includes(j)){
//       count.push(j);
//     }
//   }
//   return count;
// }



// const events = [
//   { type: "click", userId: "u1", meta: { buttonId: "save" } },
//   { type: "view", userId: "u2", meta: { page: "/home" } },
//   { type: "click", userId: "u1", meta: { buttonId: "cancel" } },
//   { type: "view", userId: "u3", meta: { page: "/dashboard" } },
//   { type: "hover", userId: "u2", meta: { target: "toolbar.save" } },
//   { type: "click", userId: "u3", meta: { buttonId: "delete" } },
//   { type: "view", userId: "u1", meta: { page: "/reports" } },
//   { type: "hover", userId: "u4", meta: { target: "card.summary" } },
//   { type: "view", userId: "u5", meta: { page: "/settings" } },
//   { type: "click", userId: "u2", meta: { buttonId: "cancel" } },
//   { type: "hover", userId: "u3", meta: { target: "toolbar.save" } }
// ];

// function getEventSummary(events) {
//   let summary = {};

//   for (let event of events) {
//     let { type, userId, meta } = event;

//     // Create a summary for each event type
//     if (!summary[type]) {
//       summary[type] = {
//         uniqueUsers: new Set(),
//         totalEvents: 0,
//         meta: {}
//       };
//     }

//     let current = summary[type];

//     // Count total events
//     current.totalEvents++;

//     // Track unique users
//     current.uniqueUsers.add(userId);

//     // Count metadata values dynamically
//     for (let key in meta) {
//       let value = meta[key];

//       if (!current.meta[key]) {
//         current.meta[key] = {};
//       }

//       current.meta[key][value] =
//         (current.meta[key][value] || 0) + 1;
//     }
//   }

//   // Convert Sets into counts before returning JSON
//   let result = {};

//   for (let type in summary) {
//     result[type] = {
//       unique_users: summary[type].uniqueUsers.size,
//       total_events: summary[type].totalEvents,
//       meta: summary[type].meta
//     };
//   }

//   return JSON.stringify(result, null, 2);
// }

// console.log(getEventSummary(events));
