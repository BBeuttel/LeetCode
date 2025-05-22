//if the length of nums is less that 2 return 0
//sort the array

function maximumGap(nums: number[]): number {
    if (nums.length < 2){
        return 0;
    }   
    let output = 0;
    const sorted = nums.sort((a, b) => a - b);
    let one = 0;
    let two = 1; 
    while(one < sorted.length){
        let difference = sorted[two] - sorted[one];
        if(difference > output){
            output = difference;
        }
        one++;
        two++;
    }
    return output;
};