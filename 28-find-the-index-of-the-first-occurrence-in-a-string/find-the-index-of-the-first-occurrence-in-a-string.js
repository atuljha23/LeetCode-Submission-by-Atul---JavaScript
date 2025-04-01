/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let needleLen = needle.length;
    if(haystack.includes(needle)) {
       return haystack.indexOf(needle)
    } else return -1;
};