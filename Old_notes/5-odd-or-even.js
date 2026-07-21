//ODD or EVEN
//-----------
// using number of value

// const shownumber=(limit)=>{
//     for(let i = 0; i<=limit; i++){
//         const msg= (i%2 === 0) ? "EVEN":"ODD"
//             console.log(i,msg);
//     }
// };
// shownumber(10);

//using array of value

const showNumber = (numbers) => {
    for (let i of numbers) {
        const msg= (i % 2 === 0) ? "EVEN":"ODD"
            console.log(i,msg);
    }
};
showNumber([1, 2, 3, 4, 56, 7, 8]);