/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maximum = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1) {
            count++
            maximum = Math.max(maximum, count);
        }
        else if (nums[i] === 0) {
            count = 0;
        }
    }
    return maximum;
}