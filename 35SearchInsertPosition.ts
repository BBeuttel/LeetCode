function searchInsert(nums: number[], target: number): number {
    //end of array
    let end: number = nums.length - 1;
    //beginning of array
    let start: number = 0;
    //mid point - 1 if array is even
    let middle = Math.floor(end/2);
    //below are edge cases
    if (target < nums[start]) return 0;
    if (target > nums[end]) return nums.length;
    if (target === nums[start]) return start;
// iterate if start is less than end which it always will be
    while(start < end){
        //if target is at midpoint return the midpoint
        if (target === nums[middle]){
            return middle; 
        //if target is less that mid point value set the med equal to the mid point and make the mid point half of that index
        } else if(target < nums[middle]){
            end = middle;
            middle = Math.floor(end/2);
        //this is testing if the two points end index and mid index are next to eachother but the target is greater than the mid you return the mid point plus one
        } else if ((end - middle) === 1 && target > nums[middle]){
            return middle + 1;
        // if targtet is greater than mid point index set the srat index qual to mid point and make mid point the value of end index plus new start index divided by 2
        } else if(target > nums[middle]){
            start = middle;
            middle = Math.floor((end + start)/2)
        //testing if mid  ndex and start index are next to eachother and if target is less than value of of start index return the mid point index
        } else if ((middle - start === 1) && target > nums[start]){
            return middle;
        } 
    }
};