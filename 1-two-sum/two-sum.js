/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let searchMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        let complete = target - nums[i];
        if(searchMap.has(complete)) {
            return [searchMap.get(complete), i]
        }
        searchMap.set(nums[i], i);
    }
    return;
};