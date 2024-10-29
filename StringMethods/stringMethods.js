// u have givern a string. replace every letter in string with the following in the 
// alphabet (ie. c becomes d, z becomes a) Then capitalise every letter in the new string
// and finally returned the modified string
// ----------------- GYANN AI Interview question ----------------------------------------

function modifyString(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const code = char.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            if(char === 'Z'){
                result += "A"
            }else{
                let nexChar = String.fromCharCode(code + 1);
                result = 'AEIOU'.includes(nexChar) ? nexChar : nexChar.toLowerCase()
            }
        } else if (code >= 97 && code <= 122) {
            if(char === 'z'){
                result += "a"
            }else{
                let nexChar = String.fromCharCode(code + 1);
                result = 'aeiou'.includes(nexChar) ? nexChar.toUpperCase() : nexChar;
            }
        } else {
            // Non-letter characters remain unchanged
            result += char;
        }
    }

    return result;
}

// Example usage:
const inputString = "Hello, World! zYx";
const modifiedString = modifyString(inputString);
console.log(modifiedString); // Output: "IFMMP, XPSME! AZY"

// -------------------------------------------------------------------------------------
//                          Reverse word from string
// -------------------------------------------------------------------------------------


var reverseWords = function(s) {
    let splits = s.split(' ');
    let stack = [];
    let finalStr = ''

    for(let i of splits){
        stack.push(i)
    }

    while(stack.length){
        let current = stack.pop();
        if(current){
            finalStr = finalStr + " " + current;
        }
    }

    return finalStr.trim();
};


// -------------------------------------------------------------------------------------
//                          Count Vowels and Consonants
// -------------------------------------------------------------------------------------


function countVowelsAndConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for (const char of str) {
        if (char.match(/[a-zA-Z]/)) { // Check if the character is a letter
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

// Example usage:
const result = countVowelsAndConsonants("hello");
console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`); 
// Output: Vowels: 2, Consonants: 3

// ------------------------------------------------------------------------------------
//                       Generate alphanumeric string with given length
//-------------------------------------------------------------------------------------

function generateAlphanumericString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    
    return result;
}

// Example usage:
const randomString = generateAlphanumericString(10);
console.log(randomString);


// -------------------------------------------------------------------------------------
//                              Permutations of a String
// -------------------------------------------------------------------------------------

function permuteString(str) {
    const results = [];

    function permute(current, remaining) {
        if (remaining.length === 0) {
            results.push(current);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                // Create new remaining string by excluding the current character
                const nextCurrent = current + remaining[i];
                const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
                permute(nextCurrent, nextRemaining);
            }
        }
    }

    permute("", str);
    return results;
}

// Example usage:
const permutations = permuteString("abc");
console.log(permutations);
// Output: [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

/* 
Initial Call
Function Call: permuteString("abc")
This calls permute("", "abc").
First Level of Recursion
Current State: current = "", remaining = "abc"

Loop through "abc":
The loop iterates through the characters in remaining ("abc"), which has indices 0, 1, and 2.
Iteration 1: i = 0
Character: 'a'
Next Current:
nextCurrent = current + remaining[0]
nextCurrent = "" + "a" → nextCurrent = "a"
Next Remaining:
nextRemaining = remaining.slice(0, 0) + remaining.slice(1)
nextRemaining = "" + "bc" → nextRemaining = "bc"
Recursive Call:
Call permute("a", "bc").
Iteration 2: i = 1
Character: 'b'
Next Current:
nextCurrent = current + remaining[1]
nextCurrent = "" + "b" → nextCurrent = "b"
Next Remaining:
nextRemaining = remaining.slice(0, 1) + remaining.slice(2)
nextRemaining = "a" + "" → nextRemaining = "ac"
Recursive Call:
Call permute("b", "ac").
Iteration 3: i = 2
Character: 'c'
Next Current:
nextCurrent = current + remaining[2]
nextCurrent = "" + "c" → nextCurrent = "c"
Next Remaining:
nextRemaining = remaining.slice(0, 2) + remaining.slice(3)
nextRemaining = "ab" + "" → nextRemaining = "ab"
Recursive Call:
Call permute("c", "ab").
Summary of First Level Calls
At the end of the first level of recursion, we have three recursive calls made:

permute("a", "bc")
permute("b", "ac")
permute("c", "ab")
Next Levels of Recursion
Each of these calls will now proceed to the next level of recursion, continuing to build the permutations further:

For permute("a", "bc"):

Current state: current = "a", remaining = "bc"
Loop through "bc" and make two more recursive calls.
For permute("b", "ac"):

Current state: current = "b", remaining = "ac"
Loop through "ac" and make two more recursive calls.
For permute("c", "ab"):

Current state: current = "c", remaining = "ab"
Loop through "ab" and make two more recursive calls.
This process continues recursively until all characters have been used in each permutation. Let me know if you'd like to see the subsequent levels in detail!



You said:
complete it by making all levels of recursive calls
ChatGPT said:
ChatGPT
Sure! Let’s complete the recursive calls for the input string "abc," showing all levels of recursion until all permutations are generated.

Initial Call
Call: permuteString("abc")
Calls permute("", "abc").
First Level of Recursion
Current State: current = "", remaining = "abc"

Iterate through "abc":
i = 0: Call permute("a", "bc")
i = 1: Call permute("b", "ac")
i = 2: Call permute("c", "ab")
Second Level of Recursion
Call 1: permute("a", "bc")
Current State: current = "a", remaining = "bc"

Iterate through "bc":
i = 0: Call permute("ab", "c")
i = 1: Call permute("ac", "b")
Call 2: permute("b", "ac")
Current State: current = "b", remaining = "ac"

Iterate through "ac":
i = 0: Call permute("ba", "c")
i = 1: Call permute("bc", "a")
Call 3: permute("c", "ab")
Current State: current = "c", remaining = "ab"

Iterate through "ab":
i = 0: Call permute("ca", "b")
i = 1: Call permute("cb", "a")
Third Level of Recursion
From permute("a", "bc"):
Call: permute("ab", "c")
Current State: current = "ab", remaining = "c"
i = 0: Call permute("abc", "")
Call: permute("ac", "b")
Current State: current = "ac", remaining = "b"
i = 0: Call permute("acb", "")
From permute("b", "ac"):
Call: permute("ba", "c")
Current State: current = "ba", remaining = "c"
i = 0: Call permute("bac", "")
Call: permute("bc", "a")
Current State: current = "bc", remaining = "a"
i = 0: Call permute("bca", "")
From permute("c", "ab"):
Call: permute("ca", "b")
Current State: current = "ca", remaining = "b"
i = 0: Call permute("cab", "")
Call: permute("cb", "a")
Current State: current = "cb", remaining = "a"
i = 0: Call permute("cba", "")
Fourth Level of Recursion (Base Case)
Each of these calls now reaches the base case where remaining is an empty string:

From permute("ab", "c"):

permute("abc", "") → Add "abc" to results.
From permute("ac", "b"):

permute("acb", "") → Add "acb" to results.
From permute("ba", "c"):

permute("bac", "") → Add "bac" to results.
From permute("bc", "a"):

permute("bca", "") → Add "bca" to results.
From permute("ca", "b"):

permute("cab", "") → Add "cab" to results.
From permute("cb", "a"):

permute("cba", "") → Add "cba" to results.
Final Results
At the end of this process, the results array contains all the permutations of the string "abc":

"abc"
"acb"
"bac"
"bca"
"cab"
"cba"
*/