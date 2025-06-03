function searchInsert(nums: number[], target: number): number {
    let end: number = nums.length - 1;
    let start: number = 0;
    let middle = Math.floor(end/2);
    if (target < nums[start]) return 0;
    if (target > nums[end]) return nums.length;
    if (target === nums[start]) return start;

    while(start < end){
        if (target === nums[middle]){
            return middle; 
        } else if(target < nums[middle]){
            end = middle;
            middle = Math.floor(end/2);
        } else if ((end - middle) === 1 && target > nums[middle]){
            return middle + 1;
        } else if(target > nums[middle]){
            start = middle;
            middle = Math.floor((end + start)/2)
        } else if ((middle - start === 1) && target > nums[start]){
            return middle;
        } 
    }
};