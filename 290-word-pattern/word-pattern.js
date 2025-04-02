/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let mapP = new Map();
    let mapS = new Map(); // To ensure bidirectional mapping
    let sArr = s.split(' ');

    if (pattern.length !== sArr.length) {
        return false; // If lengths don't match, return false
    }

    for (let index = 0; index < pattern.length; index++) {
        const char = pattern[index];
        const word = sArr[index];

        // Check if the pattern character is already mapped
        if (mapP.has(char)) {
            if (mapP.get(char) !== word) {
                return false; // Mismatch in mapping
            }
        } else {
            // Check if the word is already mapped to another character
            if (mapS.has(word)) {
                if (mapS.get(word) !== char) {
                    return false; // Mismatch in reverse mapping
                }
            }

            // Create the mapping
            mapP.set(char, word);
            mapS.set(word, char);
        }
    }

    return true; // If all checks pass, the pattern matches
};