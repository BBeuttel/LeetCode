/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let lastDigitIndex = digits.length - 1;
    
    for (let i = lastDigitIndex; i >= 0; i--){
        if (digits[i] < 9){
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};

//got to length of the array -1 and add 1 to the number
//edge cases are for 9 if 9
//iterate throughn array if value is less than 9 then add one ot the lenght of the array -1 return the array
// if value is equal to 9 set value equal to zero