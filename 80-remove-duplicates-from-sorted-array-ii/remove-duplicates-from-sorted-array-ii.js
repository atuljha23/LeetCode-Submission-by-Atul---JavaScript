var removeDuplicates = function(nums) {
    let k = 0; // Pointer for the next position to place a valid element
    for (let i = 0; i < nums.length; i++) {
        if (k < 2 || nums[i] !== nums[k - 2]) {
            nums[k] = nums[i]; // Place the valid element at index k
            k++; // Increment k
        }
    }
    return k;
};