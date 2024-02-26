var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let maxi = 0;
    while(left < right){
      let width = (right - left);
      let maxArea = Math.min( height[left], height[right] ) * width;
      maxi = Math.max(maxi,maxArea);
      if(height[left] <= height[right]){
        left++;
      } else {
        right--;
      }
    }
    return maxi;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));