
function mergeIntervals(intervals){
    if(intervals.length <= 1) return intervals
    // Sort intervals based on starting value
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    result.push(intervals[0]);
    for(let i = 1; i < intervals.length; i++){
        let current = intervals[i];
        let last = result[result.length-1];
        // console.log(current, last);
        // [ 2, 6 ] [ 1, 3 ]
        // [ 8, 10 ] [ 1, 3 ]
        // [ 9, 12 ] [ 1, 3 ]
        if(current[0] <= last[1]){ // Check Overlap
            last[1] = Math.max(current[1], last[1]);

        }
        else{
            result.push(current);
        } 
    }
    return result;
}
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [9, 12]])); // [ [ 1, 6 ], [ 8, 12 ] ]