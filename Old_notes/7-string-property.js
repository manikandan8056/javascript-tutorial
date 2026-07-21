//String Property
//---------------
const movie = {
    title : "a",
    year : 1998,
    rating : 4.5,
    director : "b"

};

const showproperites=(obj)=>{
    for(let key in obj) {
        if (typeof obj[key] === "number" || typeof obj[key] === "string")
        console.log(key,obj[key]);

    }
}
showproperites(movie);