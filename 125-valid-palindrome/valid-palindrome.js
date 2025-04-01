/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let santisedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let reversedString = santisedString.split('').reverse().join('')
    return santisedString === reversedString
};