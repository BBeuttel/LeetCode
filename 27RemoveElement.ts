//iterate through array and look for val if val exists splice val.  return the length of nums

function removeElement(nums: number[], val: number): number {
    for (let i: number = 0; i < nums.length; i++){
        if (nums[i] === val){
            nums.splice(i, 1)
            i--;
        }
    }
    return nums.length;
};

//this is optimal solution