// Given a 2D matrix, print all elements in spiral order.

// Example
// Input:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// Output:

// [1,2,3,6,9,8,7,4,5]

function spiralTraversal(matrix){
    let result = [];
    if(matrix.length === 0){
        return [];
    }
    let top = 0; 
    let bottom = matrix.length - 1; 
    let left = 0; 
    let right = matrix[0].length - 1;

     while(top <= bottom && left <= right){
        // Left → Right 
        for(let i = left; i <= right; i++){ 
            result.push(matrix[top][i]); 
        } 
        top++; 
        // Top → Bottom 
        for(let i = top; i <= bottom; i++){ 
            result.push(matrix[i][right]); 
        } 
        right--; 
        // Right → Left 
        if(top <= bottom){ 
            for(let i = right; i >= left; i--){ 
                result.push(matrix[bottom][i]); 
            } bottom--; 
        }
        // Bottom → Top 
        if(left <= right){ 
            for(let i = bottom; i >= top; i--){ 
                result.push(matrix[i][left]); 
            } 
            left++; 
        } 
    }
    return result;
}

    const matrix = [ [1,2,3], [4,5,6], [7,8,9] ]; 
    console.log(spiralTraversal(matrix));
    
    