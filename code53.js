var maxSubArray = function(nums) {
    let currentMax = nums[0];
    let maxi = nums[0];
    for(let i = 1; i < nums.length; i++){
      currentMax = Math.max(nums[i], currentMax+nums[i]);
      maxi = Math.max(maxi,currentMax);
    }
    return maxi;
};

const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));