function twoSum(nums: number[], target: number): number[] {
    let histroy = {};
    for (let i = 0; i < nums.length; i++) {
        let partner = target - nums[i];


        if (partner in histroy) {
            return [histroy[partner], i]
        } else {
            histroy[nums[i]] = i
        }
    }
    return []
}

let ans = twoSum([2, 7, 11, 15], 22)
console.log(ans);
