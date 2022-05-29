let nums = [2,2,3,1];
var thirdMax = function(nums) {
  // de-duplication and sort
  nums = [...new Set(nums)].sort((a, b) => b - a);

  // returns if the number of bits in the array is greater than or equal to 3
   return nums.length > 2 ? nums[2] : nums[0];
};