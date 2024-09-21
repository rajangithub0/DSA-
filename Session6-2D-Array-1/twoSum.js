function twoSum(nums, target) {
    var histroy = {};
    for (var i = 0; i < nums.length; i++) {
        var partner = target - nums[i];
        if (partner in histroy) {
            return [histroy[partner], i];
        }
        else {
            histroy[nums[i]] = i;
        }
    }
    return [];
}
var ans = twoSum([2, 7, 11, 15], 22);
console.log(ans);
