function flattenObject(obj, parentKey="", result={}){
    for(let key in obj){
        let newKey = parentKey? `${parentKey}.${key}` : key;
        if(typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])){
            flattenObject(obj[key], newKey, result)
        }
        else{
            result[newKey] = obj[key]
        }
    }
    return result;
    
}

// Input
const company = {
    name: "ABC",
    employee: {
        personal: {
            firstName: "John",
            lastName: "Doe"
        },
        address: {
            city: "Chennai",
            state: "Tamil Nadu"
        }
    }
};

console.log(flattenObject(company)); 
// Output 
// {
//   name: 'ABC',
//   'employee.personal.firstName': 'John',
//   'employee.personal.lastName': 'Doe',
//   'employee.address.city': 'Chennai',
//   'employee.address.state': 'Tamil Nadu'
// }