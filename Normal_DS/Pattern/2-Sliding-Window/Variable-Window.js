// Problems
// ===============================================================
// 1 - longest substring with k unique characters
// ===============================================================
function longestSubstringWithKUniqueChars(str, k){
    if( k === 0) return 0
    let i = 0;
    let j = 0;
    let map = new Map();
    let max = 0

    while(j < str.length){

        if(map.has(str[j])){
            map.set(str[j], map.get(str[j]) + 1)
        }else{
            map.set(str[j], 1)
        }

        if(map.size === k){
            max = Math.max(max, j - i + 1)
        }

        while(map.size > k){
            map.set(str[i], map.get(str[i]) - 1);
            if(map.get(str[i]) === 0){
                map.delete(str[i])
            }
            i++
        }

        j++;
    }

    return max;
}

// Example usage:
console.log(longestSubstringWithKUniqueChars("araaci", 2)); // Output: 4 ("araa")
console.log(longestSubstringWithKUniqueChars("araaci", 1)); // Output: 2 ("aa")
console.log(longestSubstringWithKUniqueChars("cbbebi", 3)); // Output: 5 ("bbebi")

// Problems
// ===============================================================
// 1 - longest substring with All unique characters
// ===============================================================
function longestSubstringWithNoRepeatingChar(str){
    let i = 0;
    let j = 0;
    let map = new Map();
    let max = 0

    while(j < str.length){

        if(map.has(str[j])){
            map.set(str[j], map.get(str[j]) + 1)
        }else{
            map.set(str[j], 1)
        }

        if(map.size === j - i + 1){
            max = Math.max(max, j - i + 1)
        }

        while(map.size < j - i + 1){
            map.set(str[i], map.get(str[i]) - 1);
            if(map.get(str[i]) === 0){
                map.delete(str[i])
            }
            i++
        }

        j++;
    }

    return max;
}

// Example usage:
console.log(longestSubstringWithNoRepeatingChar("araacighi")); // Output: 5 ("acigh")
console.log(longestSubstringWithNoRepeatingChar("araaci")); // Output: 3 ("aci")
console.log(longestSubstringWithNoRepeatingChar("cbbebi")); // Output: 3 ("ebi")