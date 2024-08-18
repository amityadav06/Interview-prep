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
