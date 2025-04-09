/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seenNumber = new Map(); 

    while (n !== 1) { // if n ===1 then it is happy number
    if (seenNumber.has(n)) return false; // if it is already seen that number it means it will go for another the same loop
    seenNumber.set(n, true);
    n = squaringNumbers(n)
    }
    return true;
    
};

function squaringNumbers(num) {
    let sum = 0;

    while (num > 0) {
        let lastDigit = num % 10; // getting last digit by help of module
        sum += lastDigit * lastDigit; // square digit.
        num = Math.floor(num / 10) // getting rid of last digit 
    }

    return sum;
}