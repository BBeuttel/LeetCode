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