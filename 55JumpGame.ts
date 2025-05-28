function canJump(nums: number[]): boolean {
    if (nums.length === 1){
        return true
    }
    let i: number = 0;
    let count: number = nums[i];
    while(count > 0){
        count--;
        //testing if weve reached the end of the array
        if(i === nums.length - 1){
            return true;
        }
        //checking that there is a value that is greater than the count and reassign the value of count if it is
        if(nums[i] > count){
            count = nums[i]
        }
        i++;
    }
    return false
};