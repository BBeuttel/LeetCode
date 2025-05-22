//  Problem: Maximum Square From Array

// You are given an array of integers nums, where each integer represents the length of a side of a stick. Your task is to determine the maximum possible size of a square that can be formed using the sticks.

// Each square requires 4 sticks of the same length. You may use each stick at most once.

// Return the side length of the largest square you can form.

// If no square can be formed, return 0.

function maxSquare(nums: number[]): number {
    if (nums.length < 4){
        return 0;
    }
    nums.sort();
    return nums.length - 3;
}

const array: number[] = [3,2,1,4,5]

console.log(maxSquare(array))