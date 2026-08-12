//Approach 1 — Brute Force
// function maxProfit(price){
    
//     let maxProfit = 0;
//     for(let i = 0; i < price.length; i++){
//         for(let j = i+1; j < price.length; j++){
//             let profit = price[j] - price[i]
//             if(profit > maxProfit){
//                 maxProfit = profit
//             }
//         }  
//     }
//     return maxProfit;
// }


// Approach 2 — Optimized ⭐
function maxProfit(price){
    let minProfit = price[0]
    let maxProfit = 0;
    for(let i = 1; i < price.length; i++){

        if(price[i] < minProfit){
            minProfit = price[i]
        }

        let profit = price[i] - minProfit

        if(profit > maxProfit){
            maxProfit = profit
        }
        
    }
    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5

