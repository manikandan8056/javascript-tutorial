//  const arr = [
//     { place: "san francisco", name: "jane" },
//     { place: "san francisco", name: "jane" },
//     { place: "new york", name: "james" }
//   ];
//   function unique(arr) {
//     const uniqu = [];
//     for (let obj of arr) {
//         if (!uniqu.some(item => JSON.stringify(item) === JSON.stringify(obj))) {
//             uniqu.push(obj);
//         }
//     }
//     return uniqu;
// }
// console.log(unique(arr))

// const user1 = {
//     name: "John",
//     address: {
//         city: "Chennai"
//     }
// };

// const user2 = user1;

// user2.name = "mani"
// console.log(user1,user2); // { name: 'mani', address: { city: 'Chennai' } }

function flattenObject(obj, parentKey = "", result = {}){
    for(let key in obj){
        let newKey = parentKey? `${parentKey}.${key}`: key;
        if(typeof obj[key] == "object" && null != obj[key] && !Array.isArray(obj[key])){
            flattenObject(obj[key], newKey, result)
        }
        else{
            result[newKey] = obj[key]
        }
    }
    return result;
}

const user = {
    name: "John",
    address: {
        city: "Chennai",
        place:
        { District: "Ambattur"},
        state: "Tamil Nadu"
    }
};

console.log(flattenObject(user)); // { name: 'John', 'address.city': 'Chennai', 'address.place.District': 'Ambattur', 'address.state': 'Tamil Nadu' }
