//Landscape or Portrait
//---------------------
let width=30;
let height=20;
let Landscape=(width,height)=> (width>height) ? "Landscape":"Portrait";

let shape=Landscape(width,height);
console.log(shape);