var isPalindrome = function(x) {
    if(x < 0) return false;
    x = x.toString();
    let left = 0;
    let right = x.length-1;
    while(left < right){
      if(x[left] !== x[right]){
        return false;
      }
      left++;
      right--;
    }
    return true;
};

const x = 121;
console.log(isPalindrome(x));
