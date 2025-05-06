/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 //need to give value to each char in the string
 //need to compare the two strings to make sure they have the same structure
 //assing char to number values mfor each string and then add to an array
 //use shift method to check the first value of each array against each other

 var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        let sChar = s[i];
        let tChar = t[i];
        if((sMap[sChar] && sMap[sChar] !== tChar) || tMap[tChar] && tMap[tChar] !== sChar){
            return false;
        }
        sMap[sShar] = tChar;
        tMap[tChar] = sChar;
    }
     return true;   
}
