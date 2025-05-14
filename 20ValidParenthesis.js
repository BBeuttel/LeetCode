/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for (char of s){
        //includes makes this a little linger but more efficent to write
        if (Object.values(pairs).includes(char)){
            stack.push(char);
        } else if (Object.keys(pairs).includes(char)){
            if(stack.pop() !== pairs[char])
                return false;
        }
    }
    return stack.length === 0;
};

// check if string length modulo 2 is equal to zero
// create object with closed parens as key and open as value.  iterate through string check value exists then push  it to the empty array
// else check if key exists if  the popped value is not equal to the value of the iterated character return false
//return true
const isValid = (s) => {
    const stack = [];
    const pairs = {
        ']': '[',
        '}': '{',
        ')': '('
    }
    for (char of s) {
        if (Object.values(pairs).includes(char)){
            stack.push(char);
        } else if( Object.keys(pairs). includes(char)){
            if(stack.pop() !== pairs[char]){
                return false;
            }
        }
    }
    return stack.length === 0;
}