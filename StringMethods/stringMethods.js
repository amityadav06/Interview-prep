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

// ----------------- String Interview question ----------------------------------------
//  Count Vowels and Consonants

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

// ----------------- String Interview question ----------------------------------------
// Permutations of a String

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
