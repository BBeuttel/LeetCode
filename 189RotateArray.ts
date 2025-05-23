/**
 Do not return anything, modify nums in-place instead.
 */

 // k minus one will the the index 
 function rotate(nums: number[], k: number): void {
    while (k > 0){
        let last = nums.length - 1;
        nums.unshift(nums[last]);
        nums.pop();
        k--;
    }
};