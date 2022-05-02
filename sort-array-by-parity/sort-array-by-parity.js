var sortArrayByParity = function(nums) {
    return [
        ...nums.filter(num => num % 2 === 0),
        ...nums.filter(num => num %2 !==0)
        ]

}