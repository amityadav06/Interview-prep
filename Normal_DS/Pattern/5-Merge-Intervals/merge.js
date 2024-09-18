/* 
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
*/

var merge = function(intervals) {
    if(intervals.length === 0) return []

    intervals.sort((a,b) => a[0] - b[0]);

    let merged = [];
    let currentInterval = intervals[0];
    for(let i = 1 ;i<intervals.length; i++){
        const [currentStart, currentEnd] = currentInterval
        const [nextStart, nextEnd] = intervals[i];

        if(currentEnd >= nextStart){
            currentInterval = [currentStart, Math.max(currentEnd, nextEnd)]
        }else{
            merged.push(currentInterval);
            currentInterval = intervals[i]
        }
    }
     merged.push(currentInterval);

    return merged;
};