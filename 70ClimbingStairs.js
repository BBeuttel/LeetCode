var climbStairs = function(n) {
    if(n === 1) return 1;
    let a = 1;
    let b = 1;
    for(let i = 2; i <= n; i++){
        let tempValue = a + b;
        a = b;
        b = tempValue;
    }
    return b;
};