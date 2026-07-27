function findKey(obj, target){
    for(let key in obj){
        if(key == target){
            return obj[key]
        }
        if(typeof obj[key] === "object" && obj[key] !== null){
            let result = findKey(obj[key], target)
            if(result !== undefined){
                return result;
            } 
        }
    }
}

const company = {
    employee: {
        personal: {
            firstName: "John"
        }
    }
};

console.log(findKey(company, "firstName"));