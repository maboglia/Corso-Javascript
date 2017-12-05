function calculateSums(nums) {
    var positive = 0;
    var negative = 0;
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (num >= 0) {
        	positive = positive + num;
        } else {
        	negative = negative + Math.abs(num);
        }      
    }
    return positive > negative;
}