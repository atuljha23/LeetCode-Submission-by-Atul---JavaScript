var moveZeroes = function(nums) {
    let len = nums.length
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 0) {
            nums[nums.length] = nums[i];
            nums.splice(nums.indexOf(nums[i]),1);
        }
    }
    return nums;
};
