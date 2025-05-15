var mySqrt = function(x) {
    let i = 1
    while(i){
        let squared = i*i
        if (squared === x){
            return i;
        } else if (squared < x){
            i++;
        } else if (squared > x){
            return i-1;
        }
    }
};

