 const arr = [
    { place: "san francisco", name: "jane" },
    { place: "san francisco", name: "jane" },
    { place: "new york", name: "james" }
  ];
  function unique(arr) {
    const uniqu = [];
    for (let obj of arr) {
        if (!uniqu.some(item => JSON.stringify(item) === JSON.stringify(obj))) {
            uniqu.push(obj);
        }
    }
    return uniqu;
}
console.log(unique(arr))