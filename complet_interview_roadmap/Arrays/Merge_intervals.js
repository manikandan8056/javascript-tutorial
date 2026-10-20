
function mergeIntervals(intervals) {
    if (intervals.length === 0) {
        return [];
    }

    // Step 1: Sort intervals by their starting value
    intervals.sort((a, b) => a[0] - b[0]);

    // Step 2: Initialize the result
    const result = [intervals[0]];
    
    // Step 3: Check each interval
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = result[result.length - 1];
        console.log("check_last",last);

        // Step 4: Check if intervals overlap
        if (current[0] <= last[1]) {
            // Merge overlapping intervals
            last[1] = Math.max(last[1], current[1]);
        } else {
            // No overlap, add a new interval
            result.push(current);
        }
    }
    return result;
}
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [9, 12]])); // [ [ 1, 6 ], [ 8, 12 ] ]
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])); // [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
console.log(mergeIntervals([[1, 6], [2, 3], [4, 8], [10, 14], [15, 20]])); // [ [ 1, 8 ], [ 10, 14 ], [ 15, 20 ] ]
