var merge = function(nums1, m, nums2, n) {
    const total = m + n; // 6
    let j = 0;

    for (let i = m; i < total; i++) { // i = 3; 3<6; 3+1
        nums1[i] = nums2[j]; // nums[3] = nums2[0]
        j++; // 0+1
    }

    nums1.sort((a, b) => a - b);
};