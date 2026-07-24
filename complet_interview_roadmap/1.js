const obj1 = {
    name: "John",
    address: {
        city: "Chennai"
    }
};

const obj2 = {
    address: {
        pincode: 600001
    }
};

const merged = {
    ...obj1,
    ...obj2
};

console.log(merged);