// A simplified browser model:

//                  ┌─────────────────┐
//                  │    Call Stack   │
//                  └────────┬────────┘
//                           │
//                           ↓
//                  ┌─────────────────┐
//                  │   Event Loop    │
//                  └────────┬────────┘
//                           │
//               ┌───────────┴───────────┐
//               ↓                       ↓
//       Microtask Queue          Task Queue
//       Promise.then()           setTimeout()
//       queueMicrotask()         DOM events
//               │                setInterval()
//               └───────┬───────────────┘
//                       ↓
//                   Call Stack

// The browser also has Web APIs:

// fetch()
// setTimeout()
// DOM events

// which operate outside the JavaScript call stack.