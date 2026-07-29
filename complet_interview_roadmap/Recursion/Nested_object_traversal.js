function printKeys(obj){
    for(let key in obj){
        console.log(key)
        if(typeof obj[key] == "object" && obj[key] !== null && !Array.isArray(obj[key])){
            printKeys(obj[key])
        }
    }
}

const person = {
    name: "John",
    address: {
        city: "Chennai",
        state: "Tamil Nadu",
        location: {
            pincode: 600001
        }
    }
};
printKeys(person)

// output:-

// name
// address
// city
// state
// location
// pincode