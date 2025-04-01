/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').reverse().filter((word) => word.length > 0).toString().replace(/[\s,]/g, ' ');
};