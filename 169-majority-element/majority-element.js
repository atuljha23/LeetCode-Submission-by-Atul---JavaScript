/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();
    let index;
    if(nums.length > 1){
        index = Math.round((nums.length - 1) / 2)
    }
    else index = 0;
    return nums[index];
};